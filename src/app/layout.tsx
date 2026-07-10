import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Analytics } from "@vercel/analytics/next";

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
    default: "LayeR by Laya | Luxury Makeup & Hair Styling — Dubai, UAE & Kerala",
  },
  description: "Luxury bridal, party, and editorial makeup with hair styling by Laya — on location across Dubai, the UAE, and Kerala, plus one-to-one online makeup consultations worldwide.",
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://layerbylaya.com'),
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
    siteName: 'LayeR by Laya',
    locale: 'en_US',
    images: [{ url: '/assets/images/generated/home/home-hero-luxury-01.webp', width: 1200, height: 1500, alt: 'LayeR by Laya — luxury makeup and hair styling' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'LayeR by Laya | Luxury Makeup & Hair Styling — Dubai & Kerala',
    description: 'Bridal, party, and editorial makeup in Dubai, the UAE, and Kerala. Online consultations worldwide.',
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
        <Analytics />
      </body>
    </html>
  );
}
