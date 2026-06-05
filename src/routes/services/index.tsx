import { createFileRoute, Link } from "@tanstack/react-router";
import { Monitor, Smartphone, Cloud, LayoutGrid, Search, TrendingUp, ArrowRight } from "lucide-react";
import { CtaBanner, PageHero } from "@/components/Shared";
import { Reveal } from "@/components/Reveal";

const SITE_URL = "https://vrksolutions.in";
const SOCIAL_IMAGE = "https://storage.googleapis.com/gpt-engineer-file-uploads/rpw64hzS86YOqhLImiiBLrQmDGQ2/social-images/social-1780643522435-1000075709.webp";

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
    { "@type": "ListItem", position: 2, name: "Services", item: `${SITE_URL}/services/` },
  ],
};

const servicesListSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "VRK Solutions Digital Services",
  description: "Complete range of IT and digital services offered by VRK Solutions in Kakinada, Andhra Pradesh, India.",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Website Development", url: `${SITE_URL}/services/website-development` },
    { "@type": "ListItem", position: 2, name: "App Development", url: `${SITE_URL}/services/app-development` },
    { "@type": "ListItem", position: 3, name: "SaaS Applications", url: `${SITE_URL}/services/saas-applications` },
    { "@type": "ListItem", position: 4, name: "ERP Systems", url: `${SITE_URL}/services/erp-systems` },
    { "@type": "ListItem", position: 5, name: "SEO Services", url: `${SITE_URL}/services/seo` },
    { "@type": "ListItem", position: 6, name: "Digital Marketing", url: `${SITE_URL}/services/digital-marketing` },
  ],
};

export const Route = createFileRoute("/services/")({
  head: () => ({
    meta: [
      { title: "Our Services — Website, App, SaaS, ERP, SEO & Digital Marketing | VRK Solutions" },
      { name: "description", content: "Explore VRK Solutions' complete range of digital services: custom website development, mobile app development, SaaS platforms, ERP systems, SEO optimization and digital marketing for businesses across India." },
      { name: "keywords", content: "IT services India, website development, app development, SaaS development, ERP systems, SEO services, digital marketing, VRK Solutions services" },
      { name: "robots", content: "index, follow" },
      { property: "og:title", content: "Our Services — VRK Solutions | Website, App, SaaS, ERP, SEO & Marketing" },
      { property: "og:description", content: "End-to-end digital services from VRK Solutions: websites, apps, SaaS, ERP, SEO, and digital marketing. Tailored solutions for businesses across India." },
      { property: "og:url", content: `${SITE_URL}/services/` },
      { property: "og:image", content: SOCIAL_IMAGE },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "en_IN" },
      { name: "twitter:title", content: "Services — Website, App, SaaS, ERP, SEO & Marketing | VRK Solutions" },
      { name: "twitter:description", content: "Complete digital services for Indian businesses. Custom websites, apps, SaaS, ERP, SEO & marketing from VRK Solutions." },
      { name: "twitter:image", content: SOCIAL_IMAGE },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/services/` }],
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(breadcrumbSchema) },
      { type: "application/ld+json", children: JSON.stringify(servicesListSchema) },
    ],
  }),
  component: ServicesIndex,
});

const SERVICES = [
  { icon: Monitor, name: "Website Development", tagline: "Build Your Digital Presence", desc: "Custom responsive websites built with modern technologies, designed to convert visitors into loyal clients and grow your brand.", to: "/services/website-development" },
  { icon: Smartphone, name: "App Development", tagline: "Apps That Drive Engagement", desc: "Native and cross-platform mobile applications for iOS and Android engineered for performance and beautiful user experiences.", to: "/services/app-development" },
  { icon: Cloud, name: "SaaS Applications", tagline: "Software as a Scalable Solution", desc: "Custom cloud-based SaaS platforms built for scalability, security, and seamless multi-tenant user access.", to: "/services/saas-applications" },
  { icon: LayoutGrid, name: "ERP Systems", tagline: "Streamline Your Operations", desc: "Integrated ERP systems that unify finance, HR, inventory, and sales — giving you real-time control across the business.", to: "/services/erp-systems" },
  { icon: Search, name: "SEO", tagline: "Rank Higher. Grow Faster.", desc: "Data-driven SEO strategies that improve your rankings, drive qualified organic traffic, and deliver measurable ROI.", to: "/services/seo" },
  { icon: TrendingUp, name: "Digital Marketing", tagline: "Digital Growth, Guaranteed Results", desc: "Full-spectrum digital marketing: social media, paid ads, content, email, and analytics — all engineered for growth.", to: "/services/digital-marketing" },
];

function ServicesIndex() {
  return (
    <>
      <PageHero
        label="What We Do"
        title="Our Services"
        subtitle="End-to-end digital services designed to help your business launch, scale, and lead in your category."
      />
      <section className="py-24 bg-[var(--background)]" aria-label="All Services">
        <div className="container-x">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {SERVICES.map((s, i) => (
              <Reveal key={s.name} delay={i * 80}>
                <Link to={s.to} aria-label={`Learn more about ${s.name}`} className="group block h-full p-8 rounded-xl bg-[var(--card)] border border-[var(--border)] shadow-sm hover:shadow-xl hover:-translate-y-1 hover:border-[var(--brand-accent)] transition-all">
                  <div className="flex items-start gap-5">
                    <div className="inline-flex items-center justify-center h-14 w-14 rounded-xl bg-[var(--brand-blue)] text-white" aria-hidden="true">
                      <s.icon className="h-7 w-7" />
                    </div>
                    <div>
                      <h2 className="font-display font-bold text-2xl text-[var(--brand-text)]">{s.name}</h2>
                      <p className="mt-1 italic font-semibold text-[var(--brand-blue)]">{s.tagline}</p>
                      <p className="mt-3 text-[var(--brand-muted)] leading-relaxed">{s.desc}</p>
                      <span className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-[var(--brand-accent)] group-hover:text-[var(--brand-accent)]">
                        Learn More <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                      </span>
                    </div>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <CtaBanner />
    </>
  );
}
