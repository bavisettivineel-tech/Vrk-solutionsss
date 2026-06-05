import { createFileRoute } from "@tanstack/react-router";
import { Smartphone, Code, Layout, Bell, Shield, RefreshCw } from "lucide-react";
import { ServicePage } from "@/components/ServicePage";

const SITE_URL = "https://vrksolutions.in";
const SOCIAL_IMAGE = "https://storage.googleapis.com/gpt-engineer-file-uploads/rpw64hzS86YOqhLImiiBLrQmDGQ2/social-images/social-1780643522435-1000075709.webp";

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
    { "@type": "ListItem", position: 2, name: "Services", item: `${SITE_URL}/services/` },
    { "@type": "ListItem", position: 3, name: "App Development", item: `${SITE_URL}/services/app-development` },
  ],
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Mobile App Development",
  serviceType: "Mobile Application Development",
  provider: { "@type": "Organization", name: "VRK Solutions", url: SITE_URL },
  url: `${SITE_URL}/services/app-development`,
  description: "Native and cross-platform mobile app development for Android and iOS. We build high-performance apps for businesses across India.",
  areaServed: { "@type": "Country", name: "India" },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Do you develop apps for both Android and iOS?",
      acceptedAnswer: { "@type": "Answer", text: "Yes. VRK Solutions develops native apps for Android (Kotlin/Java) and iOS (Swift), as well as cross-platform apps using React Native and Flutter for both platforms simultaneously." },
    },
    {
      "@type": "Question",
      name: "How much does mobile app development cost in India?",
      acceptedAnswer: { "@type": "Answer", text: "Mobile app development costs in India typically range from ₹50,000 for simple apps to ₹5 lakh+ for complex enterprise applications. Contact us for a detailed quote based on your specific requirements." },
    },
    {
      "@type": "Question",
      name: "How long does it take to develop a mobile app?",
      acceptedAnswer: { "@type": "Answer", text: "A simple mobile app takes 6–10 weeks. Feature-rich apps typically take 12–20 weeks. We provide a clear timeline and milestones before we begin development." },
    },
  ],
};

export const Route = createFileRoute("/services/app-development")({
  head: () => ({
    meta: [
      { title: "Mobile App Development Services — Android & iOS Apps | VRK Solutions India" },
      { name: "description", content: "VRK Solutions builds high-performance native and cross-platform mobile apps for Android and iOS. Expert app development services for businesses across India. React Native, Flutter, Swift, Kotlin." },
      { name: "keywords", content: "mobile app development India, Android app development, iOS app development, React Native development, Flutter app, cross-platform app India, app development Andhra Pradesh, Kakinada app developer" },
      { name: "robots", content: "index, follow" },
      { property: "og:title", content: "Mobile App Development — Android & iOS | VRK Solutions India" },
      { property: "og:description", content: "High-performance native and cross-platform apps for Android and iOS by VRK Solutions. Serving businesses across India." },
      { property: "og:url", content: `${SITE_URL}/services/app-development` },
      { property: "og:image", content: SOCIAL_IMAGE },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "en_IN" },
      { name: "twitter:title", content: "Mobile App Development — Android & iOS | VRK Solutions" },
      { name: "twitter:description", content: "Native & cross-platform Android and iOS apps for Indian businesses. Get a free quote from VRK Solutions." },
      { name: "twitter:image", content: SOCIAL_IMAGE },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/services/app-development` }],
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(breadcrumbSchema) },
      { type: "application/ld+json", children: JSON.stringify(serviceSchema) },
      { type: "application/ld+json", children: JSON.stringify(faqSchema) },
    ],
  }),
  component: () => (
    <ServicePage
      category="App Development"
      title="Apps That Drive Engagement and Revenue"
      subtitle="We build native and cross-platform mobile applications for Android and iOS — engineered for performance, scalability, and outstanding user experience."
      features={[
        { icon: Smartphone, title: "Native App Development", description: "High-performance native apps for Android (Kotlin) and iOS (Swift)." },
        { icon: Code, title: "Cross-Platform Development", description: "React Native and Flutter apps that run on both Android and iOS from a single codebase." },
        { icon: Layout, title: "UI/UX Design", description: "Intuitive, beautiful interfaces designed for maximum user engagement and retention." },
        { icon: Bell, title: "Push Notifications", description: "Targeted push notifications to re-engage users and drive conversions." },
        { icon: Shield, title: "App Security", description: "End-to-end encryption and security best practices to protect user data." },
        { icon: RefreshCw, title: "Post-Launch Support", description: "Ongoing updates, bug fixes, and feature enhancements after launch." },
      ]}
    />
  ),
});
