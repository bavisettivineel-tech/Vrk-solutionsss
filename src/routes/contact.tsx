import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Phone, Mail, MapPin, Clock, MessageCircle, CheckCircle } from "lucide-react";
import { PageHero } from "@/components/Shared";
import { Reveal } from "@/components/Reveal";

const SITE_URL = "https://vrksolutions.in";
const SOCIAL_IMAGE = "https://storage.googleapis.com/gpt-engineer-file-uploads/rpw64hzS86YOqhLImiiBLrQmDGQ2/social-images/social-1780643522435-1000075709.webp";

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
    { "@type": "ListItem", position: 2, name: "Contact", item: `${SITE_URL}/contact` },
  ],
};

const contactPageSchema = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  name: "Contact VRK Solutions — Get a Free Quote",
  description: "Contact VRK Solutions in Kakinada, Andhra Pradesh for website development, app development, SaaS, ERP, SEO and digital marketing services. Get a free consultation and quote.",
  url: `${SITE_URL}/contact`,
  mainEntity: {
    "@type": "LocalBusiness",
    name: "VRK Solutions",
    telephone: "+91-9398845947",
    email: "vrksolutionsinfo@gmail.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Kakinada",
      addressLocality: "Kakinada",
      addressRegion: "Andhra Pradesh",
      postalCode: "533001",
      addressCountry: "IN",
    },
    openingHours: "Mo-Sa 09:00-18:00",
  },
};

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact VRK Solutions — Get a Free Quote | IT Services Kakinada, India" },
      { name: "description", content: "Contact VRK Solutions in Kakinada, Andhra Pradesh. Get a free consultation and quote for website development, mobile apps, SaaS, ERP, SEO and digital marketing services. Call +91-9398845947." },
      { name: "keywords", content: "contact VRK Solutions, IT company contact Kakinada, web development quote India, free consultation digital services, VRK Solutions phone, digital agency contact Andhra Pradesh" },
      { name: "robots", content: "index, follow" },
      { property: "og:title", content: "Contact VRK Solutions — Free Quote for IT & Digital Services | Kakinada" },
      { property: "og:description", content: "Get in touch with VRK Solutions. Free consultation for websites, apps, SaaS, ERP, SEO and digital marketing. Based in Kakinada, AP. Call +91-9398845947." },
      { property: "og:url", content: `${SITE_URL}/contact` },
      { property: "og:image", content: SOCIAL_IMAGE },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "en_IN" },
      { name: "twitter:title", content: "Contact VRK Solutions — Free Quote | Kakinada, India" },
      { name: "twitter:description", content: "Reach VRK Solutions in Kakinada, AP. Free quotes for websites, apps, SEO, ERP & digital marketing. +91-9398845947." },
      { name: "twitter:image", content: SOCIAL_IMAGE },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/contact` }],
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(breadcrumbSchema) },
      { type: "application/ld+json", children: JSON.stringify(contactPageSchema) },
    ],
  }),
  component: ContactPage,
});

const SERVICES = ["Website Development", "App Development", "SaaS Applications", "ERP Systems", "SEO", "Digital Marketing"];
const BUDGETS = ["Below 10K", "10K-50K", "50K-1L", "1L-5L", "Above 5L"];

function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const newErrors: Record<string, string> = {};
    if (!String(fd.get("name") || "").trim()) newErrors.name = "Name is required";
    const email = String(fd.get("email") || "").trim();
    if (!email) newErrors.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) newErrors.email = "Enter a valid email";
    if (!String(fd.get("phone") || "").trim()) newErrors.phone = "Phone is required";
    if (!String(fd.get("service") || "")) newErrors.service = "Please choose a service";
    if (!String(fd.get("message") || "").trim()) newErrors.message = "Please describe your requirements";
    setErrors(newErrors);
    if (Object.keys(newErrors).length === 0) {
      setSubmitted(true);
      e.currentTarget.reset();
    }
  };

  const fieldClass = (k: string) =>
    `w-full px-4 py-3 rounded-md border bg-[var(--card)] text-[var(--brand-text)] focus:outline-none focus:ring-2 focus:ring-[var(--brand-accent)] transition ${
      errors[k] ? "border-red-400" : "border-[var(--border)]"
    }`;

  return (
    <>
      <PageHero
        label="Contact"
        title="Let's Build Something Great Together"
        subtitle="Reach out and our team will respond within 24 hours with a free consultation."
      />
      <section className="py-24 bg-[var(--background)]" aria-label="Contact Information and Inquiry Form">
        <div className="container-x grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Left */}
          <Reveal>
            <h2 className="font-display font-extrabold text-2xl md:text-3xl text-[var(--brand-text)]">Contact Information</h2>
            <address className="not-italic">
              <ul className="mt-8 space-y-5">
                {[
                  { icon: Phone, label: "Phone", value: "+91 93988 45947", href: "tel:+919398845947" },
                  { icon: Mail, label: "Email", value: "vrksolutionsinfo@gmail.com", href: "mailto:vrksolutionsinfo@gmail.com" },
                  { icon: MapPin, label: "Location", value: "Kakinada, Andhra Pradesh, India – 533001" },
                  { icon: Clock, label: "Working Hours", value: "Mon–Sat: 9:00 AM – 6:00 PM IST" },
                ].map((it) => (
                  <li key={it.label} className="flex items-start gap-4">
                    <span className="inline-flex items-center justify-center h-11 w-11 rounded-lg bg-[var(--brand-blue)]/10 text-[var(--brand-accent)]" aria-hidden="true">
                      <it.icon className="h-5 w-5" />
                    </span>
                    <div>
                      <div className="text-xs uppercase tracking-wider text-[var(--brand-muted)]">{it.label}</div>
                      {it.href ? (
                        <a href={it.href} className="font-semibold text-[var(--brand-text)] hover:text-[var(--brand-accent)]">{it.value}</a>
                      ) : (
                        <div className="font-semibold text-[var(--brand-text)]">{it.value}</div>
                      )}
                    </div>
                  </li>
                ))}
              </ul>
            </address>
            <div className="mt-8 space-y-3">
              <a
                href="https://wa.me/919398845947"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Chat with VRK Solutions on WhatsApp"
                className="flex items-center justify-center gap-2 w-full px-5 py-3.5 rounded-md bg-[var(--color-whatsapp)] text-white font-semibold hover:opacity-90"
              >
                <MessageCircle className="h-5 w-5" aria-hidden="true" /> Chat on WhatsApp
              </a>
              <a
                href="tel:+919398845947"
                aria-label="Call VRK Solutions"
                className="flex items-center justify-center gap-2 w-full px-5 py-3.5 rounded-md bg-[var(--brand-blue)] text-white font-semibold hover:bg-[var(--brand-blue)] transition-colors"
              >
                <Phone className="h-5 w-5" aria-hidden="true" /> Quick Call
              </a>
            </div>
            <div className="mt-8 rounded-xl overflow-hidden border border-[var(--border)]">
              <iframe
                title="VRK Solutions office location in Kakinada, Andhra Pradesh"
                src="https://www.google.com/maps?q=Kakinada,Andhra+Pradesh,India&output=embed"
                width="100%"
                height="280"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                aria-label="Google Maps showing VRK Solutions location in Kakinada, AP"
              />
            </div>
          </Reveal>

          {/* Right form */}
          <Reveal delay={120}>
            <div className="p-8 md:p-10 rounded-2xl bg-[var(--brand-bg-alt)] border border-[var(--border)]">
              <h2 className="font-display font-extrabold text-2xl md:text-3xl text-[var(--brand-text)]">Send Us Your Requirements</h2>
              {submitted ? (
                <div className="mt-6 p-6 rounded-lg bg-[var(--card)] border border-[var(--border)] flex items-start gap-3" role="alert" aria-live="polite">
                  <CheckCircle className="h-6 w-6 text-[var(--brand-accent)] mt-0.5" aria-hidden="true" />
                  <p className="text-[var(--brand-text)] font-medium">
                    Thank you! We will get back to you within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={onSubmit} noValidate className="mt-6 space-y-4" aria-label="Project inquiry form">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-1">Full Name *</label>
                    <input id="name" name="name" autoComplete="name" className={fieldClass("name")} maxLength={100} aria-required="true" aria-invalid={!!errors.name} />
                    {errors.name && <p className="mt-1 text-xs text-red-500" role="alert">{errors.name}</p>}
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-1">Email Address *</label>
                      <input id="email" type="email" name="email" autoComplete="email" className={fieldClass("email")} maxLength={255} aria-required="true" aria-invalid={!!errors.email} />
                      {errors.email && <p className="mt-1 text-xs text-red-500" role="alert">{errors.email}</p>}
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium mb-1">Phone Number *</label>
                      <input id="phone" type="tel" name="phone" autoComplete="tel" className={fieldClass("phone")} maxLength={20} aria-required="true" aria-invalid={!!errors.phone} />
                      {errors.phone && <p className="mt-1 text-xs text-red-500" role="alert">{errors.phone}</p>}
                    </div>
                  </div>
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium mb-1">Company Name</label>
                    <input id="company" name="company" autoComplete="organization" className={fieldClass("company")} maxLength={100} />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="service" className="block text-sm font-medium mb-1">Service Required *</label>
                      <select id="service" name="service" defaultValue="" className={fieldClass("service")} aria-required="true" aria-invalid={!!errors.service}>
                        <option value="" disabled>Choose a service</option>
                        {SERVICES.map((s) => <option key={s} value={s}>{s}</option>)}
                      </select>
                      {errors.service && <p className="mt-1 text-xs text-red-500" role="alert">{errors.service}</p>}
                    </div>
                    <div>
                      <label htmlFor="budget" className="block text-sm font-medium mb-1">Budget Range</label>
                      <select id="budget" name="budget" defaultValue="" className={fieldClass("budget")}>
                        <option value="" disabled>Choose a range</option>
                        {BUDGETS.map((b) => <option key={b} value={b}>{b}</option>)}
                      </select>
                    </div>
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-1">Detailed Requirements *</label>
                    <textarea id="message" name="message" rows={5} className={fieldClass("message")} maxLength={2000} aria-required="true" aria-invalid={!!errors.message} />
                    {errors.message && <p className="mt-1 text-xs text-red-500" role="alert">{errors.message}</p>}
                  </div>
                  <button
                    type="submit"
                    id="submit-inquiry"
                    className="w-full px-5 py-3.5 rounded-md bg-[var(--brand-blue)] text-white font-semibold hover:bg-[var(--brand-blue)] transition-colors"
                  >
                    Submit Inquiry
                  </button>
                </form>
              )}
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
