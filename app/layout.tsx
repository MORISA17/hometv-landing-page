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
  title: "HomeTV — Nonton Piala Dunia 2026 Tanpa Buffering",
  description: "Nikmati layanan IPTV premium dengan channel olahraga dunia, TV internasional, film premium, dan streaming stabil full server Indonesia.",
  keywords: [
    'IPTV Indonesia',
    'Nonton Piala Dunia 2026',
    'IPTV Premium',
    'Streaming Bola',
    'Sports Dunia',
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
