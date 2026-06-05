import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/Shared";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms of Service — VRK Solutions" },
      { name: "description", content: "The terms governing the use of VRK Solutions services and website." },
    ],
  }),
  component: TermsPage,
});

const SECTIONS = [
  { title: "Acceptance of Terms", body: "By accessing or using the VRK Solutions website and services, you agree to be bound by these Terms of Service." },
  { title: "Services", body: "VRK Solutions provides website development, app development, SaaS, ERP, SEO and digital marketing services as described on this website." },
  { title: "Client Responsibilities", body: "Clients agree to provide accurate information, timely feedback, and necessary materials required for the successful delivery of services." },
  { title: "Payments", body: "Project fees, payment milestones, and timelines will be specified in a separate engagement agreement signed by both parties." },
  { title: "Intellectual Property", body: "Upon full payment, ownership of deliverables transfers to the client, except for third-party assets and our pre-existing tools and frameworks." },
  { title: "Limitation of Liability", body: "VRK Solutions is not liable for indirect, incidental or consequential damages arising from the use of our website or services." },
  { title: "Changes to Terms", body: "We reserve the right to update these Terms at any time. Continued use of our services constitutes acceptance of the updated Terms." },
  { title: "Contact Us", body: "For questions regarding these Terms, please contact us at vrksolutionsinfo@gmail.com or call 9398845947." },
];

function TermsPage() {
  return (
    <>
      <PageHero label="Legal" title="Terms of Service" subtitle="Last updated: January 2026" />
      <section className="py-20 bg-[var(--background)]">
        <div className="container-x max-w-3xl">
          {SECTIONS.map((s) => (
            <div key={s.title} className="mb-10">
              <h2 className="font-display font-bold text-2xl text-[var(--brand-accent)]">{s.title}</h2>
              <p className="mt-3 text-[var(--brand-muted)] leading-relaxed">{s.body}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
