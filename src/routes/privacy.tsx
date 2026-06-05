import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/Shared";

const SITE_URL = "https://vrksolutions.in";

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
    { "@type": "ListItem", position: 2, name: "Privacy Policy", item: `${SITE_URL}/privacy` },
  ],
};

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy — VRK Solutions" },
      { name: "description", content: "Read VRK Solutions' Privacy Policy to understand how we collect, use and protect your personal information when you use our website and services." },
      // noindex legal pages — they don't add SEO value and may dilute link equity
      { name: "robots", content: "noindex, follow" },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/privacy` }],
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(breadcrumbSchema) },
    ],
  }),
  component: PrivacyPage,
});

const SECTIONS = [
  { title: "Introduction", body: "This Privacy Policy explains how VRK Solutions collects, uses, and protects information when you interact with our website and services." },
  { title: "Information We Collect", body: "We collect information you provide directly to us, such as your name, email, phone number, and details shared via our contact and inquiry forms." },
  { title: "How We Use Information", body: "We use your information to respond to inquiries, deliver our services, improve our offerings, and communicate updates relevant to your engagement with us." },
  { title: "Data Security", body: "We implement reasonable technical and organizational safeguards to protect your data against unauthorized access, alteration, disclosure, or destruction." },
  { title: "Cookies", body: "Our website may use cookies to enhance user experience and analyze traffic. You can control cookies through your browser settings." },
  { title: "Third Party Links", body: "Our website may contain links to third-party sites. We are not responsible for the privacy practices of these external services." },
  { title: "Contact Us", body: "For questions regarding this Privacy Policy, please contact us at vrksolutionsinfo@gmail.com or call +91-9398845947." },
];

function PrivacyPage() {
  return (
    <>
      <PageHero label="Legal" title="Privacy Policy" subtitle="Last updated: January 2026" />
      <section className="py-20 bg-[var(--background)]" aria-label="Privacy Policy Content">
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
