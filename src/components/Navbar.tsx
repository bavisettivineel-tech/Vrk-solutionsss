import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X, ChevronDown, Monitor, Smartphone, Cloud, LayoutGrid, Search, TrendingUp } from "lucide-react";

const serviceLinks = [
  { to: "/services/website-development", label: "Website Development", icon: Monitor },
  { to: "/services/app-development", label: "App Development", icon: Smartphone },
  { to: "/services/saas-applications", label: "SaaS Applications", icon: Cloud },
  { to: "/services/erp-systems", label: "ERP Systems", icon: LayoutGrid },
  { to: "/services/seo", label: "SEO", icon: Search },
  { to: "/services/digital-marketing", label: "Digital Marketing", icon: TrendingUp },
];

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/portfolio", label: "Portfolio" },
  { to: "/blog", label: "Blog" },
  { to: "/contact", label: "Contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-40 transition-all duration-300 ${
        scrolled ? "bg-[var(--brand-deep)] shadow-lg" : "bg-transparent"
      }`}
      role="banner"
    >
      {/* Skip to main content for accessibility & SEO */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-50 focus:px-4 focus:py-2 focus:rounded-md focus:bg-[var(--brand-blue)] focus:text-white focus:font-semibold"
      >
        Skip to main content
      </a>
      <div className="container-x flex items-center justify-between h-16 md:h-20">
        <Link
          to="/"
          aria-label="VRK Solutions — Go to homepage"
          className="text-white font-display font-extrabold text-xl md:text-2xl tracking-tight"
        >
          VRK Solutions
        </Link>

        <nav className="hidden lg:flex items-center gap-1" aria-label="Main navigation">
          {navLinks.slice(0, 2).map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="px-4 py-2 text-sm font-medium text-white/90 hover:text-white transition-colors"
              activeProps={{ className: "px-4 py-2 text-sm font-semibold text-white" }}
              activeOptions={{ exact: true }}
            >
              {l.label}
            </Link>
          ))}
          <div
            className="relative"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <Link
              to="/services"
              aria-expanded={servicesOpen}
              aria-haspopup="true"
              className="px-4 py-2 text-sm font-medium text-white/90 hover:text-white transition-colors inline-flex items-center gap-1"
            >
              Services <ChevronDown className="h-4 w-4" aria-hidden="true" />
            </Link>
            {servicesOpen && (
              <div className="absolute top-full left-0 pt-2 w-72" role="menu" aria-label="Services submenu">
                <div className="bg-[var(--card)] rounded-lg shadow-xl ring-1 ring-[var(--border)] overflow-hidden">
                  {serviceLinks.map((s) => (
                    <Link
                      key={s.to}
                      to={s.to}
                      role="menuitem"
                      className="flex items-center gap-3 px-4 py-3 text-sm text-[var(--brand-text)] hover:bg-[var(--brand-bg-alt)] hover:text-[var(--brand-accent)] transition-colors"
                    >
                      <s.icon className="h-4 w-4 text-[var(--brand-accent)]" aria-hidden="true" />
                      {s.label}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
          {navLinks.slice(2).map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="px-4 py-2 text-sm font-medium text-white/90 hover:text-white transition-colors"
              activeProps={{ className: "px-4 py-2 text-sm font-semibold text-white" }}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <Link
          to="/contact"
          id="cta-get-quote"
          aria-label="Get a free quote from VRK Solutions"
          className="hidden lg:inline-flex items-center px-5 py-2.5 rounded-md bg-[var(--brand-blue)] text-white font-semibold text-sm hover:shadow-[0_0_20px_rgba(37,99,235,0.6)] transition-all"
        >
          Get a Free Quote
        </Link>

        <button
          className="lg:hidden text-white p-2"
          onClick={() => setOpen(true)}
          aria-label="Open menu"
        >
          <Menu className="h-6 w-6" />
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden fixed inset-0 z-50 bg-[var(--brand-deep)] flex flex-col">
          <div className="flex items-center justify-between h-16 px-5 border-b border-white/10">
            <span className="text-white font-display font-extrabold text-xl">VRK Solutions</span>
            <button onClick={() => setOpen(false)} className="text-white p-2" aria-label="Close menu">
              <X className="h-6 w-6" />
            </button>
          </div>
          <div className="flex-1 overflow-y-auto px-5 py-6 space-y-1">
            {navLinks.slice(0, 2).map((l) => (
              <Link key={l.to} to={l.to} onClick={() => setOpen(false)} className="block py-3 text-lg text-white font-medium border-b border-white/10">
                {l.label}
              </Link>
            ))}
            <div className="border-b border-white/10 py-2">
              <Link to="/services" onClick={() => setOpen(false)} className="block py-1 text-lg text-white font-semibold">
                Services
              </Link>
              <div className="pl-3 mt-2 space-y-2">
                {serviceLinks.map((s) => (
                  <Link key={s.to} to={s.to} onClick={() => setOpen(false)} className="flex items-center gap-2 py-2 text-sm text-white/80">
                    <s.icon className="h-4 w-4" /> {s.label}
                  </Link>
                ))}
              </div>
            </div>
            {navLinks.slice(2).map((l) => (
              <Link key={l.to} to={l.to} onClick={() => setOpen(false)} className="block py-3 text-lg text-white font-medium border-b border-white/10">
                {l.label}
              </Link>
            ))}
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="mt-6 inline-flex w-full items-center justify-center px-5 py-3 rounded-md bg-[var(--brand-blue)] text-white font-semibold"
            >
              Get a Free Quote
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
