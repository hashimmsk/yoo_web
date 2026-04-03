import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
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
  title: {
    default: "Wonsuk Yoo, PhD | University of Miami",
    template: "%s | Wonsuk Yoo, PhD",
  },
  description:
    "Research Associate Professor of Biostatistics at the University of Miami School of Nursing and Health Studies. Clinical trial design, cancer biostatistics, and machine learning in clinical research.",
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
      <body className="min-h-full flex flex-col bg-white text-foreground font-sans">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
