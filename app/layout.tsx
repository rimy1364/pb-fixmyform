import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "FIXYOURBODY | Expert Fitness Consulting by Prateek Bansal",
  description:
    "Transform your body with FIXYOURBODY. Expert fitness consulting, personalised plans, and proven transformations by Prateek Bansal.",
  openGraph: {
    title: "FIXYOURBODY | Expert Fitness Consulting",
    description: "Transform your body with proven coaching by Prateek Bansal.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geist.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-[#0A0F1E] text-white">
        {children}
      </body>
    </html>
  );
}
