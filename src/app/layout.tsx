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
  title: "Satvik Gedam - Python Developer Intern @ Cetas Healthcare",
  description: "Python Developer Intern at Cetas Healthcare specializing in healthcare technology, API development, and AI solutions. Final year B.Tech Computer Science Engineering student at SASTRA University.",
  keywords: "Python Developer, Healthcare Technology, API Development, AI, Software Development, Cetas Healthcare, SASTRA University",
  authors: [{ name: "Satvik Gedam" }],
  openGraph: {
    title: "Satvik Gedam - Python Developer Intern",
    description: "Python Developer Intern at Cetas Healthcare specializing in healthcare technology and AI solutions",
    type: "website",
    locale: "en_US",
  },
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
