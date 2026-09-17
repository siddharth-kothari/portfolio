import { projects } from "@/data/projects";
import { services } from "@/data/services";
import { getSiteUrl, site } from "@/data/site";

export function JsonLd() {
  const url = getSiteUrl();

  const graph = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        name: site.name,
        url,
        jobTitle: site.role,
        email: site.email,
        sameAs: [site.github, site.linkedin, site.instagram],
        knowsAbout: [
          "Laravel",
          "APIs",
          "Next.js",
          "Payments",
          "Booking websites",
        ],
      },
      {
        "@type": "ProfessionalService",
        name: site.name,
        url,
        description: site.description,
        areaServed: "Worldwide",
        email: site.email,
        offers: services.map((service) => ({
          "@type": "Offer",
          name: service.title,
          description: service.summary,
          url: `${url}/services/${service.slug}`,
        })),
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Selected work",
          itemListElement: projects.map((project, index) => ({
            "@type": "ListItem",
            position: index + 1,
            item: {
              "@type": "CreativeWork",
              name: project.title,
              url: `${url}/work/${project.slug}`,
              description: project.description,
            },
          })),
        },
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }}
    />
  );
}
