export default function JsonLd({ pageSchema }: { pageSchema?: object | object[] }) {
  const baseSchema = [
    {
      "@type": "BeautySalon",
      "@id": "https://layerbylaya.com/#organization",
      "name": "LayeR by Laya",
      "url": "https://layerbylaya.com",
      "logo": "https://layerbylaya.com/assets/brand/layer-logo.png",
      "image": "https://layerbylaya.com/assets/images/enhanced/hero/home-hero.jpg",
      "description": "Premium makeup and hair styling services in Dubai and Kerala. Specializing in luxury bridal, editorial shoots, and online beauty consultations.",
      "telephone": "+971547467995",
      "founder": {
        "@type": "Person",
        "name": "Laya"
      },
      "sameAs": [
        "https://instagram.com/layerbylaya"
      ],
      "areaServed": [
        {
          "@type": "Place",
          "name": "Dubai, UAE"
        },
        {
          "@type": "Place",
          "name": "Kerala, India"
        }
      ]
    },
    {
      "@type": "WebSite",
      "@id": "https://layerbylaya.com/#website",
      "url": "https://layerbylaya.com",
      "name": "LayeR by Laya"
    }
  ];

  const schemas = pageSchema 
    ? [...baseSchema, ...(Array.isArray(pageSchema) ? pageSchema : [pageSchema])]
    : baseSchema;

  const schema = {
    "@context": "https://schema.org",
    "@graph": schemas
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
