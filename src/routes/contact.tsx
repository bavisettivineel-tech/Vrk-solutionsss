import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Phone, Mail, MapPin, Clock, MessageCircle, CheckCircle } from "lucide-react";
import { PageHero } from "@/components/Shared";
import { Reveal } from "@/components/Reveal";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — VRK Solutions" },
      { name: "description", content: "Get in touch with VRK Solutions. Reach our team for a free quote and consultation." },
      { property: "og:title", content: "Contact — VRK Solutions" },
      { property: "og:description", content: "Let's build something great together." },
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
        subtitle="Reach out and our team will respond within 24 hours."
      />
      <section className="py-24 bg-[var(--background)]">
        <div className="container-x grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Left */}
          <Reveal>
            <h2 className="font-display font-extrabold text-2xl md:text-3xl text-[var(--brand-text)]">Contact Information</h2>
            <ul className="mt-8 space-y-5">
              {[
                { icon: Phone, label: "Phone", value: "9398845947", href: "tel:9398845947" },
                { icon: Mail, label: "Email", value: "vrksolutionsinfo@gmail.com", href: "mailto:vrksolutionsinfo@gmail.com" },
                { icon: MapPin, label: "Location", value: "Kakinada, Andhra Pradesh, India" },
                { icon: Clock, label: "Working Hours", value: "Mon-Sat: 9:00 AM - 6:00 PM" },
              ].map((it) => (
                <li key={it.label} className="flex items-start gap-4">
                  <span className="inline-flex items-center justify-center h-11 w-11 rounded-lg bg-[var(--brand-blue)]/10 text-[var(--brand-accent)]">
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
            <div className="mt-8 space-y-3">
              <a
                href="https://wa.me/919398845947"
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center gap-2 w-full px-5 py-3.5 rounded-md bg-[var(--color-whatsapp)] text-white font-semibold hover:opacity-90"
              >
                <MessageCircle className="h-5 w-5" /> Chat on WhatsApp
              </a>
              <a
                href="tel:9398845947"
                className="flex items-center justify-center gap-2 w-full px-5 py-3.5 rounded-md bg-[var(--brand-blue)] text-white font-semibold hover:bg-[var(--brand-blue)]"
              >
                <Phone className="h-5 w-5" /> Quick Call
              </a>
            </div>
            <div className="mt-8 rounded-xl overflow-hidden border border-[var(--border)]">
              <iframe
                title="VRK Solutions Location"
                src="https://www.google.com/maps?q=Kakinada,Andhra+Pradesh,India&output=embed"
                width="100%"
                height="280"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </Reveal>

          {/* Right form */}
          <Reveal delay={120}>
            <div className="p-8 md:p-10 rounded-2xl bg-[var(--brand-bg-alt)] border border-[var(--border)]">
              <h2 className="font-display font-extrabold text-2xl md:text-3xl text-[var(--brand-text)]">Send Us Your Requirements</h2>
              {submitted ? (
                <div className="mt-6 p-6 rounded-lg bg-[var(--card)] border border-[var(--border)] flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-[var(--brand-accent)] mt-0.5" />
                  <p className="text-[var(--brand-text)] font-medium">
                    Thank you! We will get back to you within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={onSubmit} noValidate className="mt-6 space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-1">Full Name *</label>
                    <input name="name" className={fieldClass("name")} maxLength={100} />
                    {errors.name && <p className="mt-1 text-xs text-red-500">{errors.name}</p>}
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-1">Email Address *</label>
                      <input type="email" name="email" className={fieldClass("email")} maxLength={255} />
                      {errors.email && <p className="mt-1 text-xs text-red-500">{errors.email}</p>}
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1">Phone Number *</label>
                      <input type="tel" name="phone" className={fieldClass("phone")} maxLength={20} />
                      {errors.phone && <p className="mt-1 text-xs text-red-500">{errors.phone}</p>}
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Company Name</label>
                    <input name="company" className={fieldClass("company")} maxLength={100} />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-1">Service Required *</label>
                      <select name="service" defaultValue="" className={fieldClass("service")}>
                        <option value="" disabled>Choose a service</option>
                        {SERVICES.map((s) => <option key={s} value={s}>{s}</option>)}
                      </select>
                      {errors.service && <p className="mt-1 text-xs text-red-500">{errors.service}</p>}
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1">Budget Range</label>
                      <select name="budget" defaultValue="" className={fieldClass("budget")}>
                        <option value="" disabled>Choose a range</option>
                        {BUDGETS.map((b) => <option key={b} value={b}>{b}</option>)}
                      </select>
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Detailed Requirements *</label>
                    <textarea name="message" rows={5} className={fieldClass("message")} maxLength={2000} />
                    {errors.message && <p className="mt-1 text-xs text-red-500">{errors.message}</p>}
                  </div>
                  <button
                    type="submit"
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
