const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');

const routes = [
  '/',
  '/services',
  '/bridal-makeup-dubai',
  '/bridal-makeup-kerala',
  '/party-makeup-and-hair',
  '/fashion-editorial-makeup',
  '/commercial-makeup-artist-dubai',
  '/online-makeup-consultation',
  '/daily-makeup-consultation',
  '/personal-makeup-kit-audit',
  '/learn-your-own-makeup-online',
  '/portfolio',
  '/about-laya',
  '/contact',
  '/faq',
  '/blog'
];

const outDir = path.join(__dirname, 'qa-screenshots');

if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

async function capture() {
  const browser = await puppeteer.launch({ headless: 'new' });
  
  for (const route of routes) {
    const page = await browser.newPage();
    const url = `http://localhost:3000${route}`;
    console.log(`Capturing ${url}...`);

    try {
      // Desktop
      await page.setViewport({ width: 1440, height: 900 });
      await page.goto(url, { waitUntil: 'networkidle2' });
      const safeRoute = route === '/' ? 'home' : route.replace(/\//g, '');
      await page.screenshot({ path: path.join(outDir, `${safeRoute}-desktop.png`), fullPage: true });

      // Mobile
      await page.setViewport({ width: 390, height: 844, isMobile: true, hasTouch: true });
      // Give it a moment to reflow for mobile
      await new Promise(resolve => setTimeout(resolve, 500));
      await page.screenshot({ path: path.join(outDir, `${safeRoute}-mobile.png`), fullPage: true });
    } catch (e) {
      console.error(`Failed to capture ${url}`, e);
    }
    
    await page.close();
  }

  await browser.close();
}

capture().catch(console.error);
