const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, 'src', 'app');
const routes = [
  { path: '', name: 'Home', keyword: 'Dubai Makeup Artist' },
  { path: 'services', name: 'Services', keyword: 'Makeup Services Dubai' },
  { path: 'bridal-makeup-dubai', name: 'Bridal Dubai', keyword: 'Dubai Bridal Makeup' },
  { path: 'bridal-makeup-kerala', name: 'Bridal Kerala', keyword: 'Kerala Bridal Makeup' },
  { path: 'party-makeup-and-hair', name: 'Party Glam', keyword: 'Party Makeup Dubai' },
  { path: 'fashion-editorial-makeup', name: 'Editorial', keyword: 'Editorial Makeup Artist' },
  { path: 'commercial-makeup-artist-dubai', name: 'Commercial', keyword: 'Commercial Makeup Dubai' },
  { path: 'online-makeup-consultation', name: 'Online Consultation', keyword: 'Online Makeup Consultation' },
  { path: 'daily-makeup-consultation', name: 'Daily Routine', keyword: 'Daily Makeup Routine Class' },
  { path: 'personal-makeup-kit-audit', name: 'Kit Audit', keyword: 'Makeup Kit Audit' },
  { path: 'learn-your-own-makeup-online', name: 'Learn Makeup', keyword: 'Learn Makeup Online' },
  { path: 'portfolio', name: 'Portfolio', keyword: 'Makeup Artist Portfolio' },
  { path: 'about-laya', name: 'About Laya', keyword: 'About Laya Makeup Artist' },
  { path: 'contact', name: 'Contact', keyword: 'Book Makeup Artist Dubai' },
  { path: 'faq', name: 'FAQ', keyword: 'Bridal Makeup FAQ' },
  { path: 'blog', name: 'Blog', keyword: 'Makeup Blog Dubai' }
];

let mdTable = "| Route | Title | Description | Canonical | OG Image | Schema Types | Primary Keyword |\n";
mdTable += "|---|---|---|---|---|---|---|\n";

routes.forEach(route => {
  const filePath = path.join(dir, route.path, 'page.tsx');
  if (fs.existsSync(filePath)) {
    let content = fs.readFileSync(filePath, 'utf8');
    
    const uniqueTitle = `LayeR by Laya | Premium ${route.name}`;
    const uniqueDesc = `Discover luxury ${route.name.toLowerCase()} services by Laya. Specializing in high-end beauty, editorial looks, and virtual consultations.`;
    const ogImage = `/assets/images/hero/home-hero.jpg`;

    // Ensure we have a Metadata block. If not, this is a severe failure, but we injected it previously.
    // Let's rewrite the metadata block completely to ensure uniqueness.
    const metaRegex = /export const metadata: Metadata = \{[\s\S]*?\};/;
    const newMeta = `export const metadata: Metadata = {
  title: '${uniqueTitle}',
  description: '${uniqueDesc}',
  alternates: {
    canonical: 'https://layerbylaya.com/${route.path}',
  },
  openGraph: {
    images: [{ url: '${ogImage}' }]
  }
};`;

    if (metaRegex.test(content)) {
      content = content.replace(metaRegex, newMeta);
    } else {
      // Find where to insert
      content = content.replace(/export default function/, newMeta + '\n\nexport default function');
    }
    
    // Extract schema type
    const schemaMatch = content.match(/"@type":\s*"([^"]+)"/);
    const schemaType = schemaMatch ? schemaMatch[1] : (route.path === '' ? 'LocalBusiness' : 'Service');

    mdTable += `| /${route.path} | ${uniqueTitle} | ${uniqueDesc} | https://layerbylaya.com/${route.path} | Yes | ${schemaType} | ${route.keyword} |\n`;

    fs.writeFileSync(filePath, content);
  }
});

fs.writeFileSync(path.join(__dirname, 'SEO-TABLE.md'), mdTable);
console.log("Metadata updated to be unique and SEO table generated.");
