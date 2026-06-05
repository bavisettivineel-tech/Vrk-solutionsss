import { Link } from "@tanstack/react-router";
import type { LucideIcon } from "lucide-react";
import { PageHero, CtaBanner, SectionLabel } from "./Shared";
import { Reveal } from "./Reveal";

export interface SubFeature {
  icon: LucideIcon;
  title: string;
  description: string;
}

export function ServicePage({
  category, title, subtitle, features,
}: { category: string; title: string; subtitle: string; features: SubFeature[] }) {
  return (
    <>
      <PageHero label={category} title={title} subtitle={subtitle} />

      <section className="py-20 bg-[var(--background)]">
        <div className="container-x">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <SectionLabel>What's Included</SectionLabel>
            <h2 className="mt-4 font-display font-extrabold text-3xl md:text-4xl text-[var(--brand-text)]">
              Capabilities Built For Results
            </h2>
            <p className="mt-4 text-[var(--brand-muted)]">
              Every engagement is tailored to your business. Here is what you can expect from our {category.toLowerCase()} service.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f, i) => (
              <Reveal key={f.title} delay={i * 60}>
                <div className="group h-full p-7 rounded-xl bg-[var(--card)] border border-[var(--border)] hover:shadow-[0_0_24px_rgba(37,99,235,0.2)] hover:-translate-y-1 hover:border-[var(--brand-blue)] transition-all">
                  <div className="inline-flex items-center justify-center h-12 w-12 rounded-lg bg-[var(--brand-blue)]/10 text-[var(--brand-accent)] group-hover:bg-[var(--brand-blue)] group-hover:text-white transition-colors">
                    <f.icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-5 font-display font-bold text-xl text-[var(--brand-text)]">{f.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-[var(--brand-muted)]">{f.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[var(--brand-bg-alt)] py-20">
        <div className="container-x text-center max-w-3xl mx-auto">
          <h2 className="font-display font-extrabold text-3xl md:text-4xl text-[var(--brand-text)]">
            Ready to Get Started?
          </h2>
          <p className="mt-4 text-[var(--brand-muted)] text-lg">
            Let our experts help you find the perfect solution for your business needs.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link to="/contact" className="px-6 py-3 rounded-md bg-[var(--brand-blue)] text-white font-semibold hover:shadow-[0_0_24px_rgba(37,99,235,0.6)] transition-all">
              Request a Quote
            </Link>
            <Link to="/services" className="px-6 py-3 rounded-md border border-[var(--brand-blue)] text-white font-semibold hover:bg-[var(--brand-blue)] transition-colors">
              All Services
            </Link>
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
