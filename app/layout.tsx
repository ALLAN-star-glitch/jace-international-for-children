import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono, Playfair_Display } from "next/font/google";
import Header from "@/app/components/layout/Header";
import Footer from "@/app/components/layout/Footer";
import Script from "next/script";
import "./globals.css";

// Font optimization with display: swap for better performance
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
  preload: true,
  fallback: ["Arial", "Helvetica", "sans-serif"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
  preload: true,
  fallback: ["Courier New", "monospace"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
  preload: true,
  fallback: ["Georgia", "serif"],
});

// Separate viewport export (new in Next.js 15+)
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#FBF9F7" }, // Ivory
    { media: "(prefers-color-scheme: dark)", color: "#0B1E33" }, // Dark Navy
  ],
  colorScheme: "light dark",
};

// Comprehensive SEO metadata
export const metadata: Metadata = {
  // Base metadata
  title: {
    default: "JACE Children International for Children | Family-Based Care for Children in Kenya",
    template: "%s | JACE International for Children"
  },
  description: "We strengthen families and communities across Kenya to ensure every child is safe, loved, and supported to reach their full potential. Join us in building sustainable, family-centered care.",
  
  // Open Graph for social sharing
  openGraph: {
    title: "JACE International for Children",
    description: "Building sustainable, family-centered care for children across Kenya",
    url: "https://jace-international-for-children.vercel.app/",
    siteName: "JACE for Children International",
    images: [
      {
        url: "https://jace-international-for-children.vercel.app/_next/image?url=%2Fsocial-worker-family.png&w=1920&q=75",
        width: 1200,
        height: 630,
        alt: "JACE International for Children - Every child belongs in a family",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  // Twitter card
  twitter: {
    card: "summary_large_image",
    title: "JACE International for Children",
    description: "Building sustainable, family-centered care for children across Kenya",
    images: ["https://jace-international-for-children.vercel.app/_next/image?url=%2Fsocial-worker-family.png&w=1920&q=75"],
    creator: "@jacechildren",
    site: "@jacechildren",
  },

  // Robots directives
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  // Icons and manifest
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.png", type: "image/png", sizes: "32x32" },
      { url: "/icon-192.png", type: "image/png", sizes: "192x192" },
    ],
    apple: [
      { url: "/apple-icon.png", sizes: "180x180", type: "image/png" },
    ],
    other: [
      {
        rel: "mask-icon",
        url: "/safari-pinned-tab.svg",
        color: "#0000FF", // Your Deep Blue
      },
    ],
  },

  // Manifest for PWA - link to JSON file
  manifest: "/manifest.json",

  // Verification for search consoles
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
  },

  // Alternate languages
  alternates: {
    canonical: "https://www.jacechildren.org",
    languages: {
      "en-US": "https://www.jacechildren.org",
      "sw-KE": "https://www.jacechildren.org/sw", // Swahili version if available
    },
  },

  // Category and keywords
  keywords: [
    "children's charity Kenya",
    "family preservation",
    "child protection Kenya",
    "family-based care",
    "children's rights Africa",
    "Kenya non-profit",
    "child safeguarding",
    "family strengthening",
    "alternative care Kenya",
    "child welfare organization",
    "Nairobi children's charity",
    "orphan care Kenya",
    "community-based care",
    "child reintegration",
    "social work Kenya"
  ],

  // Author and publisher
  authors: [{ name: "JACE for Children International", url: "https://www.jacechildren.org/about" }],
  publisher: "JACE for Children International",

  // Category
  category: "nonprofit",
};

// Generate JSON-LD structured data
const structuredData = {
  "@context": "https://schema.org",
  "@type": "NonProfitOrganization",
  name: "JACE for Children International",
  alternateName: "JACE Children",
  url: "https://www.jacechildren.org",
  logo: "https://www.jacechildren.org/logo.png",
  sameAs: [
    "https://www.facebook.com/jacechildren",
    "https://twitter.com/jacechildren",
    "https://www.linkedin.com/company/jace-children-international",
    "https://www.instagram.com/jacechildren",
  ],
  description: "We strengthen families and communities across Kenya to ensure every child is safe, loved, and supported to reach their full potential.",
  address: {
    "@type": "PostalAddress",
    addressCountry: "KE",
    addressLocality: "Nairobi",
  },
  contactPoint: [
    {
      "@type": "ContactPoint",
      telephone: "+254-700-000000",
      contactType: "customer service",
      email: "info@jacechildren.org",
    },
  ],
  areaServed: [
    {
      "@type": "Country",
      name: "Kenya",
    },
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Programs",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Child Safeguarding",
          description: "Developing community-based systems to protect children from abuse and ensure safe reintegration.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Family Strengthening",
          description: "Empowering parents with skills and economic support to provide stable environments.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Learning & Development",
          description: "Building capacity through training, research, and policy development.",
        },
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* Preconnect to important domains */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* DNS Prefetch for external resources */}
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://elfsightcdn.com" />
        
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${playfair.variable} antialiased bg-ivory text-charcoal`}
      >
        {/* Skip to main content link for accessibility */}
        <a 
          href="#main-content" 
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-vibrant-pink text-white px-4 py-2 rounded-md z-[100]"
        >
          Skip to main content
        </a>
        
        {/* Header - appears at the top of every page */}
        <Header />
        
        {/* Main content */}
        <main id="main-content">
          {children}
        </main>

        {/* Footer - appears at the bottom of every page */}
        <Footer />

        {/* Elfsight WhatsApp Chat Widget */}
        <Script 
          src="https://elfsightcdn.com/platform.js" 
          strategy="afterInteractive"
          async
        />
        <div 
          className="elfsight-app-cd709804-3694-4289-953e-0280ba4e4a3e" 
          data-elfsight-app-lazy
        />
      </body>
    </html>
  );
}