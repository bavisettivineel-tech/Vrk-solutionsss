import { createFileRoute } from "@tanstack/react-router";
import { Smartphone, Layers, Paintbrush, Link as LinkIcon, RefreshCw, Tablet } from "lucide-react";
import { ServicePage } from "@/components/ServicePage";

export const Route = createFileRoute("/services/app-development")({
  head: () => ({
    meta: [
      { title: "App Development — VRK Solutions" },
      { name: "description", content: "Native and cross-platform mobile app development for iOS and Android." },
      { property: "og:title", content: "App Development — VRK Solutions" },
      { property: "og:description", content: "Apps that drive real engagement." },
    ],
  }),
  component: () => (
    <ServicePage
      category="App Development"
      title="Apps That Drive Real Engagement"
      subtitle="We build native and cross-platform mobile applications for iOS and Android that deliver seamless user experiences."
      features={[
        { icon: Tablet, title: "iOS App Development", description: "Native apps for iPhone and iPad with polished UI." },
        { icon: Smartphone, title: "Android App Development", description: "High-performance Android apps built for all device types." },
        { icon: Layers, title: "Cross-Platform Apps", description: "React Native and Flutter apps that work on both platforms from one codebase." },
        { icon: Paintbrush, title: "UI/UX Design", description: "Intuitive, beautiful interfaces designed for real user behavior." },
        { icon: LinkIcon, title: "API Integration", description: "Seamless connection to third-party services, payment gateways and databases." },
        { icon: RefreshCw, title: "App Maintenance", description: "Ongoing support, updates, and performance monitoring after launch." },
      ]}
    />
  ),
});
