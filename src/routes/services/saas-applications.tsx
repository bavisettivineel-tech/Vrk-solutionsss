import { createFileRoute } from "@tanstack/react-router";
import { Cloud, Users, Lock, BarChart2, RefreshCw, Settings } from "lucide-react";
import { ServicePage } from "@/components/ServicePage";

const SITE_URL = "https://vrksolutions.in";
const SOCIAL_IMAGE = "https://storage.googleapis.com/gpt-engineer-file-uploads/rpw64hzS86YOqhLImiiBLrQmDGQ2/social-images/social-1780643522435-1000075709.webp";

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
    { "@type": "ListItem", position: 2, name: "Services", item: `${SITE_URL}/services/` },
    { "@type": "ListItem", position: 3, name: "SaaS Applications", item: `${SITE_URL}/services/saas-applications` },
  ],
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "SaaS Application Development",
  serviceType: "Cloud Software Development",
  provider: { "@type": "Organization", name: "VRK Solutions", url: SITE_URL },
  url: `${SITE_URL}/services/saas-applications`,
  description: "Custom cloud-based SaaS platforms built for scalability, multi-tenancy, and seamless user access. Expert SaaS development for Indian businesses.",
  areaServed: { "@type": "Country", name: "India" },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is SaaS application development?",
      acceptedAnswer: { "@type": "Answer", text: "SaaS (Software as a Service) application development involves building cloud-hosted software that users access via subscription through a web browser. VRK Solutions builds custom SaaS platforms with multi-tenant architecture, secure authentication, billing integration, and scalable infrastructure." },
    },
    {
      "@type": "Question",
      name: "How long does it take to build a SaaS platform?",
      acceptedAnswer: { "@type": "Answer", text: "An MVP SaaS platform typically takes 3–6 months. Full-featured enterprise SaaS applications can take 6–12 months. We follow agile development to deliver usable versions quickly." },
    },
    {
      "@type": "Question",
      name: "Can you build a multi-tenant SaaS application?",
      acceptedAnswer: { "@type": "Answer", text: "Yes, VRK Solutions specialises in multi-tenant SaaS architecture where multiple clients share the same infrastructure while keeping their data completely isolated and secure." },
    },
  ],
};

export const Route = createFileRoute("/services/saas-applications")({
  head: () => ({
    meta: [
      { title: "SaaS Application Development — Custom Cloud Software | VRK Solutions India" },
      { name: "description", content: "VRK Solutions builds custom SaaS platforms with multi-tenant architecture, subscription billing, and enterprise-grade security. Expert cloud software development for businesses across India." },
      { name: "keywords", content: "SaaS development India, SaaS application development, cloud software India, multi-tenant SaaS, SaaS startup India, custom SaaS platform, software as a service development Andhra Pradesh" },
      { name: "robots", content: "index, follow" },
      { property: "og:title", content: "SaaS Application Development — Custom Cloud Software | VRK Solutions" },
      { property: "og:description", content: "Custom SaaS platforms with scalability, security and multi-tenancy. VRK Solutions builds enterprise-grade cloud software for Indian businesses." },
      { property: "og:url", content: `${SITE_URL}/services/saas-applications` },
      { property: "og:image", content: SOCIAL_IMAGE },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "en_IN" },
      { name: "twitter:title", content: "SaaS Application Development — VRK Solutions India" },
      { name: "twitter:description", content: "Custom cloud SaaS platforms for Indian businesses. Multi-tenant, scalable, secure. Get a quote from VRK Solutions." },
      { name: "twitter:image", content: SOCIAL_IMAGE },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/services/saas-applications` }],
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(breadcrumbSchema) },
      { type: "application/ld+json", children: JSON.stringify(serviceSchema) },
      { type: "application/ld+json", children: JSON.stringify(faqSchema) },
    ],
  }),
  component: () => (
    <ServicePage
      category="SaaS Applications"
      title="Build Scalable SaaS Software That Grows With You"
      subtitle="We design and develop custom cloud-based SaaS platforms — built for scalability, security, and seamless multi-tenant user access."
      features={[
        { icon: Cloud, title: "Multi-Tenant Architecture", description: "Serve thousands of clients from a single scalable infrastructure." },
        { icon: Users, title: "User Management & Roles", description: "Advanced authentication, role-based permissions and team management." },
        { icon: Lock, title: "Enterprise Security", description: "End-to-end encryption, compliance-ready architecture, and data isolation." },
        { icon: BarChart2, title: "Analytics Dashboard", description: "Built-in analytics to give your customers real-time business insights." },
        { icon: RefreshCw, title: "Subscription & Billing", description: "Integrated payment gateways, subscription tiers, and automated invoicing." },
        { icon: Settings, title: "API Integrations", description: "Seamless third-party API integrations to extend platform capabilities." },
      ]}
    />
  ),
});
