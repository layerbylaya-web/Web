import { brand, siteUrl } from '@/lib/site';

export default function JsonLd({ pageSchema }: { pageSchema?: object | object[] }) {
  const baseSchema = [
    {
      "@type": "Organization",
      "@id": `${siteUrl}/#organization`,
      "name": "LayeR by Laya",
      "alternateName": "LayeR",
      "url": siteUrl,
      "logo": `${siteUrl}/assets/brand/layer-logo.png`,
      "image": `${siteUrl}/assets/images/generated/home/home-hero-luxury-01.webp`,
      "description": "Premium makeup artist and hair stylist serving Dubai, the UAE, and Kerala, India. Luxury bridal makeup, party glam, fashion and editorial styling, commercial productions, and one-to-one online makeup consultations worldwide.",
      "telephone": brand.phone,
      "email": brand.email,
      "founder": {
        "@type": "Person",
        "name": "Laya",
        "jobTitle": "Makeup Artist & Hair Stylist",
        "worksFor": { "@id": `${siteUrl}/#organization` }
      },
      "sameAs": [brand.instagram],
      "contactPoint": {
        "@type": "ContactPoint",
        "contactType": "Bookings",
        "telephone": brand.phone,
        "email": brand.email
      },
      "areaServed": [
        { "@type": "City", "name": "Dubai", "containedInPlace": { "@type": "Country", "name": "United Arab Emirates" } },
        { "@type": "State", "name": "Kerala", "containedInPlace": { "@type": "Country", "name": "India" } },
        { "@type": "Place", "name": "Worldwide (online consultations)" }
      ],
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Makeup & Hair Styling Services",
        "itemListElement": [
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Bridal Makeup & Hair — Dubai / UAE", "url": `${siteUrl}/bridal-makeup-dubai` } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Bridal Makeup & Hair — Kerala", "url": `${siteUrl}/bridal-makeup-kerala` } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Party Makeup & Hair Styling", "url": `${siteUrl}/party-makeup-and-hair` } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Fashion & Editorial Makeup", "url": `${siteUrl}/fashion-editorial-makeup` } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Commercial & Production Makeup", "url": `${siteUrl}/commercial-makeup-artist-dubai` } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Online Makeup Consultation (Worldwide)", "url": `${siteUrl}/online-makeup-consultation` } }
        ]
      }
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      "url": siteUrl,
      "name": "LayeR by Laya",
      "publisher": { "@id": `${siteUrl}/#organization` }
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
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, '\\u003c') }}
    />
  );
}
