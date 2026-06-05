import { createFileRoute } from "@tanstack/react-router";
import { Share2, Target, TrendingUp, PenTool, Mail, BarChart2 } from "lucide-react";
import { ServicePage } from "@/components/ServicePage";

export const Route = createFileRoute("/services/digital-marketing")({
  head: () => ({
    meta: [
      { title: "Digital Marketing — VRK Solutions" },
      { name: "description", content: "Full-spectrum digital marketing services that grow your brand and deliver measurable ROI." },
      { property: "og:title", content: "Digital Marketing — VRK Solutions" },
      { property: "og:description", content: "Digital growth, guaranteed results." },
    ],
  }),
  component: () => (
    <ServicePage
      category="Digital Marketing"
      title="Digital Growth, Guaranteed Results"
      subtitle="Full-spectrum digital marketing solutions that grow your brand, generate leads, and deliver measurable ROI."
      features={[
        { icon: Share2, title: "Social Media Marketing", description: "Strategic content and community management across all major platforms." },
        { icon: Target, title: "Google Ads (PPC)", description: "High-converting paid search campaigns with optimized ad spend." },
        { icon: TrendingUp, title: "Meta Ads", description: "Targeted Facebook and Instagram ad campaigns that drive results." },
        { icon: PenTool, title: "Content Marketing", description: "Blog posts, videos, infographics and content that builds authority." },
        { icon: Mail, title: "Email Marketing", description: "Automated email sequences that nurture leads and retain clients." },
        { icon: BarChart2, title: "Analytics and Reporting", description: "Data-driven insights to continuously improve campaign performance." },
      ]}
    />
  ),
});
