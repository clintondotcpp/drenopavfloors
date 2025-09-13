const StructuredData = () => {
  const organizationData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Duruco Concept Limited",
    "alternateName": "Drenopav Floors",
    "url": "https://drenopavfloors.ng",
    "logo": {
      "@type": "ImageObject",
      "url": "https://drenopavfloors.pages.dev/lovable-uploads/d7b5a072-54be-437c-9284-4130d5f5218e.png"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+234-802-631-8818",
      "contactType": "customer service",
      "availableLanguage": "en"
    },
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "NG",
      "addressRegion": "Nigeria"
    },
    "sameAs": [
      "https://wa.me/2348026318818"
    ]
  };

  const serviceData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Drenopav Permeable Floor Installation",
    "description": "Premium resin-bound permeable floor surfaces for driveways, patios, and commercial spaces",
    "provider": {
      "@type": "Organization",
      "name": "Duruco Concept Limited"
    },
    "areaServed": {
      "@type": "Country",
      "name": "Nigeria"
    },
    "serviceType": "Flooring Installation",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Drenopav Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Residential Driveway Installation"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Commercial Flooring Solutions"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Patio and Walkway Installation"
          }
        }
      ]
    }
  };

  const websiteData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Drenopav Luxury Floors",
    "url": "https://drenopavfloors.ng",
    "description": "Premium permeable floor surfaces for sustainable and luxury landscaping",
    "publisher": {
      "@type": "Organization",
      "name": "Duruco Concept Limited"
    },
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": "https://drenopavfloors.pages.dev/blog?q={search_term_string}"
      },
      "query-input": "required name=search_term_string"
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteData) }}
      />
    </>
  );
};

export default StructuredData;
