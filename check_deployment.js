const puppeteer = require('puppeteer');

const baseUrl = 'https://layer-nextjs-7ebgbt508-cinemamachinaae-1026s-projects.vercel.app';
const routes = [
  '/',
  '/bridal-makeup-dubai',
  '/bridal-makeup-kerala',
  '/online-makeup-consultation',
  '/portfolio',
  '/contact'
];

async function check() {
  const browser = await puppeteer.launch({ headless: 'new' });
  const results = [];

  for (const route of routes) {
    const page = await browser.newPage();
    const url = `${baseUrl}${route}`;
    console.log(`Checking ${url}...`);
    
    const pageResult = { route, imagesStatus: 'OK', waLinks: 0, missingImages: [] };
    
    page.on('response', response => {
      if (response.request().resourceType() === 'image') {
        if (response.status() >= 400) {
          pageResult.missingImages.push(response.url());
          pageResult.imagesStatus = 'FAIL';
        }
      }
    });

    try {
      await page.goto(url, { waitUntil: 'networkidle0' });
      
      // Scroll down to trigger lazy loading
      await page.evaluate(() => {
        return new Promise((resolve) => {
          let totalHeight = 0;
          const distance = 100;
          const timer = setInterval(() => {
            const scrollHeight = document.body.scrollHeight;
            window.scrollBy(0, distance);
            totalHeight += distance;
            if(totalHeight >= scrollHeight - window.innerHeight){
              clearInterval(timer);
              resolve();
            }
          }, 50);
        });
      });

      // Check WhatsApp links
      const waLinks = await page.$$eval('a[href*="wa.me"]', links => links.length);
      pageResult.waLinks = waLinks;
      
      // Check logo
      const hasLogo = await page.$$eval('img[alt*="LayeR"]', imgs => imgs.length > 0);
      pageResult.hasLogo = hasLogo;
      
    } catch (e) {
      console.error(`Error on ${route}:`, e);
      pageResult.imagesStatus = 'ERROR';
    }
    
    results.push(pageResult);
    await page.close();
  }

  await browser.close();
  console.log(JSON.stringify(results, null, 2));
}

check().catch(console.error);
