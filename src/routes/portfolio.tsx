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

export const Route = createFileRoute("/portfolio")({
  head: () => ({
    meta: [
      { title: "Portfolio & Case Studies — VRK Solutions" },
      { name: "description", content: "Explore websites, apps, SaaS platforms, ERP systems and marketing campaigns delivered by VRK Solutions for clients across industries." },
      { property: "og:title", content: "Portfolio & Case Studies — VRK Solutions" },
      { property: "og:description", content: "Selected work from VRK Solutions across web, mobile, SaaS, ERP and digital marketing." },
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
      <PageHero label="Our Work" title="Our Work" subtitle="A showcase of projects we have delivered for our clients." />
      <section className="py-24 bg-[var(--background)]">
        <div className="container-x">
          <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
            {FILTERS.map((f) => (
              <button
                key={f}
                onClick={() => setActive(f)}
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
                <div className="group relative rounded-xl overflow-hidden border border-[var(--border)] bg-[var(--card)] shadow-sm hover:shadow-xl transition-all">
                  <div className="aspect-[4/3] overflow-hidden">
                    <img src={p.image} alt={p.title} width={1200} height={900} loading="lazy" className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500" />
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
                      View Project <ArrowRight className="h-4 w-4" />
                    </span>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <CtaBanner />
    </>
  );
}
