import { createFileRoute } from "@tanstack/react-router";
import { Search, FileText, Link as LinkIcon, MapPin, PenTool, BarChart2 } from "lucide-react";
import { ServicePage } from "@/components/ServicePage";

const SITE_URL = "https://vrksolutions.in";
const SOCIAL_IMAGE = "https://storage.googleapis.com/gpt-engineer-file-uploads/rpw64hzS86YOqhLImiiBLrQmDGQ2/social-images/social-1780643522435-1000075709.webp";

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
    { "@type": "ListItem", position: 2, name: "Services", item: `${SITE_URL}/services/` },
    { "@type": "ListItem", position: 3, name: "SEO Services", item: `${SITE_URL}/services/seo` },
  ],
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "SEO Services",
  serviceType: "Search Engine Optimization",
  provider: { "@type": "Organization", name: "VRK Solutions", url: SITE_URL },
  url: `${SITE_URL}/services/seo`,
  description: "Data-driven SEO services that improve search rankings, drive qualified organic traffic, and grow revenue for businesses in India. Technical SEO, on-page, off-page, local SEO and content strategy.",
  areaServed: { "@type": "Country", name: "India" },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How long does SEO take to show results?",
      acceptedAnswer: { "@type": "Answer", text: "SEO is a long-term investment. Most businesses start seeing measurable improvements in rankings and organic traffic within 3–6 months. Highly competitive niches may take 6–12 months. VRK Solutions provides monthly reports so you can track progress clearly." },
    },
    {
      "@type": "Question",
      name: "What is included in VRK Solutions SEO services?",
      acceptedAnswer: { "@type": "Answer", text: "Our SEO services include: technical SEO audit and fixes, keyword research, on-page optimization (meta tags, content, headings), off-page link building, local SEO (Google Business Profile optimization), content strategy, and monthly performance reporting." },
    },
    {
      "@type": "Question",
      name: "Do you offer local SEO services for businesses in Andhra Pradesh?",
      acceptedAnswer: { "@type": "Answer", text: "Yes. We specialise in local SEO for businesses in Kakinada, Andhra Pradesh and across India. This includes Google Business Profile optimization, local citations, NAP consistency, local keyword targeting, and map pack rankings." },
    },
    {
      "@type": "Question",
      name: "How much do SEO services cost in India?",
      acceptedAnswer: { "@type": "Answer", text: "SEO service costs in India range from ₹5,000/month for local SEO to ₹50,000+/month for competitive national campaigns. VRK Solutions offers flexible packages based on your goals and budget." },
    },
  ],
};

export const Route = createFileRoute("/services/seo")({
  head: () => ({
    meta: [
      { title: "SEO Services India — Rank Higher on Google | VRK Solutions Kakinada" },
      { name: "description", content: "VRK Solutions offers professional SEO services in India. Technical SEO audits, on-page optimization, link building, local SEO and content strategy to rank your website higher on Google and drive qualified organic traffic." },
      { name: "keywords", content: "SEO services India, SEO company Andhra Pradesh, local SEO Kakinada, search engine optimization India, technical SEO audit, on-page SEO, link building India, Google ranking India, digital marketing SEO" },
      { name: "robots", content: "index, follow" },
      { property: "og:title", content: "SEO Services India — Rank Higher on Google | VRK Solutions" },
      { property: "og:description", content: "Professional SEO services by VRK Solutions. Technical audits, on-page, off-page, local SEO, content strategy. Dominate Google rankings for your business in India." },
      { property: "og:url", content: `${SITE_URL}/services/seo` },
      { property: "og:image", content: SOCIAL_IMAGE },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "en_IN" },
      { name: "twitter:title", content: "SEO Services India — Rank Higher on Google | VRK Solutions" },
      { name: "twitter:description", content: "Rank higher. Grow faster. Professional SEO services from VRK Solutions for Indian businesses. Free audit available." },
      { name: "twitter:image", content: SOCIAL_IMAGE },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/services/seo` }],
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(breadcrumbSchema) },
      { type: "application/ld+json", children: JSON.stringify(serviceSchema) },
      { type: "application/ld+json", children: JSON.stringify(faqSchema) },
    ],
  }),
  component: () => (
    <ServicePage
      category="SEO"
      title="Rank Higher. Grow Faster. Dominate Search."
      subtitle="Our data-driven SEO strategies improve your search rankings, drive qualified traffic, and convert visitors into clients."
      features={[
        { icon: Search, title: "Technical SEO Audit", description: "Deep website analysis to identify and fix all technical SEO issues." },
        { icon: FileText, title: "On-Page Optimization", description: "Keyword research, meta optimization, content structure and internal linking." },
        { icon: LinkIcon, title: "Off-Page SEO & Link Building", description: "Quality backlink building, domain authority growth and outreach." },
        { icon: MapPin, title: "Local SEO", description: "Google Business Profile optimization and local ranking strategies." },
        { icon: PenTool, title: "Content Strategy", description: "SEO-focused content creation that ranks and converts." },
        { icon: BarChart2, title: "Monthly Reporting", description: "Clear performance reports showing rankings, traffic and ROI." },
      ]}
    />
  ),
});
