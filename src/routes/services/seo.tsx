import { createFileRoute } from "@tanstack/react-router";
import { Search, FileText, Link as LinkIcon, MapPin, PenTool, BarChart2 } from "lucide-react";
import { ServicePage } from "@/components/ServicePage";

export const Route = createFileRoute("/services/seo")({
  head: () => ({
    meta: [
      { title: "SEO Services — VRK Solutions" },
      { name: "description", content: "Data-driven SEO services that improve rankings, drive qualified traffic and grow revenue." },
      { property: "og:title", content: "SEO Services — VRK Solutions" },
      { property: "og:description", content: "Rank higher. Grow faster. Dominate search." },
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
        { icon: LinkIcon, title: "Off-Page SEO", description: "Quality backlink building, domain authority growth and outreach." },
        { icon: MapPin, title: "Local SEO", description: "Google Business optimization and local ranking strategies." },
        { icon: PenTool, title: "Content Strategy", description: "SEO-focused content creation that ranks and converts." },
        { icon: BarChart2, title: "Monthly Reporting", description: "Clear performance reports showing rankings, traffic and ROI." },
      ]}
    />
  ),
});
