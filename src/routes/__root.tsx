import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { FloatingWhatsApp } from "../components/FloatingWhatsApp";

// ─── Global JSON-LD Schemas ────────────────────────────────────────────────
const SITE_URL = "https://vrksolutions.in";
const LOGO_URL = "https://vrksolutions.in/favicon.ico";
const SOCIAL_IMAGE =
  "https://storage.googleapis.com/gpt-engineer-file-uploads/rpw64hzS86YOqhLImiiBLrQmDGQ2/social-images/social-1780643522435-1000075709.webp";

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": ["Organization", "ProfessionalService"],
  "@id": `${SITE_URL}/#organization`,
  name: "VRK Solutions",
  alternateName: "VRK Digital Solutions",
  url: SITE_URL,
  logo: {
    "@type": "ImageObject",
    url: LOGO_URL,
    width: 512,
    height: 512,
  },
  image: SOCIAL_IMAGE,
  description:
    "VRK Solutions is a full-service digital solutions company based in Kakinada, Andhra Pradesh, India. We specialise in website development, mobile app development, SaaS platforms, ERP systems, SEO and digital marketing for businesses across India.",
  slogan: "Transforming Ideas Into Digital Reality",
  foundingDate: "2025",
  numberOfEmployees: { "@type": "QuantitativeValue", value: 5 },
  areaServed: [
    { "@type": "Country", name: "India" },
    { "@type": "State", name: "Andhra Pradesh" },
  ],
  address: {
    "@type": "PostalAddress",
    streetAddress: "Kakinada",
    addressLocality: "Kakinada",
    addressRegion: "Andhra Pradesh",
    postalCode: "533001",
    addressCountry: "IN",
  },
  contactPoint: [
    {
      "@type": "ContactPoint",
      telephone: "+91-9398845947",
      contactType: "customer service",
      areaServed: "IN",
      availableLanguage: ["English", "Telugu", "Hindi"],
      hoursAvailable: {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
        ],
        opens: "09:00",
        closes: "18:00",
      },
    },
    {
      "@type": "ContactPoint",
      email: "vrksolutionsinfo@gmail.com",
      contactType: "technical support",
    },
  ],
  sameAs: [
    "https://www.facebook.com/vrksolutions",
    "https://www.instagram.com/vrksolutions",
    "https://www.linkedin.com/company/vrksolutions",
    "https://twitter.com/vrksolutions",
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Digital Services",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Website Development" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Mobile App Development" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "SaaS Application Development" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "ERP System Development" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "SEO Services" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Digital Marketing" } },
    ],
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": `${SITE_URL}/#localbusiness`,
  name: "VRK Solutions",
  image: SOCIAL_IMAGE,
  url: SITE_URL,
  telephone: "+91-9398845947",
  email: "vrksolutionsinfo@gmail.com",
  priceRange: "₹₹",
  currenciesAccepted: "INR",
  paymentAccepted: "Cash, Credit Card, Bank Transfer, UPI",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Kakinada",
    addressLocality: "Kakinada",
    addressRegion: "Andhra Pradesh",
    postalCode: "533001",
    addressCountry: "IN",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 16.9891,
    longitude: 82.2475,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ],
      opens: "09:00",
      closes: "18:00",
    },
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "8",
    bestRating: "5",
    worstRating: "1",
  },
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
  url: SITE_URL,
  name: "VRK Solutions",
  description:
    "Premium IT services, website development, app development, SaaS, ERP, SEO and digital marketing company in India.",
  publisher: { "@id": `${SITE_URL}/#organization` },
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: `${SITE_URL}/blog?q={search_term_string}`,
    },
    "query-input": "required name=search_term_string",
  },
  inLanguage: "en-IN",
};

// ─── Not Found / Error Components ──────────────────────────────────────────
function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            aria-label="Go back to VRK Solutions homepage"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

// ─── Root Route ─────────────────────────────────────────────────────────────
export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        title:
          "VRK Solutions — IT Services, Web Development, App, SaaS, ERP & Digital Marketing India",
      },
      {
        name: "description",
        content:
          "VRK Solutions is a leading IT services company in Kakinada, Andhra Pradesh. We deliver premium website development, mobile app development, SaaS, ERP systems, SEO and digital marketing services across India.",
      },
      {
        name: "keywords",
        content:
          "VRK Solutions, website development Kakinada, app development India, SaaS development, ERP systems Andhra Pradesh, SEO services India, digital marketing Kakinada, IT company Andhra Pradesh",
      },
      { name: "author", content: "VRK Solutions" },
      { name: "robots", content: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" },
      { name: "googlebot", content: "index, follow" },
      { name: "theme-color", content: "#2563EB" },
      { name: "msapplication-TileColor", content: "#2563EB" },
      // Geo meta for local SEO
      { name: "geo.region", content: "IN-AP" },
      { name: "geo.placename", content: "Kakinada, Andhra Pradesh, India" },
      { name: "geo.position", content: "16.9891;82.2475" },
      { name: "ICBM", content: "16.9891, 82.2475" },
      // Open Graph
      { property: "og:site_name", content: "VRK Solutions" },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "en_IN" },
      {
        property: "og:title",
        content:
          "VRK Solutions — IT Services, Web, App, SaaS, ERP & Marketing India",
      },
      {
        property: "og:description",
        content:
          "VRK Solutions delivers premium website, app, SaaS, ERP, SEO and digital marketing services for growing businesses across India.",
      },
      { property: "og:url", content: SITE_URL },
      { property: "og:image", content: SOCIAL_IMAGE },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { property: "og:image:alt", content: "VRK Solutions — Digital Solutions Partner" },
      // Twitter Card
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:site", content: "@vrksolutions" },
      { name: "twitter:creator", content: "@vrksolutions" },
      {
        name: "twitter:title",
        content: "VRK Solutions — IT Services, Web, App, SaaS, ERP & Marketing",
      },
      {
        name: "twitter:description",
        content:
          "VRK Solutions delivers premium website, app, SaaS, ERP, SEO and digital marketing services for growing businesses across India.",
      },
      { name: "twitter:image", content: SOCIAL_IMAGE },
      { name: "twitter:image:alt", content: "VRK Solutions — Digital Solutions Partner" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      // Preconnect for performance (reduces render-blocking font latency)
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      // DNS prefetch for maps embed
      { rel: "dns-prefetch", href: "https://www.google.com" },
      // Canonical (root fallback — individual routes override this)
      { rel: "canonical", href: SITE_URL },
      // Favicons
      { rel: "icon", href: "/favicon.ico" },
      { rel: "shortcut icon", href: "/favicon.ico" },
    ],
    scripts: [
      // Organization JSON-LD
      {
        type: "application/ld+json",
        children: JSON.stringify(organizationSchema),
      },
      // LocalBusiness JSON-LD
      {
        type: "application/ld+json",
        children: JSON.stringify(localBusinessSchema),
      },
      // WebSite JSON-LD
      {
        type: "application/ld+json",
        children: JSON.stringify(websiteSchema),
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en-IN">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <Navbar />
      <main id="main-content" className="min-h-screen">
        <Outlet />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </QueryClientProvider>
  );
}
