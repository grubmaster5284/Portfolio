import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Satvik Gedam - AI Software Developer",
  description: "AI Software Developer at Cetas Healthcare, specializing in AI integration into existing apps and rapid consulting-based app development.",
  keywords: ["AI Software Developer", "Healthcare AI", "Flutter Development", "GenAI", "AI Integration"],
  authors: [{ name: "Satvik Gedam" }],
  openGraph: {
    title: "Satvik Gedam - AI Software Developer",
    description: "AI Software Developer at Cetas Healthcare, specializing in AI integration into existing apps and rapid consulting-based app development.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Satvik Gedam - AI Software Developer",
    description: "AI Software Developer at Cetas Healthcare, specializing in AI integration into existing apps and rapid consulting-based app development.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
