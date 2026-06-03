import type { Metadata, Viewport } from "next";
import "./globals.css";

const SITE_URL = "https://shresth.is-a.dev";
const TITLE = "Shresth Gupta - Backend & Full-Stack Engineer";
const DESCRIPTION =
  "Building secure, scalable products across AI, blockchain, geospatial systems, and full-stack web and mobile apps.";

const themeScript = `
(function() {
  try {
    var stored = localStorage.getItem('theme');
    var prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    var theme = stored ? stored : (prefersDark ? 'dark' : 'light');
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    document.documentElement.dataset.theme = theme;
  } catch (e) {}
})();
`;

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: TITLE,
    template: "%s — Shresth Gupta",
  },
  description: DESCRIPTION,
  applicationName: "Shresth Gupta",
  keywords: [
    "Shresth Gupta",
    "Backend Engineer",
    "Full-Stack Engineer",
    "Next.js",
    "TypeScript",
    "PostgreSQL",
    "Solidity",
    "Zero-Knowledge Proofs",
    "React Native",
    "Portfolio",
  ],
  authors: [{ name: "Shresth Gupta", url: SITE_URL }],
  creator: "Shresth Gupta",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: "Shresth Gupta",
    title: TITLE,
    description: DESCRIPTION,
    images: [
      {
        url: "/og.svg",
        width: 1200,
        height: 630,
        alt: "Shresth Gupta — Backend & Full-Stack Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    creator: "@shhresth",
    images: ["/og.svg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: SITE_URL,
  },
  icons: {
    icon: [{ url: "/favicon.svg", type: "image/svg+xml" }],
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#fafafa" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0a" },
  ],
  colorScheme: "light dark",
  width: "device-width",
  initialScale: 1,
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Shresth Gupta",
  url: SITE_URL,
  email: "mailto:shresthgupta106@gmail.com",
  jobTitle: "Backend & Full-Stack Engineer",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Mumbai",
    addressCountry: "IN",
  },
  sameAs: [
    "https://github.com/shhresth",
    "https://www.linkedin.com/in/shhresth/",
  ],
  knowsAbout: [
    "Next.js",
    "TypeScript",
    "React",
    "React Native",
    "PostgreSQL",
    "Zero-Knowledge Proofs",
    "Solidity",
    "Node.js",
  ],
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Shresth Gupta",
  url: SITE_URL,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="min-h-screen antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
