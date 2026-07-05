const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, 'src', 'app');
const routes = [
  'services',
  'bridal-makeup-dubai',
  'bridal-makeup-kerala',
  'party-makeup-and-hair',
  'fashion-editorial-makeup',
  'commercial-makeup-artist-dubai',
  'online-makeup-consultation',
  'daily-makeup-consultation',
  'personal-makeup-kit-audit',
  'learn-your-own-makeup-online',
  'portfolio',
  'about-laya',
  'contact',
  'faq',
  'blog'
];

routes.forEach(route => {
  const filePath = path.join(dir, route, 'page.tsx');
  if (fs.existsSync(filePath)) {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Add JsonLd import if not present
    if (!content.includes('import JsonLd')) {
      content = content.replace(/(import .*;\n)+/, match => `${match}import JsonLd from '@/components/JsonLd';\n`);
    }

    // Add canonical URL to metadata
    if (content.includes('export const metadata: Metadata = {') && !content.includes('alternates: {')) {
      content = content.replace('export const metadata: Metadata = {', `export const metadata: Metadata = {
  alternates: { canonical: 'https://layerbylaya.com/${route}' },`);
    }
    
    // Add JsonLd component if not present
    if (!content.includes('<JsonLd')) {
      // Find the return statement
      const returnIndex = content.indexOf('return (');
      if (returnIndex !== -1) {
        let replacement = '';
        if (route === 'contact') {
          replacement = `return (
    <>
      <JsonLd pageSchema={{
        "@type": "ContactPage",
        "url": "https://layerbylaya.com/contact",
        "name": "Contact LayeR by Laya"
      }} />`;
        } else if (route === 'portfolio') {
          replacement = `return (
    <>
      <JsonLd pageSchema={{
        "@type": "ImageGallery",
        "url": "https://layerbylaya.com/portfolio",
        "name": "LayeR Portfolio"
      }} />`;
        } else if (route === 'faq') {
          replacement = `return (
    <>
      <JsonLd pageSchema={{
        "@type": "FAQPage",
        "mainEntity": []
      }} />`;
        } else {
          replacement = `return (
    <>
      <JsonLd pageSchema={{
        "@type": "Service",
        "url": "https://layerbylaya.com/${route}",
        "name": "LayeR Service: ${route.replace(/-/g, ' ')}"
      }} />`;
        }
        
        // If it starts with a div or section, wrap it in a fragment
        const nextChars = content.substring(returnIndex + 8, returnIndex + 50).trim();
        if (nextChars.startsWith('<div') || nextChars.startsWith('<section')) {
           content = content.replace(/return \(\s*([\s\S]+?)\s*\);/, (match, inner) => {
             return `${replacement}\n${inner}\n    </>\n  );`;
           });
        } else if (nextChars.startsWith('<>')) {
           content = content.replace('return (\n    <>', replacement);
        }
      }
    }
    fs.writeFileSync(filePath, content);
  }
});
console.log("Injected metadata and JsonLd into routes.");
