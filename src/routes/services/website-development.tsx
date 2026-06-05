import { createFileRoute } from "@tanstack/react-router";
import { Paintbrush, Monitor, ShoppingCart, FileText, Zap, Settings } from "lucide-react";
import { ServicePage } from "@/components/ServicePage";

const SITE_URL = "https://vrksolutions.in";
const SOCIAL_IMAGE = "https://storage.googleapis.com/gpt-engineer-file-uploads/rpw64hzS86YOqhLImiiBLrQmDGQ2/social-images/social-1780643522435-1000075709.webp";

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
    { "@type": "ListItem", position: 2, name: "Services", item: `${SITE_URL}/services/` },
    { "@type": "ListItem", position: 3, name: "Website Development", item: `${SITE_URL}/services/website-development` },
  ],
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Website Development",
  serviceType: "Web Development",
  provider: { "@type": "Organization", name: "VRK Solutions", url: SITE_URL },
  url: `${SITE_URL}/services/website-development`,
  description: "Custom, responsive website development with performance, SEO, and conversion built in. We build business websites, e-commerce stores, and enterprise web applications.",
  areaServed: { "@type": "Country", name: "India" },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Website Development Services",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Custom Website Design" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Responsive Web Development" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "E-Commerce Solutions" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "CMS Integration" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Performance Optimization" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Website Maintenance" } },
    ],
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How much does website development cost in India?",
      acceptedAnswer: { "@type": "Answer", text: "Website development costs in India range from ₹10,000 for simple landing pages to ₹5 lakh+ for complex e-commerce or enterprise websites. VRK Solutions offers competitive packages tailored to your budget and requirements." },
    },
    {
      "@type": "Question",
      name: "How long does it take to build a website?",
      acceptedAnswer: { "@type": "Answer", text: "A standard business website takes 2–4 weeks. E-commerce websites typically take 4–8 weeks. Custom web applications may take 8–16 weeks depending on complexity." },
    },
    {
      "@type": "Question",
      name: "Do you build mobile-friendly (responsive) websites?",
      acceptedAnswer: { "@type": "Answer", text: "Yes, all websites we build are fully responsive and optimized for mobile, tablet, and desktop devices. We follow a mobile-first design approach." },
    },
    {
      "@type": "Question",
      name: "Will my website be SEO-friendly?",
      acceptedAnswer: { "@type": "Answer", text: "Absolutely. Every website we develop includes on-page SEO foundations: proper meta tags, semantic HTML, fast loading speeds, Core Web Vitals optimization, and sitemap generation." },
    },
  ],
};

export const Route = createFileRoute("/services/website-development")({
  head: () => ({
    meta: [
      { title: "Website Development Services — Custom Websites for Businesses | VRK Solutions India" },
      { name: "description", content: "VRK Solutions offers professional website development services in India. Custom responsive websites, e-commerce stores, CMS integration and performance optimization for businesses in Andhra Pradesh and across India." },
      { name: "keywords", content: "website development India, web development company Andhra Pradesh, custom website design Kakinada, responsive website development, e-commerce website India, professional web development" },
      { name: "robots", content: "index, follow" },
      { property: "og:title", content: "Website Development Services — VRK Solutions | Custom Websites India" },
      { property: "og:description", content: "Professional website development for Indian businesses. Custom designs, responsive layouts, e-commerce, CMS, and performance optimization by VRK Solutions." },
      { property: "og:url", content: `${SITE_URL}/services/website-development` },
      { property: "og:image", content: SOCIAL_IMAGE },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "en_IN" },
      { name: "twitter:title", content: "Website Development Services — VRK Solutions India" },
      { name: "twitter:description", content: "Custom, responsive websites for Indian businesses. E-commerce, CMS, performance-optimized. Get a free quote today." },
      { name: "twitter:image", content: SOCIAL_IMAGE },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/services/website-development` }],
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(breadcrumbSchema) },
      { type: "application/ld+json", children: JSON.stringify(serviceSchema) },
      { type: "application/ld+json", children: JSON.stringify(faqSchema) },
    ],
  }),
  component: () => (
    <ServicePage
      category="Website Development"
      title="Build Your Perfect Digital Presence"
      subtitle="We design and develop high-performance, fully responsive websites that represent your brand and convert visitors into clients."
      features={[
        { icon: Paintbrush, title: "Custom Website Design", description: "Unique, brand-aligned designs built from scratch for maximum impact." },
        { icon: Monitor, title: "Responsive Development", description: "Pixel-perfect on all screen sizes from mobile to desktop." },
        { icon: ShoppingCart, title: "E-Commerce Solutions", description: "Full-featured online stores with secure payments and inventory management." },
        { icon: FileText, title: "CMS Integration", description: "Easy-to-manage content systems so you control your own website." },
        { icon: Zap, title: "Performance Optimization", description: "Fast loading speeds, Core Web Vitals optimization and best practices." },
        { icon: Settings, title: "Ongoing Maintenance", description: "Regular updates, security patches, and technical support post-launch." },
      ]}
    />
  ),
});
