import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import { Suspense } from "react";
import PostHogProvider from "./components/PostHogProvider";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
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
    <html lang="en" className={`${outfit.variable} h-full antialiased`}>
      <body
        className="min-h-full flex flex-col text-white"
        style={{ background: "#080f1d", fontFamily: "var(--font-outfit), sans-serif" }}
      >
        <Suspense>
          <PostHogProvider>{children}</PostHogProvider>
        </Suspense>
      </body>
    </html>
  );
}
