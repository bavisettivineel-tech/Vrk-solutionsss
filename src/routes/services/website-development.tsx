import { createFileRoute } from "@tanstack/react-router";
import { Paintbrush, Monitor, ShoppingCart, FileText, Zap, Settings } from "lucide-react";
import { ServicePage } from "@/components/ServicePage";

export const Route = createFileRoute("/services/website-development")({
  head: () => ({
    meta: [
      { title: "Website Development — VRK Solutions" },
      { name: "description", content: "Custom, responsive website development with performance, SEO, and conversion built in." },
      { property: "og:title", content: "Website Development — VRK Solutions" },
      { property: "og:description", content: "Build your perfect digital presence." },
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
