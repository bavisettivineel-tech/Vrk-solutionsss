import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Calendar } from "lucide-react";
import { CtaBanner, PageHero } from "@/components/Shared";
import { Reveal } from "@/components/Reveal";
import webFutureImg from "@/assets/blog-web-future.jpg";
import mobileAppImg from "@/assets/blog-mobile-app.jpg";
import erpImg from "@/assets/blog-erp.jpg";
import seoImg from "@/assets/blog-seo.jpg";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "Blog & Insights — VRK Solutions" },
      { name: "description", content: "Expert articles on web development, mobile apps, ERP, SaaS, SEO and digital marketing from the VRK Solutions team." },
      { property: "og:title", content: "Blog & Insights — VRK Solutions" },
      { property: "og:description", content: "Insights and ideas from our experts on building and growing digital products." },
    ],
  }),
  component: BlogPage,
});

const FEATURED = {
  title: "The Future of Web Development in 2026 and Beyond",
  category: "Web Development",
  excerpt: "An in-depth look at the technologies, frameworks and approaches that will define the next generation of websites.",
  date: "May 28, 2026",
  image: webFutureImg,
};

const POSTS = [
  { title: "Why Every Business Needs a Mobile App in 2026", category: "App Development", excerpt: "Mobile is no longer optional. Here is how apps directly drive retention and revenue.", date: "May 14, 2026", image: mobileAppImg },
  { title: "How ERP Systems Transform Business Operations", category: "ERP Systems", excerpt: "From siloed spreadsheets to unified operations — the impact of modern ERP.", date: "Apr 30, 2026", image: erpImg },
  { title: "SEO Strategies That Actually Work in 2026", category: "SEO", excerpt: "What still matters in SEO this year and what you can safely stop doing.", date: "Apr 12, 2026", image: seoImg },
];

function BlogPage() {
  return (
    <>
      <PageHero label="Blog" title="Insights and Ideas" subtitle="Thoughts on technology, design and digital growth." />
      <section className="py-24 bg-[var(--background)]">
        <div className="container-x space-y-12">
          <Reveal>
            <Link to="/blog" className="group block rounded-2xl overflow-hidden border border-[var(--border)] bg-[var(--card)] shadow-sm hover:shadow-xl transition-shadow">
              <div className="grid md:grid-cols-2">
                <div className="aspect-video md:aspect-auto overflow-hidden">
                  <img src={FEATURED.image} alt={FEATURED.title} width={1280} height={720} loading="lazy" className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-8 md:p-10 flex flex-col justify-center">
                  <span className="inline-block w-fit px-3 py-1 rounded-full text-xs font-semibold bg-[var(--brand-blue)]/10 text-[var(--brand-accent)]">{FEATURED.category}</span>
                  <h2 className="mt-4 font-display font-extrabold text-2xl md:text-3xl text-[var(--brand-text)] group-hover:text-[var(--brand-accent)] transition-colors">
                    {FEATURED.title}
                  </h2>
                  <p className="mt-3 text-[var(--brand-muted)] leading-relaxed">{FEATURED.excerpt}</p>
                  <div className="mt-5 flex items-center gap-3 text-sm text-[var(--brand-muted)]">
                    <Calendar className="h-4 w-4" /> {FEATURED.date}
                  </div>
                  <span className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-[var(--brand-accent)]">
                    Read More <ArrowRight className="h-4 w-4" />
                  </span>
                </div>
              </div>
            </Link>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {POSTS.map((p, i) => (
              <Reveal key={p.title} delay={i * 100}>
                <Link to="/blog" className="group block h-full rounded-xl overflow-hidden border border-[var(--border)] bg-[var(--card)] shadow-sm hover:shadow-xl transition-shadow">
                  <div className="aspect-video overflow-hidden">
                    <img src={p.image} alt={p.title} width={1280} height={720} loading="lazy" className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  </div>
                  <div className="p-6">
                    <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-[var(--brand-blue)]/10 text-[var(--brand-accent)]">{p.category}</span>
                    <h3 className="mt-3 font-display font-bold text-lg text-[var(--brand-text)] group-hover:text-[var(--brand-accent)] transition-colors">{p.title}</h3>
                    <p className="mt-2 text-sm text-[var(--brand-muted)]">{p.excerpt}</p>
                    <div className="mt-4 flex items-center justify-between text-sm">
                      <span className="text-[var(--brand-muted)] inline-flex items-center gap-1"><Calendar className="h-4 w-4" /> {p.date}</span>
                      <span className="font-semibold text-[var(--brand-accent)] inline-flex items-center gap-1">Read More <ArrowRight className="h-4 w-4" /></span>
                    </div>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <CtaBanner />
    </>
  );
}
