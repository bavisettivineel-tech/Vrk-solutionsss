import { createFileRoute } from "@tanstack/react-router";
import { Cloud, CreditCard, LayoutDashboard, Code, Server, Shield } from "lucide-react";
import { ServicePage } from "@/components/ServicePage";

export const Route = createFileRoute("/services/saas-applications")({
  head: () => ({
    meta: [
      { title: "SaaS Applications — VRK Solutions" },
      { name: "description", content: "Custom SaaS platforms built for scalability, security, and growth." },
      { property: "og:title", content: "SaaS Applications — VRK Solutions" },
      { property: "og:description", content: "Software as a Scalable Solution." },
    ],
  }),
  component: () => (
    <ServicePage
      category="SaaS Applications"
      title="Software as a Scalable Solution"
      subtitle="We design and build custom SaaS platforms that are secure, scalable, and built for continuous growth."
      features={[
        { icon: Cloud, title: "Custom SaaS Architecture", description: "Scalable multi-tenant architectures built for performance." },
        { icon: CreditCard, title: "Subscription Management", description: "Billing, plans, and subscription workflows built in." },
        { icon: LayoutDashboard, title: "User Dashboard Design", description: "Clean, intuitive dashboards for end users and admins." },
        { icon: Code, title: "API-First Development", description: "RESTful and GraphQL APIs built for extensibility." },
        { icon: Server, title: "Cloud Deployment", description: "Deployed on AWS, Azure or GCP with auto-scaling." },
        { icon: Shield, title: "Security and Compliance", description: "Data encryption, role-based access, and compliance standards." },
      ]}
    />
  ),
});
