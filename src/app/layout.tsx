import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AnimatedCircuit from "@/components/ui/AnimatedCircuit";
import { structuredData } from "@/lib/structured-data";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: 'swap',
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: "Daniel Awuni | Full-Stack Developer & Digital Designer Portfolio",
    template: "%s | Daniel Awuni"
  },
  description: "Daniel Awuni - Full-stack developer specializing in modern web applications, graphic design (vector graphics), digital fabrication, IT systems, and computer hardware. BSc Computer Engineering graduate creating innovative digital solutions.",
  keywords: [
    "Daniel Awuni",
    "full-stack developer",
    "web development",
    "graphic design",
    "vector graphics",
    "digital fabrication",
    "IT systems",
    "computer hardware",
    "React",
    "Next.js",
    "TypeScript",
    "portfolio",
    "BSc Computer Engineering",
    "software developer",
    "Ghana developer",
    "freelance developer"
  ],
  authors: [{ name: "Daniel Awuni" }],
  creator: "Daniel Awuni",
  publisher: "Daniel Awuni",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://danielawuni.dev'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    title: "Daniel Awuni | Full-Stack Developer & Digital Designer",
    description: "Full-stack developer specializing in modern web applications, graphic design, digital fabrication, and hardware systems. BSc Computer Engineering graduate.",
    siteName: "Daniel Awuni Portfolio",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Daniel Awuni - Full-Stack Developer & Digital Designer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Daniel Awuni | Full-Stack Developer & Digital Designer",
    description: "Full-stack developer specializing in modern web applications, graphic design, digital fabrication, and hardware systems.",
    creator: "@danielawuni", // Update with actual Twitter handle
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: process.env.GOOGLE_SITE_VERIFICATION,
  },
  category: 'technology',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#0A0A0F" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData.person),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData.website),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData.organization),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData.breadcrumb),
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased overflow-x-hidden`}
      >
        <div className="flex flex-col min-h-screen relative">
          <AnimatedCircuit className="absolute inset-0 z-[-1] opacity-20 w-full h-full" />
          <Header />
          <main className="flex-grow pt-20 relative z-10">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
