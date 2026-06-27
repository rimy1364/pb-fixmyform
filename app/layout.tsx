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
  metadataBase: new URL("https://www.fixyourbody.co.in"),
  title: "FIX YOUR BODY | Online Fitness Coaching by Prateek Bansal",
  description:
    "FIX YOUR BODY is India's trusted online fitness coaching by Prateek Bansal. Get personalised workout plans, custom meal plans, and real body transformations. Basic, Transform & Elite plans available.",
  keywords: [
    "fixyourbody", "fix your body", "Prateek Bansal", "online fitness coaching India",
    "personal trainer online", "weight loss coach India", "body transformation",
    "fitness consultant", "workout plan India", "diet plan India",
  ],
  alternates: { canonical: "https://www.fixyourbody.co.in" },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  openGraph: {
    title: "FIX YOUR BODY | Online Fitness Coaching by Prateek Bansal",
    description:
      "Real transformations. Personalised workout & meal plans. Expert 1-on-1 coaching by Prateek Bansal. Join FIX YOUR BODY today.",
    url: "https://www.fixyourbody.co.in",
    siteName: "FIX YOUR BODY",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/logo.png", width: 1200, height: 630, alt: "FIX YOUR BODY" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "FIX YOUR BODY | Online Fitness Coaching by Prateek Bansal",
    description: "Real transformations. Personalised plans. Expert coaching by Prateek Bansal.",
    images: ["/logo.png"],
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([
              {
                "@context": "https://schema.org",
                "@type": "WebSite",
                name: "FIX YOUR BODY",
                url: "https://www.fixyourbody.co.in",
                potentialAction: {
                  "@type": "SearchAction",
                  target: "https://www.fixyourbody.co.in/?q={search_term_string}",
                  "query-input": "required name=search_term_string",
                },
              },
              {
                "@context": "https://schema.org",
                "@type": "HealthAndBeautyBusiness",
                name: "FIX YOUR BODY",
                url: "https://www.fixyourbody.co.in",
                logo: "https://www.fixyourbody.co.in/logo.png",
                description:
                  "Online fitness coaching by Prateek Bansal — personalised workout plans, custom meal plans, and real body transformations.",
                founder: {
                  "@type": "Person",
                  name: "Prateek Bansal",
                  jobTitle: "Fitness Coach",
                },
                serviceType: "Online Fitness Coaching",
                areaServed: "India",
                contactPoint: {
                  "@type": "ContactPoint",
                  contactType: "customer support",
                  telephone: "+919205802858",
                  availableLanguage: ["English", "Hindi"],
                },
                sameAs: [],
              },
            ]),
          }}
        />
        <Suspense>
          <PostHogProvider>{children}</PostHogProvider>
        </Suspense>
      </body>
    </html>
  );
}
