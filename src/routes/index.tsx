import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Monitor, Smartphone, Cloud, LayoutGrid, Search, TrendingUp,
  Heart, Clock, Zap, MessageSquare, CheckCircle, Headphones,
  ArrowRight, Quote,
} from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { CtaBanner, SectionLabel, StatsBand } from "@/components/Shared";

const SITE_URL = "https://vrksolutions.in";
const SOCIAL_IMAGE =
  "https://storage.googleapis.com/gpt-engineer-file-uploads/rpw64hzS86YOqhLImiiBLrQmDGQ2/social-images/social-1780643522435-1000075709.webp";

const homeFaqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What services does VRK Solutions offer?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "VRK Solutions offers website development, mobile app development, SaaS application development, ERP system implementation, SEO services, and digital marketing solutions for businesses across India.",
      },
    },
    {
      "@type": "Question",
      name: "Where is VRK Solutions located?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "VRK Solutions is based in Kakinada, Andhra Pradesh, India. We serve clients across India and provide remote services nationwide.",
      },
    },
    {
      "@type": "Question",
      name: "How much does website development cost at VRK Solutions?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Website development costs vary based on project scope. We offer packages starting from below ₹10,000 for simple websites to custom enterprise solutions above ₹5 lakh. Contact us for a free quote tailored to your requirements.",
      },
    },
    {
      "@type": "Question",
      name: "How long does it take to develop a website?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A typical business website takes 2–4 weeks. E-commerce stores and custom web applications may take 4–12 weeks depending on complexity. We always provide a clear timeline before starting.",
      },
    },
    {
      "@type": "Question",
      name: "Does VRK Solutions provide SEO services?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, VRK Solutions offers comprehensive SEO services including technical SEO audits, on-page optimization, off-page link building, local SEO, content strategy, and monthly performance reporting.",
      },
    },
    {
      "@type": "Question",
      name: "Can VRK Solutions build mobile apps for both Android and iOS?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, we build both native and cross-platform mobile applications for Android and iOS. We use modern frameworks to ensure high performance and a great user experience on all devices.",
      },
    },
  ],
};

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title:
          "VRK Solutions — Website Development, App, SEO & Digital Marketing | Kakinada, India",
      },
      {
        name: "description",
        content:
          "VRK Solutions is a top-rated IT company in Kakinada, Andhra Pradesh. We build websites, mobile apps, SaaS platforms, ERP systems and deliver SEO & digital marketing services across India. Get a free quote today.",
      },
      {
        name: "keywords",
        content:
          "website development company India, app development Kakinada, SEO services Andhra Pradesh, digital marketing India, ERP systems, SaaS development, VRK Solutions, IT company Kakinada",
      },
      { name: "robots", content: "index, follow" },
      { rel: "canonical", href: SITE_URL },
      // Open Graph
      {
        property: "og:title",
        content: "VRK Solutions — Website Development, App & Digital Marketing | India",
      },
      {
        property: "og:description",
        content:
          "Top-rated IT company in Kakinada, AP. We deliver websites, apps, SaaS, ERP, SEO & digital marketing. Trusted by businesses across India.",
      },
      { property: "og:url", content: SITE_URL },
      { property: "og:image", content: SOCIAL_IMAGE },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "en_IN" },
      // Twitter
      {
        name: "twitter:title",
        content: "VRK Solutions — Website Development, App & Digital Marketing",
      },
      {
        name: "twitter:description",
        content:
          "Top IT company in Kakinada. Websites, apps, SaaS, ERP, SEO & digital marketing for Indian businesses.",
      },
      { name: "twitter:image", content: SOCIAL_IMAGE },
    ],
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(homeFaqSchema) },
    ],
  }),
  component: HomePage,
});

const SERVICES = [
  { icon: Monitor, name: "Website Development", tagline: "Build Your Digital Presence", desc: "Custom responsive websites built with modern technologies for businesses of all sizes.", to: "/services/website-development" },
  { icon: Smartphone, name: "App Development", tagline: "Apps That Drive Engagement", desc: "Native and cross-platform mobile applications designed for performance and user experience.", to: "/services/app-development" },
  { icon: Cloud, name: "SaaS Applications", tagline: "Software as a Scalable Solution", desc: "Custom cloud-based SaaS platforms built for scalability, security, and seamless user access.", to: "/services/saas-applications" },
  { icon: LayoutGrid, name: "ERP Systems", tagline: "Streamline Your Operations", desc: "Integrated ERP systems that unify your business processes and improve operational efficiency.", to: "/services/erp-systems" },
  { icon: Search, name: "SEO", tagline: "Rank Higher. Grow Faster.", desc: "Data-driven SEO strategies that improve your search rankings and bring qualified organic traffic.", to: "/services/seo" },
  { icon: TrendingUp, name: "Digital Marketing", tagline: "Digital Growth, Guaranteed Results", desc: "Complete digital marketing solutions including social media, paid ads, content strategy, and more.", to: "/services/digital-marketing" },
] as const;

const REASONS = [
  { icon: Heart, title: "Client First Approach", desc: "Every solution we build starts with understanding your goals and your customers." },
  { icon: Clock, title: "On Time Delivery", desc: "We respect deadlines. Projects are planned, tracked, and delivered within agreed timelines." },
  { icon: Zap, title: "Cutting Edge Technology", desc: "We use modern frameworks and tools to ensure your product is built for today and tomorrow." },
  { icon: MessageSquare, title: "Transparent Communication", desc: "Regular updates, clear timelines, and open communication throughout the project lifecycle." },
  { icon: CheckCircle, title: "End to End Solutions", desc: "From strategy to design to development to launch — we handle every stage under one roof." },
  { icon: Headphones, title: "Dedicated Support", desc: "Post-launch support and maintenance so your digital products always perform at their best." },
];

const TESTIMONIALS = [
  { quote: "VRK Solutions delivered our website ahead of schedule and the quality exceeded expectations. Their team is responsive and professional.", name: "Rahul Sharma", role: "Founder", company: "TechVista" },
  { quote: "Their ERP system streamlined our entire operation. We saved hours of manual work every single week. Highly recommended.", name: "Priya Reddy", role: "Operations Director", company: "Nexa Logistics" },
  { quote: "The SEO results spoke for themselves — our organic traffic doubled in three months. A trustworthy growth partner.", name: "Anil Kumar", role: "Marketing Head", company: "BrightWave" },
];

const CLIENTS = ["Client Co.", "Tech Brand", "StartupX", "Nova Labs", "Brightline", "Apex Group", "Northwind", "Helios", "Vertex IO", "Quanta"];

function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-screen flex items-center bg-[var(--brand-deep)] overflow-hidden pt-20">
        <div className="absolute inset-0 hero-grid-bg opacity-50" />
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--brand-deep)] via-[var(--brand-deep)] to-[var(--brand-blue)]" />
        <div className="container-x relative py-16 md:py-24 text-center">
          <Reveal>
            <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase bg-[var(--card)]/10 text-white border border-white/20">
              Trusted by businesses across India
            </span>
          </Reveal>
          <Reveal delay={120}>
            <h1 className="mt-6 font-display font-extrabold text-4xl md:text-6xl lg:text-7xl text-white leading-[1.05] max-w-5xl mx-auto">
              Transforming Ideas Into Digital Reality
            </h1>
          </Reveal>
          <Reveal delay={240}>
            <p className="mt-6 text-lg md:text-xl text-white/80 max-w-3xl mx-auto">
              VRK Solutions is your complete digital partner for Website Development, App Development, SaaS, ERP, SEO and Digital Marketing.
            </p>
          </Reveal>
          <Reveal delay={360}>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <Link to="/contact" className="px-6 py-3 rounded-md bg-[var(--brand-blue)] text-white font-semibold hover:bg-[var(--brand-accent)] transition-colors">
                Get a Free Quote
              </Link>
              <Link to="/contact" className="px-6 py-3 rounded-md border border-white/50 text-white font-semibold hover:bg-[var(--card)]/10 transition-colors">
                Consult Our Experts
              </Link>
              <Link to="/services" className="px-6 py-3 rounded-md text-white/90 hover:text-white font-semibold inline-flex items-center gap-1">
                Explore Services <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </Reveal>
          <Reveal delay={500}>
            <div className="mt-14 pt-10 border-t border-white/15 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              {[
                ["10+", "Projects Delivered"],
                ["8+", "Happy Clients"],
                ["6+", "Services Offered"],
                ["5+", "Team Members"],
              ].map(([n, l]) => (
                <div key={l} className="text-center">
                  <div className="font-display font-extrabold text-3xl md:text-4xl text-white">{n}</div>
                  <div className="mt-1 text-xs md:text-sm text-white/70 uppercase tracking-wider">{l}</div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Services */}
      <section className="py-24 bg-[var(--background)]">
        <div className="container-x">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <SectionLabel>Our Services</SectionLabel>
            <h2 className="mt-4 font-display font-extrabold text-3xl md:text-5xl text-[var(--brand-text)]">
              Everything Your Business Needs to Succeed
            </h2>
            <p className="mt-4 text-[var(--brand-muted)] text-lg">
              From cutting-edge technology to strategic marketing — we provide end-to-end digital solutions that fuel growth.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map((s, i) => (
              <Reveal key={s.name} delay={i * 80}>
                <div className="group relative h-full p-7 rounded-xl bg-[var(--card)] border border-[var(--border)] shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all overflow-hidden">
                  <span className="absolute top-0 inset-x-0 h-1 bg-[var(--brand-accent)] scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
                  <div className="inline-flex items-center justify-center h-12 w-12 rounded-lg bg-[var(--brand-blue)]/10 text-[var(--brand-accent)]">
                    <s.icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-5 font-display font-bold text-xl text-[var(--brand-text)]">{s.name}</h3>
                  <p className="mt-1 italic font-semibold text-sm text-[var(--brand-blue)]">{s.tagline}</p>
                  <p className="mt-3 text-sm leading-relaxed text-[var(--brand-muted)]">{s.desc}</p>
                  <Link to={s.to} className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-[var(--brand-accent)] hover:text-[var(--brand-accent)]">
                    Learn More <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose */}
      <section className="py-24 bg-[var(--brand-deep)]">
        <div className="container-x">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <SectionLabel>Why VRK Solutions</SectionLabel>
            <h2 className="mt-4 font-display font-extrabold text-3xl md:text-5xl text-white">
              Why Businesses Choose VRK Solutions
            </h2>
            <p className="mt-4 text-white/80 text-lg">
              We combine expertise, innovation, and a deep commitment to client success.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {REASONS.map((r, i) => (
              <Reveal key={r.title} delay={i * 80}>
                <div className="group h-full p-7 rounded-xl bg-[var(--card)]/5 border border-white/10 hover:bg-[var(--card)] hover:text-[var(--brand-text)] transition-colors">
                  <div className="inline-flex items-center justify-center h-12 w-12 rounded-lg bg-[var(--card)]/10 text-white group-hover:bg-[var(--brand-blue)]/10 group-hover:text-[var(--brand-accent)] transition-colors">
                    <r.icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-5 font-display font-bold text-xl text-white group-hover:text-[var(--brand-accent)]">{r.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/70 group-hover:text-[var(--brand-muted)]">{r.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <StatsBand />

      {/* Testimonials */}
      <section className="py-24 bg-[var(--brand-bg-alt)]">
        <div className="container-x">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <SectionLabel>Testimonials</SectionLabel>
            <h2 className="mt-4 font-display font-extrabold text-3xl md:text-5xl text-[var(--brand-text)]">
              What Our Clients Say
            </h2>
            <p className="mt-4 text-[var(--brand-muted)] text-lg">
              Real feedback from businesses we have helped grow.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TESTIMONIALS.map((t, i) => (
              <Reveal key={t.name} delay={i * 100}>
                <div className="h-full p-8 rounded-xl bg-[var(--card)] border border-[var(--border)] shadow-sm">
                  <Quote className="h-8 w-8 text-[var(--brand-accent)]" />
                  <p className="mt-4 text-[var(--brand-text)] leading-relaxed">"{t.quote}"</p>
                  <div className="mt-6 pt-4 border-t border-[var(--border)]">
                    <div className="font-display font-bold text-[var(--brand-accent)]">{t.name}</div>
                    <div className="text-sm text-[var(--brand-muted)]">{t.role}, {t.company}</div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Clients marquee */}
      <section className="py-16 bg-[var(--background)] border-y border-[var(--border)]">
        <h3 className="text-center font-display font-bold text-xl md:text-2xl text-[var(--brand-text)] mb-8">
          Trusted by Businesses Across India
        </h3>
        <div className="overflow-hidden">
          <div className="flex animate-marquee whitespace-nowrap gap-6 w-max">
            {[...CLIENTS, ...CLIENTS].map((c, i) => (
              <span key={i} className="px-8 py-4 rounded-lg bg-[var(--brand-bg-alt)] text-[var(--brand-muted)] font-display font-semibold text-lg">
                {c}
              </span>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
