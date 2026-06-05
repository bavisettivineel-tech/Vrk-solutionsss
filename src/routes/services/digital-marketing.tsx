import { createFileRoute } from "@tanstack/react-router";
import { TrendingUp, Share2, Target, Mail, BarChart2, Video } from "lucide-react";
import { ServicePage } from "@/components/ServicePage";

const SITE_URL = "https://vrksolutions.in";
const SOCIAL_IMAGE = "https://storage.googleapis.com/gpt-engineer-file-uploads/rpw64hzS86YOqhLImiiBLrQmDGQ2/social-images/social-1780643522435-1000075709.webp";

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
    { "@type": "ListItem", position: 2, name: "Services", item: `${SITE_URL}/services/` },
    { "@type": "ListItem", position: 3, name: "Digital Marketing", item: `${SITE_URL}/services/digital-marketing` },
  ],
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Digital Marketing Services",
  serviceType: "Digital Marketing",
  provider: { "@type": "Organization", name: "VRK Solutions", url: SITE_URL },
  url: `${SITE_URL}/services/digital-marketing`,
  description: "Full-spectrum digital marketing services for Indian businesses: social media marketing, paid ads (Google/Meta), content marketing, email marketing and performance analytics.",
  areaServed: { "@type": "Country", name: "India" },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What digital marketing services does VRK Solutions offer?",
      acceptedAnswer: { "@type": "Answer", text: "VRK Solutions offers comprehensive digital marketing including social media marketing (Instagram, Facebook, LinkedIn), Google Ads (PPC), Meta Ads, content marketing, email marketing campaigns, influencer marketing, and detailed analytics reporting." },
    },
    {
      "@type": "Question",
      name: "How much does digital marketing cost in India?",
      acceptedAnswer: { "@type": "Answer", text: "Digital marketing packages in India range from ₹10,000/month for basic social media management to ₹1 lakh+/month for full-scale paid advertising and content campaigns. We tailor packages to your budget and goals." },
    },
    {
      "@type": "Question",
      name: "Can digital marketing help my local business in Andhra Pradesh?",
      acceptedAnswer: { "@type": "Answer", text: "Absolutely. Digital marketing is one of the most effective tools for local businesses. We can target customers in specific cities and regions across Andhra Pradesh with hyper-local social media ads, Google Local ads, and local SEO." },
    },
  ],
};

export const Route = createFileRoute("/services/digital-marketing")({
  head: () => ({
    meta: [
      { title: "Digital Marketing Services India — Social Media, Google Ads & SEO | VRK Solutions" },
      { name: "description", content: "VRK Solutions is a top digital marketing agency in Andhra Pradesh. We offer social media marketing, Google Ads, Meta Ads, content marketing, email campaigns and analytics for businesses across India." },
      { name: "keywords", content: "digital marketing India, social media marketing Andhra Pradesh, Google Ads India, Facebook Ads, Instagram marketing, content marketing, email marketing India, digital marketing agency Kakinada" },
      { name: "robots", content: "index, follow" },
      { property: "og:title", content: "Digital Marketing Services — Social Media, Google Ads & More | VRK Solutions India" },
      { property: "og:description", content: "Full-spectrum digital marketing from VRK Solutions: social media, paid ads, content, email and analytics. Grow your business online across India." },
      { property: "og:url", content: `${SITE_URL}/services/digital-marketing` },
      { property: "og:image", content: SOCIAL_IMAGE },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "en_IN" },
      { name: "twitter:title", content: "Digital Marketing Services — VRK Solutions India" },
      { name: "twitter:description", content: "Social media, Google Ads, content & email marketing for Indian businesses. Proven growth strategies from VRK Solutions." },
      { name: "twitter:image", content: SOCIAL_IMAGE },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/services/digital-marketing` }],
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(breadcrumbSchema) },
      { type: "application/ld+json", children: JSON.stringify(serviceSchema) },
      { type: "application/ld+json", children: JSON.stringify(faqSchema) },
    ],
  }),
  component: () => (
    <ServicePage
      category="Digital Marketing"
      title="Digital Growth, Guaranteed Results"
      subtitle="Full-spectrum digital marketing solutions — social media, paid ads, content strategy, email campaigns and analytics — all engineered to grow your business."
      features={[
        { icon: Share2, title: "Social Media Marketing", description: "Strategic content and community management on Instagram, Facebook, and LinkedIn." },
        { icon: Target, title: "Paid Advertising (PPC)", description: "Google Ads and Meta Ads campaigns optimised for maximum ROI." },
        { icon: TrendingUp, title: "Content Marketing", description: "SEO-rich blogs, videos, and infographics that attract and convert your audience." },
        { icon: Mail, title: "Email Marketing", description: "Automated email sequences and newsletters that nurture leads and drive repeat sales." },
        { icon: Video, title: "Video Marketing", description: "Compelling video content for YouTube, Reels, and digital ad campaigns." },
        { icon: BarChart2, title: "Analytics & Reporting", description: "Data-driven performance reports with clear ROI metrics every month." },
      ]}
    />
  ),
});
