import { createFileRoute } from "@tanstack/react-router";
import { Target, Eye, Lightbulb, Heart, Star, Users } from "lucide-react";
import { CtaBanner, PageHero, SectionLabel, StatsBand } from "@/components/Shared";
import { Reveal } from "@/components/Reveal";

const SITE_URL = "https://vrksolutions.in";
const SOCIAL_IMAGE =
  "https://storage.googleapis.com/gpt-engineer-file-uploads/rpw64hzS86YOqhLImiiBLrQmDGQ2/social-images/social-1780643522435-1000075709.webp";

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
    { "@type": "ListItem", position: 2, name: "About", item: `${SITE_URL}/about` },
  ],
};

const aboutPageSchema = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  "@id": `${SITE_URL}/about#webpage`,
  url: `${SITE_URL}/about`,
  name: "About VRK Solutions — Digital Transformation Partner in Kakinada, India",
  description:
    "Learn about VRK Solutions, a digital solutions company founded in Kakinada, Andhra Pradesh. Our mission, vision, values and story of empowering businesses across India.",
  breadcrumb: { "@id": `${SITE_URL}/about#breadcrumb` },
  mainEntity: {
    "@type": "Organization",
    name: "VRK Solutions",
    foundingDate: "2025",
    foundingLocation: { "@type": "Place", name: "Kakinada, Andhra Pradesh, India" },
    description:
      "VRK Solutions was founded in 2025 with a vision to make premium digital solutions accessible to all businesses across India. We offer website development, app development, SaaS, ERP, SEO and digital marketing services.",
  },
};

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      {
        title:
          "About VRK Solutions — Digital Agency in Kakinada, Andhra Pradesh | IT Company India",
      },
      {
        name: "description",
        content:
          "VRK Solutions is a digital transformation company based in Kakinada, Andhra Pradesh. Founded in 2025, we empower businesses with world-class web development, app development, SaaS, ERP, SEO and digital marketing solutions across India.",
      },
      {
        name: "keywords",
        content:
          "VRK Solutions about, digital agency Kakinada, IT company Andhra Pradesh, web development company India, software company Kakinada, digital transformation India",
      },
      { name: "robots", content: "index, follow" },
      // Open Graph
      {
        property: "og:title",
        content: "About VRK Solutions — Digital Transformation Partner in Kakinada",
      },
      {
        property: "og:description",
        content:
          "Learn about VRK Solutions — founded in 2025 in Kakinada, AP. We deliver world-class web, app, SaaS, ERP, SEO and marketing services for Indian businesses.",
      },
      { property: "og:url", content: `${SITE_URL}/about` },
      { property: "og:image", content: SOCIAL_IMAGE },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "en_IN" },
      // Twitter
      {
        name: "twitter:title",
        content: "About VRK Solutions — Digital Agency Kakinada, India",
      },
      {
        name: "twitter:description",
        content:
          "Founded 2025 in Kakinada, AP. Website development, apps, SaaS, ERP, SEO & digital marketing across India.",
      },
      { name: "twitter:image", content: SOCIAL_IMAGE },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/about` }],
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(breadcrumbSchema) },
      { type: "application/ld+json", children: JSON.stringify(aboutPageSchema) },
    ],
  }),
  component: AboutPage,
});

const VALUES = [
  { icon: Lightbulb, title: "Innovation", desc: "Constantly pushing boundaries with cutting-edge technology and creative thinking." },
  { icon: Heart, title: "Client First", desc: "Every decision we make is driven by our commitment to client success and satisfaction." },
  { icon: Star, title: "Excellence", desc: "We do not settle for good enough. We deliver premium quality in everything we do." },
  { icon: Users, title: "Collaboration", desc: "We work as an extension of your team, fostering transparent and open partnerships." },
];

const TIMELINE = [
  { year: "2025", title: "VRK Solutions Founded", desc: "Launched with a vision to make premium digital solutions accessible to all businesses." },
  { year: "2025", title: "First Projects Delivered", desc: "Successfully completed our first wave of client projects across web development and digital marketing." },
  { year: "2026", title: "Service Expansion", desc: "Expanded our offerings to include SaaS development, ERP systems, and full-scale SEO services." },
  { year: "2026", title: "Growing Client Base", desc: "Building a strong portfolio of satisfied clients and long-term partnerships." },
  { year: "2027", title: "Future Vision", desc: "Targeting 100+ clients and becoming a recognized digital solutions brand across India." },
];

function AboutPage() {
  return (
    <>
      <PageHero
        label="About VRK Solutions"
        title="Your Digital Transformation Partner"
        subtitle="We started with a simple belief: every business deserves access to world-class technology and digital solutions. Today, we are building that future one project at a time."
      />

      {/* Mission & Vision */}
      <section className="py-24 bg-[var(--background)]" aria-label="Mission and Vision">
        <div className="container-x grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            { icon: Target, title: "Our Mission", desc: "To empower businesses of all sizes with innovative, reliable, and affordable digital solutions that drive measurable growth and operational excellence." },
            { icon: Eye, title: "Our Vision", desc: "To become the most trusted digital solutions partner in India, enabling transformation for businesses across every industry by 2028." },
          ].map((c, i) => (
            <Reveal key={c.title} delay={i * 120}>
              <div className="p-10 rounded-2xl bg-[var(--brand-bg-alt)] border border-[var(--border)] h-full">
                <div className="inline-flex items-center justify-center h-14 w-14 rounded-xl bg-[var(--brand-blue)] text-white" aria-hidden="true">
                  <c.icon className="h-7 w-7" />
                </div>
                <h2 className="mt-6 font-display font-extrabold text-2xl md:text-3xl text-[var(--brand-text)]">{c.title}</h2>
                <p className="mt-4 text-[var(--brand-muted)] leading-relaxed text-lg">{c.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 bg-[var(--brand-bg-alt)]" aria-label="Core Values">
        <div className="container-x">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <SectionLabel>Core Values</SectionLabel>
            <h2 className="mt-4 font-display font-extrabold text-3xl md:text-5xl text-[var(--brand-text)]">Our Core Values</h2>
            <p className="mt-4 text-[var(--brand-muted)] text-lg">
              The principles that guide everything we do at VRK Solutions.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {VALUES.map((v, i) => (
              <Reveal key={v.title} delay={i * 80}>
                <div className="p-7 rounded-xl bg-[var(--card)] border border-[var(--border)] h-full hover:shadow-lg transition-shadow">
                  <div className="inline-flex items-center justify-center h-12 w-12 rounded-lg bg-[var(--brand-blue)]/10 text-[var(--brand-accent)]" aria-hidden="true">
                    <v.icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-5 font-display font-bold text-xl text-[var(--brand-text)]">{v.title}</h3>
                  <p className="mt-2 text-sm text-[var(--brand-muted)] leading-relaxed">{v.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-24 bg-[var(--background)]" aria-label="Our Story">
        <div className="container-x grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <Reveal>
            <SectionLabel>Our Story</SectionLabel>
            <h2 className="mt-4 font-display font-extrabold text-3xl md:text-5xl text-[var(--brand-text)] leading-tight">
              Built on passion, purpose, and a promise.
            </h2>
            <p className="mt-6 text-[var(--brand-muted)] leading-relaxed text-lg">
              VRK Solutions was born from a passion for technology and a commitment to helping businesses succeed in the digital world. Founded by a team of experienced developers, designers and digital strategists, we set out to build a company that combines technical excellence with genuine client care.
            </p>
            <p className="mt-4 text-[var(--brand-muted)] leading-relaxed text-lg">
              In just a short time, we have already begun delivering impactful projects and building lasting client relationships. We are not just a service provider — we are your long-term digital growth partner.
            </p>
          </Reveal>
          <Reveal delay={150}>
            <div
              className="aspect-square w-full rounded-2xl bg-gradient-to-br from-[var(--brand-deep)] via-[var(--brand-blue)] to-[var(--brand-accent)] hero-grid-bg"
              role="img"
              aria-label="VRK Solutions team workspace illustration"
            />
          </Reveal>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 bg-[var(--brand-bg-alt)]" aria-label="Company Journey">
        <div className="container-x">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <SectionLabel>Our Journey</SectionLabel>
            <h2 className="mt-4 font-display font-extrabold text-3xl md:text-5xl text-[var(--brand-text)]">Our Journey</h2>
            <p className="mt-4 text-[var(--brand-muted)] text-lg">
              From a bold idea to a growing digital solutions company.
            </p>
          </div>
          <div className="relative max-w-3xl mx-auto">
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-[var(--border)]" aria-hidden="true" />
            {TIMELINE.map((m, i) => (
              <Reveal key={i} delay={i * 100}>
                <div className={`relative mb-10 md:flex md:items-center ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}>
                  <div className="md:w-1/2 md:px-8">
                    <div className="ml-12 md:ml-0 p-6 rounded-xl bg-[var(--card)] border border-[var(--border)] shadow-sm">
                      <span className="inline-block text-xs font-bold tracking-wider uppercase text-[var(--brand-accent)]">{m.year}</span>
                      <h3 className="mt-2 font-display font-bold text-xl text-[var(--brand-text)]">{m.title}</h3>
                      <p className="mt-2 text-sm text-[var(--brand-muted)] leading-relaxed">{m.desc}</p>
                    </div>
                  </div>
                  <span className="absolute left-4 md:left-1/2 top-6 -translate-x-1/2 h-4 w-4 rounded-full bg-[var(--brand-blue)] ring-4 ring-[var(--background)]" aria-hidden="true" />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <StatsBand />
      <CtaBanner />
    </>
  );
}
