import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Analytics } from "@vercel/analytics/next";
import { brand, siteUrl, socialPreview } from "@/lib/site";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    template: "%s | LayeR by Laya",
    default: "LayeR by Laya | Premium Makeup & Hair Styling",
  },
  description: "Luxury bridal, party, and editorial makeup with hair styling by Laya — on location across Dubai, the UAE, and Kerala, plus one-to-one online makeup consultations worldwide.",
  metadataBase: new URL(siteUrl),
  alternates: { canonical: siteUrl },
  applicationName: 'LayeR by Laya',
  keywords: [
    'bridal makeup artist Dubai', 'bridal makeup Kerala', 'makeup artist UAE',
    'party makeup Dubai', 'hair stylist Dubai', 'Kerala wedding makeup',
    'online makeup consultation', 'editorial makeup artist', 'South Indian bridal makeup',
  ],
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 },
  },
  openGraph: {
    type: 'website',
    url: siteUrl,
    siteName: brand.name,
    title: 'LayeR by Laya | Premium Makeup & Hair Styling',
    description: 'Premium bridal, event and editorial makeup with hair styling by Laya across the UAE and Kerala, plus personal online consultations worldwide.',
    locale: 'en_US',
    images: [socialPreview],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'LayeR by Laya | Premium Makeup & Hair Styling',
    description: 'Bridal, party, and editorial makeup in Dubai, the UAE, and Kerala. Online consultations worldwide.',
    images: [socialPreview.url],
  },
  formatDetection: { telephone: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${inter.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col font-sans bg-[var(--color-blush-paper)] text-[var(--color-deep-espresso)]">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        {process.env.VERCEL === '1' && <Analytics />}
      </body>
    </html>
  );
}
