import { createFileRoute } from "@tanstack/react-router";
import { LayoutGrid, Database, Users, BarChart2, ShoppingCart, Shield } from "lucide-react";
import { ServicePage } from "@/components/ServicePage";

const SITE_URL = "https://vrksolutions.in";
const SOCIAL_IMAGE = "https://storage.googleapis.com/gpt-engineer-file-uploads/rpw64hzS86YOqhLImiiBLrQmDGQ2/social-images/social-1780643522435-1000075709.webp";

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
    { "@type": "ListItem", position: 2, name: "Services", item: `${SITE_URL}/services/` },
    { "@type": "ListItem", position: 3, name: "ERP Systems", item: `${SITE_URL}/services/erp-systems` },
  ],
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "ERP System Development",
  serviceType: "Enterprise Resource Planning",
  provider: { "@type": "Organization", name: "VRK Solutions", url: SITE_URL },
  url: `${SITE_URL}/services/erp-systems`,
  description: "Custom ERP system development for businesses in Andhra Pradesh and across India. Integrated solutions for finance, HR, inventory, sales and operations.",
  areaServed: { "@type": "Country", name: "India" },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is an ERP system and why do businesses need it?",
      acceptedAnswer: { "@type": "Answer", text: "ERP (Enterprise Resource Planning) is integrated software that manages core business processes — finance, HR, inventory, sales, procurement, and operations — in a single unified system. It eliminates data silos, reduces manual work, and gives real-time visibility across your business." },
    },
    {
      "@type": "Question",
      name: "Do you build custom ERP systems or implement existing ones?",
      acceptedAnswer: { "@type": "Answer", text: "VRK Solutions specialises in building fully custom ERP systems tailored to your unique business workflows. We also help implement and customise popular ERP platforms based on your needs and budget." },
    },
    {
      "@type": "Question",
      name: "How much does a custom ERP system cost in India?",
      acceptedAnswer: { "@type": "Answer", text: "Custom ERP development costs in India range from ₹2 lakh for simple modules to ₹20 lakh+ for full enterprise systems. The cost depends on the number of modules, users, integrations, and complexity." },
    },
  ],
};

export const Route = createFileRoute("/services/erp-systems")({
  head: () => ({
    meta: [
      { title: "ERP System Development — Custom Enterprise Software | VRK Solutions India" },
      { name: "description", content: "VRK Solutions develops custom ERP systems for businesses in Andhra Pradesh and across India. Integrated modules for finance, HR, inventory, sales and operations. Streamline your business with a tailored ERP solution." },
      { name: "keywords", content: "ERP development India, custom ERP system, ERP software Andhra Pradesh, enterprise resource planning India, ERP development Kakinada, inventory management system, business automation India" },
      { name: "robots", content: "index, follow" },
      { property: "og:title", content: "ERP System Development — Custom Enterprise Software | VRK Solutions" },
      { property: "og:description", content: "Custom ERP systems for Indian businesses. Finance, HR, inventory, sales — all unified. Expert ERP development by VRK Solutions." },
      { property: "og:url", content: `${SITE_URL}/services/erp-systems` },
      { property: "og:image", content: SOCIAL_IMAGE },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "en_IN" },
      { name: "twitter:title", content: "ERP System Development — VRK Solutions India" },
      { name: "twitter:description", content: "Custom ERP systems for Indian businesses. Unify finance, HR, inventory & sales. Get a free quote from VRK Solutions." },
      { name: "twitter:image", content: SOCIAL_IMAGE },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/services/erp-systems` }],
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(breadcrumbSchema) },
      { type: "application/ld+json", children: JSON.stringify(serviceSchema) },
      { type: "application/ld+json", children: JSON.stringify(faqSchema) },
    ],
  }),
  component: () => (
    <ServicePage
      category="ERP Systems"
      title="Streamline Operations With a Powerful ERP System"
      subtitle="Our custom ERP systems unify your business processes — from finance and HR to inventory and sales — giving you real-time control and actionable insights."
      features={[
        { icon: LayoutGrid, title: "Modular Architecture", description: "Pick the modules you need: finance, HR, inventory, procurement, and more." },
        { icon: Database, title: "Centralised Data Management", description: "Single source of truth for all your business data across departments." },
        { icon: Users, title: "HR & Payroll Management", description: "Employee management, attendance tracking, and automated payroll processing." },
        { icon: BarChart2, title: "Real-Time Reporting", description: "Live dashboards and reports for informed, data-driven decisions." },
        { icon: ShoppingCart, title: "Inventory & Supply Chain", description: "Real-time stock tracking, purchase orders, and supplier management." },
        { icon: Shield, title: "Access Control & Security", description: "Role-based permissions ensuring data security across all departments." },
      ]}
    />
  ),
});
