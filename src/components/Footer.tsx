import { Link } from "@tanstack/react-router";
import { Facebook, Instagram, Linkedin, Twitter, Youtube, Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react";

const SOCIAL_LINKS = [
  { Icon: Facebook, label: "VRK Solutions on Facebook", href: "https://www.facebook.com/vrksolutions" },
  { Icon: Instagram, label: "VRK Solutions on Instagram", href: "https://www.instagram.com/vrksolutions" },
  { Icon: Linkedin, label: "VRK Solutions on LinkedIn", href: "https://www.linkedin.com/company/vrksolutions" },
  { Icon: Twitter, label: "VRK Solutions on Twitter/X", href: "https://twitter.com/vrksolutions" },
  { Icon: Youtube, label: "VRK Solutions on YouTube", href: "https://www.youtube.com/@vrksolutions" },
];

export function Footer() {
  return (
    <footer className="bg-[var(--background)] text-white border-t border-[var(--border)]" aria-label="Site footer">
      <div className="container-x py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Brand & Contact */}
        <div>
          <Link
            to="/"
            aria-label="VRK Solutions — go to homepage"
            className="font-display font-extrabold text-2xl text-white"
          >
            VRK Solutions
          </Link>
          <p className="mt-2 text-[var(--brand-accent)] italic text-sm">Transforming Ideas Into Digital Reality</p>
          <p className="mt-4 text-sm text-[var(--brand-muted)] leading-relaxed">
            Your complete digital partner for website development, app development, SaaS, ERP, SEO and digital marketing based in Kakinada, Andhra Pradesh, India.
          </p>
          <address className="not-italic">
            <ul className="mt-5 space-y-2 text-sm text-white">
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-[var(--brand-accent)]" aria-hidden="true" />
                <a href="tel:+919398845947" aria-label="Call VRK Solutions" className="hover:text-[var(--brand-accent)]">+91 93988 45947</a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-[var(--brand-accent)]" aria-hidden="true" />
                <a href="mailto:vrksolutionsinfo@gmail.com" aria-label="Email VRK Solutions" className="hover:text-[var(--brand-accent)]">vrksolutionsinfo@gmail.com</a>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-[var(--brand-accent)]" aria-hidden="true" />
                <span>Kakinada, Andhra Pradesh, India — 533001</span>
              </li>
              <li className="flex items-center gap-2 text-[var(--brand-muted)]">
                <Clock className="h-4 w-4 text-[var(--brand-accent)]" aria-hidden="true" />
                <span>Mon–Sat 9AM – 6PM IST</span>
              </li>
            </ul>
          </address>
          <div className="mt-5 flex items-center gap-3" aria-label="Social media links">
            {SOCIAL_LINKS.map(({ Icon, label, href }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="p-2 rounded-full bg-[var(--card)]/10 text-white/60 hover:text-white hover:bg-[var(--brand-blue)]/30 transition-colors"
              >
                <Icon className="h-4 w-4" aria-hidden="true" />
              </a>
            ))}
          </div>
        </div>

        {/* Services */}
        <nav aria-label="Services navigation">
          <h3 className="font-display font-bold text-lg mb-4">Services</h3>
          <ul className="space-y-2 text-sm text-white/80">
            <li><Link to="/services/website-development" className="hover:text-white">Website Development</Link></li>
            <li><Link to="/services/app-development" className="hover:text-white">App Development</Link></li>
            <li><Link to="/services/saas-applications" className="hover:text-white">SaaS Applications</Link></li>
            <li><Link to="/services/erp-systems" className="hover:text-white">ERP Systems</Link></li>
            <li><Link to="/services/seo" className="hover:text-white">SEO Services</Link></li>
            <li><Link to="/services/digital-marketing" className="hover:text-white">Digital Marketing</Link></li>
          </ul>
        </nav>

        {/* Company */}
        <nav aria-label="Company navigation">
          <h3 className="font-display font-bold text-lg mb-4">Company</h3>
          <ul className="space-y-2 text-sm text-white/80">
            <li><Link to="/about" className="hover:text-white">About Us</Link></li>
            <li><Link to="/portfolio" className="hover:text-white">Portfolio</Link></li>
            <li><Link to="/blog" className="hover:text-white">Blog &amp; Insights</Link></li>
            <li><Link to="/contact" className="hover:text-white">Contact</Link></li>
            <li><Link to="/privacy" className="hover:text-white">Privacy Policy</Link></li>
            <li><Link to="/terms" className="hover:text-white">Terms of Service</Link></li>
          </ul>
        </nav>

        {/* Newsletter / CTA */}
        <div>
          <h3 className="font-display font-bold text-lg mb-4">Stay Updated</h3>
          <p className="text-sm text-white/70 mb-4">Get the latest insights on technology and digital growth.</p>
          <form
            onSubmit={(e) => { e.preventDefault(); (e.currentTarget.querySelector("input") as HTMLInputElement).value = ""; }}
            className="flex gap-2"
            aria-label="Newsletter subscription form"
          >
            <label htmlFor="footer-email" className="sr-only">Your email address</label>
            <input
              id="footer-email"
              type="email"
              required
              placeholder="Your email"
              autoComplete="email"
              className="flex-1 min-w-0 px-3 py-2 rounded-md bg-[var(--card)]/10 text-white placeholder-white/50 text-sm border border-white/20 focus:outline-none focus:ring-2 focus:ring-[var(--brand-accent)]"
            />
            <button type="submit" aria-label="Subscribe to newsletter" className="px-4 py-2 rounded-md bg-[var(--brand-accent)] text-white text-sm font-semibold hover:opacity-90">
              Subscribe
            </button>
          </form>
          <div className="mt-6 space-y-3 text-sm">
            <a href="tel:+919398845947" aria-label="Call VRK Solutions" className="flex items-center gap-2 text-white/80 hover:text-white">
              <Phone className="h-4 w-4" aria-hidden="true" /> +91 93988 45947
            </a>
            <a
              href="https://wa.me/919398845947"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Chat with VRK Solutions on WhatsApp"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-[var(--color-whatsapp)] text-white font-semibold text-sm hover:opacity-90"
            >
              <MessageCircle className="h-4 w-4" aria-hidden="true" /> Chat on WhatsApp
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-x py-5 flex flex-col md:flex-row items-center justify-between gap-2 text-xs text-white/60">
          <p>© 2026 VRK Solutions. All Rights Reserved. Kakinada, Andhra Pradesh, India.</p>
          <p>Designed &amp; Developed by <Link to="/" aria-label="VRK Solutions homepage" className="hover:text-white">VRK Solutions</Link></p>
        </div>
      </div>
    </footer>
  );
}
