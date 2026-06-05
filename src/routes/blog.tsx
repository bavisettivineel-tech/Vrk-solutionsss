import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Calendar } from "lucide-react";
import { CtaBanner, PageHero } from "@/components/Shared";
import { Reveal } from "@/components/Reveal";
import webFutureImg from "@/assets/blog-web-future.jpg";
import mobileAppImg from "@/assets/blog-mobile-app.jpg";
import erpImg from "@/assets/blog-erp.jpg";
import seoImg from "@/assets/blog-seo.jpg";

const SITE_URL = "https://vrksolutions.in";
const SOCIAL_IMAGE = "https://storage.googleapis.com/gpt-engineer-file-uploads/rpw64hzS86YOqhLImiiBLrQmDGQ2/social-images/social-1780643522435-1000075709.webp";

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
    { "@type": "ListItem", position: 2, name: "Blog", item: `${SITE_URL}/blog` },
  ],
};

const blogSchema = {
  "@context": "https://schema.org",
  "@type": "Blog",
  name: "VRK Solutions Blog — Insights on Web, App, ERP, SEO & Digital Marketing",
  description: "Expert articles and guides on web development, mobile apps, ERP systems, SaaS, SEO and digital marketing from the VRK Solutions team.",
  url: `${SITE_URL}/blog`,
  publisher: { "@type": "Organization", name: "VRK Solutions", url: SITE_URL },
  blogPost: [
    {
      "@type": "BlogPosting",
      headline: "The Future of Web Development in 2026 and Beyond",
      description: "An in-depth look at the technologies, frameworks and approaches that will define the next generation of websites.",
      datePublished: "2026-05-28",
      author: { "@type": "Organization", name: "VRK Solutions" },
      publisher: { "@type": "Organization", name: "VRK Solutions", url: SITE_URL },
      url: `${SITE_URL}/blog`,
      image: SOCIAL_IMAGE,
    },
    {
      "@type": "BlogPosting",
      headline: "Why Every Business Needs a Mobile App in 2026",
      description: "Mobile is no longer optional. Here is how apps directly drive retention and revenue.",
      datePublished: "2026-05-14",
      author: { "@type": "Organization", name: "VRK Solutions" },
      publisher: { "@type": "Organization", name: "VRK Solutions", url: SITE_URL },
      url: `${SITE_URL}/blog`,
    },
    {
      "@type": "BlogPosting",
      headline: "How ERP Systems Transform Business Operations",
      description: "From siloed spreadsheets to unified operations — the impact of modern ERP.",
      datePublished: "2026-04-30",
      author: { "@type": "Organization", name: "VRK Solutions" },
      publisher: { "@type": "Organization", name: "VRK Solutions", url: SITE_URL },
      url: `${SITE_URL}/blog`,
    },
    {
      "@type": "BlogPosting",
      headline: "SEO Strategies That Actually Work in 2026",
      description: "What still matters in SEO this year and what you can safely stop doing.",
      datePublished: "2026-04-12",
      author: { "@type": "Organization", name: "VRK Solutions" },
      publisher: { "@type": "Organization", name: "VRK Solutions", url: SITE_URL },
      url: `${SITE_URL}/blog`,
    },
  ],
};

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "Blog & Insights — Web Development, SEO, ERP & Digital Marketing Tips | VRK Solutions" },
      { name: "description", content: "Read expert articles from VRK Solutions on web development trends, mobile app tips, ERP systems, SaaS, SEO strategies and digital marketing insights for businesses in India." },
      { name: "keywords", content: "web development blog India, SEO tips 2026, digital marketing insights, ERP blog, mobile app trends, SaaS development tips, VRK Solutions blog, IT articles India" },
      { name: "robots", content: "index, follow" },
      { property: "og:title", content: "Blog & Insights — Web Dev, SEO, ERP & Digital Marketing | VRK Solutions" },
      { property: "og:description", content: "Expert articles on web development, mobile apps, ERP, SaaS, SEO and digital marketing from the VRK Solutions team in India." },
      { property: "og:url", content: `${SITE_URL}/blog` },
      { property: "og:image", content: SOCIAL_IMAGE },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { property: "og:type", content: "blog" },
      { property: "og:locale", content: "en_IN" },
      { name: "twitter:title", content: "Blog & Insights — VRK Solutions | Web, SEO, ERP & Marketing" },
      { name: "twitter:description", content: "Expert articles on web, app, ERP, SaaS, SEO and digital marketing from VRK Solutions, India." },
      { name: "twitter:image", content: SOCIAL_IMAGE },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/blog` }],
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(breadcrumbSchema) },
      { type: "application/ld+json", children: JSON.stringify(blogSchema) },
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
      <PageHero label="Blog" title="Insights &amp; Ideas" subtitle="Thoughts on technology, design and digital growth from the VRK Solutions team." />
      <section className="py-24 bg-[var(--background)]" aria-label="Blog Posts">
        <div className="container-x space-y-12">
          <Reveal>
            <Link to="/blog" aria-label={`Read: ${FEATURED.title}`} className="group block rounded-2xl overflow-hidden border border-[var(--border)] bg-[var(--card)] shadow-sm hover:shadow-xl transition-shadow">
              <div className="grid md:grid-cols-2">
                <div className="aspect-video md:aspect-auto overflow-hidden">
                  <img
                    src={FEATURED.image}
                    alt={FEATURED.title}
                    width={1280}
                    height={720}
                    loading="eager"
                    className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <article className="p-8 md:p-10 flex flex-col justify-center">
                  <span className="inline-block w-fit px-3 py-1 rounded-full text-xs font-semibold bg-[var(--brand-blue)]/10 text-[var(--brand-accent)]">{FEATURED.category}</span>
                  <h2 className="mt-4 font-display font-extrabold text-2xl md:text-3xl text-[var(--brand-text)] group-hover:text-[var(--brand-accent)] transition-colors">
                    {FEATURED.title}
                  </h2>
                  <p className="mt-3 text-[var(--brand-muted)] leading-relaxed">{FEATURED.excerpt}</p>
                  <div className="mt-5 flex items-center gap-3 text-sm text-[var(--brand-muted)]">
                    <Calendar className="h-4 w-4" aria-hidden="true" /> <time dateTime="2026-05-28">{FEATURED.date}</time>
                  </div>
                  <span className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-[var(--brand-accent)]">
                    Read More <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </span>
                </article>
              </div>
            </Link>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {POSTS.map((p, i) => (
              <Reveal key={p.title} delay={i * 100}>
                <Link to="/blog" aria-label={`Read: ${p.title}`} className="group block h-full rounded-xl overflow-hidden border border-[var(--border)] bg-[var(--card)] shadow-sm hover:shadow-xl transition-shadow">
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={p.image}
                      alt={p.title}
                      width={1280}
                      height={720}
                      loading="lazy"
                      className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <article className="p-6">
                    <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-[var(--brand-blue)]/10 text-[var(--brand-accent)]">{p.category}</span>
                    <h3 className="mt-3 font-display font-bold text-lg text-[var(--brand-text)] group-hover:text-[var(--brand-accent)] transition-colors">{p.title}</h3>
                    <p className="mt-2 text-sm text-[var(--brand-muted)]">{p.excerpt}</p>
                    <div className="mt-4 flex items-center justify-between text-sm">
                      <span className="text-[var(--brand-muted)] inline-flex items-center gap-1"><Calendar className="h-4 w-4" aria-hidden="true" /> {p.date}</span>
                      <span className="font-semibold text-[var(--brand-accent)] inline-flex items-center gap-1">Read More <ArrowRight className="h-4 w-4" aria-hidden="true" /></span>
                    </div>
                  </article>
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
