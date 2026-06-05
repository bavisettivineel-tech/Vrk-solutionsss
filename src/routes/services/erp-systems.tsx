import { createFileRoute } from "@tanstack/react-router";
import { Package, Users, DollarSign, TrendingUp, ShoppingBag, BarChart2 } from "lucide-react";
import { ServicePage } from "@/components/ServicePage";

export const Route = createFileRoute("/services/erp-systems")({
  head: () => ({
    meta: [
      { title: "ERP Systems — VRK Solutions" },
      { name: "description", content: "Custom ERP systems that unify your operations and give you real-time business visibility." },
      { property: "og:title", content: "ERP Systems — VRK Solutions" },
      { property: "og:description", content: "Streamline every operation with smart ERP." },
    ],
  }),
  component: () => (
    <ServicePage
      category="ERP Systems"
      title="Streamline Every Operation With Smart ERP"
      subtitle="Our custom ERP systems unify your business processes, reduce manual work, and give you real-time visibility into operations."
      features={[
        { icon: Package, title: "Inventory Management", description: "Real-time tracking of stock, warehousing and supply chain." },
        { icon: Users, title: "HR and Payroll", description: "Employee management, attendance, leave and payroll automation." },
        { icon: DollarSign, title: "Finance and Accounting", description: "Automated invoicing, expense tracking, and financial reporting." },
        { icon: TrendingUp, title: "Sales and CRM", description: "Lead tracking, pipeline management, and sales automation." },
        { icon: ShoppingBag, title: "Purchase Management", description: "Vendor management, purchase orders and procurement workflows." },
        { icon: BarChart2, title: "Custom Reporting", description: "Real-time dashboards and exportable reports for better decisions." },
      ]}
    />
  ),
});
