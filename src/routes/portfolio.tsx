import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { CtaBanner, PageHero } from "@/components/Shared";
import { Reveal } from "@/components/Reveal";
import ecommerceImg from "@/assets/proj-ecommerce.jpg";
import healthcareImg from "@/assets/proj-healthcare.jpg";
import inventoryImg from "@/assets/proj-inventory.jpg";
import hrSaasImg from "@/assets/proj-hr-saas.jpg";
import restaurantImg from "@/assets/proj-restaurant-seo.jpg";
import realestateImg from "@/assets/proj-realestate.jpg";
import logisticsImg from "@/assets/proj-logistics.jpg";
import schoolImg from "@/assets/proj-school.jpg";
import b2bSaasImg from "@/assets/proj-b2b-saas.jpg";

const SITE_URL = "https://vrksolutions.in";
const SOCIAL_IMAGE = "https://storage.googleapis.com/gpt-engineer-file-uploads/rpw64hzS86YOqhLImiiBLrQmDGQ2/social-images/social-1780643522435-1000075709.webp";

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
    { "@type": "ListItem", position: 2, name: "Portfolio", item: `${SITE_URL}/portfolio` },
  ],
};

const collectionSchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "VRK Solutions Portfolio — Web, App, SaaS & ERP Projects",
  description: "Explore VRK Solutions' portfolio of delivered projects: e-commerce websites, healthcare apps, ERP systems, SaaS platforms, and digital marketing campaigns across India.",
  url: `${SITE_URL}/portfolio`,
  publisher: { "@type": "Organization", name: "VRK Solutions", url: SITE_URL },
};

export const Route = createFileRoute("/portfolio")({
  head: () => ({
    meta: [
      { title: "Portfolio & Case Studies — Web, App, ERP & SaaS Projects | VRK Solutions India" },
      { name: "description", content: "Explore VRK Solutions' portfolio of successfully delivered projects: e-commerce websites, healthcare mobile apps, ERP systems, SaaS platforms, and digital marketing campaigns across India." },
      { name: "keywords", content: "VRK Solutions portfolio, web development projects India, app development case studies, ERP projects Andhra Pradesh, SaaS projects India, digital marketing portfolio, IT projects Kakinada" },
      { name: "robots", content: "index, follow" },
      { property: "og:title", content: "Portfolio & Case Studies — Web, App, ERP & SaaS | VRK Solutions India" },
      { property: "og:description", content: "See our work: e-commerce platforms, healthcare apps, ERP systems, SaaS dashboards and marketing campaigns delivered by VRK Solutions for clients across India." },
      { property: "og:url", content: `${SITE_URL}/portfolio` },
      { property: "og:image", content: SOCIAL_IMAGE },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "en_IN" },
      { name: "twitter:title", content: "Portfolio & Case Studies — VRK Solutions India" },
      { name: "twitter:description", content: "Our work: websites, apps, SaaS, ERP and digital marketing campaigns delivered across India." },
      { name: "twitter:image", content: SOCIAL_IMAGE },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/portfolio` }],
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(breadcrumbSchema) },
      { type: "application/ld+json", children: JSON.stringify(collectionSchema) },
    ],
  }),
  component: PortfolioPage,
});

const FILTERS = ["All", "Website Development", "App Development", "ERP", "SaaS", "Digital Marketing"] as const;

const PROJECTS = [
  { title: "E-Commerce Platform Redesign", category: "Website Development", desc: "Modern storefront with optimized checkout and CMS.", image: ecommerceImg },
  { title: "Healthcare Management App", category: "App Development", desc: "Patient records and appointment scheduling on mobile.", image: healthcareImg },
  { title: "Inventory ERP System", category: "ERP", desc: "Real-time stock and warehouse operations dashboard.", image: inventoryImg },
  { title: "HR SaaS Platform", category: "SaaS", desc: "Multi-tenant HRMS with payroll and attendance.", image: hrSaasImg },
  { title: "Local Restaurant SEO Campaign", category: "Digital Marketing", desc: "Local SEO that doubled organic reservations.", image: restaurantImg },
  { title: "Real Estate Website", category: "Website Development", desc: "Property listings with smart filters and lead capture.", image: realestateImg },
  { title: "Logistics Tracking App", category: "App Development", desc: "Live shipment tracking for fleet and customers.", image: logisticsImg },
  { title: "School ERP System", category: "ERP", desc: "Admissions, fees, attendance and academic reports.", image: schoolImg },
  { title: "B2B SaaS Dashboard", category: "SaaS", desc: "Analytics-rich dashboard for enterprise clients.", image: b2bSaasImg },
];

function PortfolioPage() {
  const [active, setActive] = useState<(typeof FILTERS)[number]>("All");
  const filtered = active === "All" ? PROJECTS : PROJECTS.filter((p) => p.category === active);
  return (
    <>
      <PageHero label="Our Work" title="Portfolio &amp; Case Studies" subtitle="A showcase of projects we have successfully delivered for our clients across India." />
      <section className="py-24 bg-[var(--background)]" aria-label="Project Portfolio">
        <div className="container-x">
          <div className="flex flex-wrap items-center justify-center gap-2 mb-12" role="group" aria-label="Filter projects by category">
            {FILTERS.map((f) => (
              <button
                key={f}
                onClick={() => setActive(f)}
                aria-pressed={active === f}
                aria-label={`Filter by ${f}`}
                className={`px-4 py-2 rounded-full text-sm font-semibold transition-colors ${
                  active === f
                    ? "bg-[var(--brand-blue)] text-white"
                    : "bg-[var(--brand-bg-alt)] text-[var(--brand-text)] hover:bg-[var(--brand-blue)]/10"
                }`}
              >
                {f}
              </button>
            ))}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((p, i) => (
              <Reveal key={p.title} delay={i * 60}>
                <article className="group relative rounded-xl overflow-hidden border border-[var(--border)] bg-[var(--card)] shadow-sm hover:shadow-xl transition-all">
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={p.image}
                      alt={`${p.title} — VRK Solutions project`}
                      width={1200}
                      height={900}
                      loading="lazy"
                      className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-semibold bg-[var(--card)]/90 text-[var(--brand-accent)]">
                    {p.category}
                  </div>
                  <div className="p-5">
                    <h3 className="font-display font-bold text-lg text-[var(--brand-text)]">{p.title}</h3>
                    <p className="mt-1 text-sm text-[var(--brand-muted)]">{p.desc}</p>
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center bg-[var(--brand-deep)]/80 opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md bg-[var(--brand-blue)] text-white font-semibold">
                      View Project <ArrowRight className="h-4 w-4" aria-hidden="true" />
                    </span>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <CtaBanner />
    </>
  );
}
