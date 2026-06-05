import { Counter, Reveal } from "./Reveal";

const STATS = [
  { value: 10, label: "Projects Delivered" },
  { value: 8, label: "Happy Clients" },
  { value: 6, label: "Services Offered" },
  { value: 5, label: "Team Members" },
];

export function StatsBand() {
  return (
    <section className="relative bg-[var(--brand-bg-alt)] py-20 overflow-hidden border-y border-[var(--border)]">
      <div className="absolute inset-0 hero-grid-bg opacity-30" />
      <div className="container-x relative grid grid-cols-2 lg:grid-cols-4 gap-10 lg:divide-x lg:divide-[var(--border)]">
        {STATS.map((s, i) => (
          <Reveal key={s.label} delay={i * 100} className="text-center px-2">
            <div className="font-display font-extrabold text-5xl md:text-6xl text-[var(--brand-blue)]">
              <Counter to={s.value} />+
            </div>
            <div className="mt-2 text-sm uppercase tracking-wider text-white">{s.label}</div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

export function CtaBanner() {
  return (
    <section className="relative bg-[var(--brand-bg-alt)] py-20 overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(circle at 50% 50%, rgba(37,99,235,0.18), transparent 60%)" }}
      />
      <div className="container-x relative text-center max-w-3xl mx-auto">
        <Reveal>
          <h2 className="font-display font-extrabold text-3xl md:text-5xl text-white">
            Ready to Transform Your Business?
          </h2>
          <p className="mt-4 text-[var(--brand-muted)] text-base md:text-lg">
            Let's discuss how VRK Solutions can help you achieve your goals. Get a personalized quote today.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <a href="/contact" className="px-6 py-3 rounded-md bg-[var(--brand-blue)] text-white font-semibold hover:shadow-[0_0_24px_rgba(37,99,235,0.6)] transition-all">
              Let's Get Started
            </a>
            <a href="/services" className="px-6 py-3 rounded-md border border-[var(--brand-blue)] text-white font-semibold hover:bg-[var(--brand-blue)] transition-colors">
              Explore All Services
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-block text-xs font-bold uppercase tracking-[0.18em] text-[var(--brand-accent)]">
      {children}
    </span>
  );
}

export function PageHero({
  label, title, subtitle,
}: { label?: string; title: string; subtitle?: string }) {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-24 bg-[var(--brand-deep)] overflow-hidden">
      <div className="absolute inset-0 hero-grid-bg opacity-40" />
      <div className="absolute inset-0 bg-gradient-to-b from-[var(--brand-deep)] via-[var(--brand-deep)] to-[var(--brand-blue)]/40" />
      <div className="container-x relative text-center max-w-4xl mx-auto">
        {label && <SectionLabel>{label}</SectionLabel>}
        <h1 className="mt-4 font-display font-extrabold text-4xl md:text-6xl text-white leading-tight">
          {title}
        </h1>
        {subtitle && <p className="mt-6 text-lg text-white/80 max-w-2xl mx-auto">{subtitle}</p>}
      </div>
    </section>
  );
}
