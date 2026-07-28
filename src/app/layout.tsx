import type { Metadata } from "next";
import Script from "next/script";
import "@/styles/globals.css";

export const metadata: Metadata = {
  title: "Fingoh.ai — Intent Intelligence for B2B Trade Fairs",
  description: "Stop waiting for the right visitors to walk in. Start nurturing them yourself. Fingoh.ai helps exhibitors identify, engage and convert the right prospects before, during and after every trade fair.",
  keywords: [
    "trade fair exhibitor software",
    "B2B lead generation",
    "intent intelligence platform",
    "trade show lead scoring",
    "exhibitor CRM",
    "pre-show outreach",
    "booth visitor scoring",
    "exhibitor marketing",
    "Fingoh"
  ],
  authors: [{ name: "Fingoh.ai", url: "https://fingoh.ai" }],
  creator: "Fingoh.ai",
  publisher: "Akiraas Pte. Ltd.",
  metadataBase: new URL("https://fingoh.ai"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: "https://fingoh.ai",
    title: "Fingoh.ai — Intent Intelligence for B2B Trade Fairs",
    description: "Stop waiting for the right visitors to walk in. Start nurturing them yourself. Fingoh.ai helps exhibitors identify, engage and convert prospects at every trade fair.",
    siteName: "Fingoh.ai",
    images: [
      {
        url: "/dashboard-preview.png",
        width: 1200,
        height: 630,
        alt: "Fingoh.ai Live Dashboard",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Fingoh.ai — Intent Intelligence for B2B Trade Fairs",
    description: "Stop waiting for the right visitors to walk in. Start nurturing them yourself.",
    images: ["/dashboard-preview.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-PELQ8TCVFT"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-PELQ8TCVFT', {
              page_path: window.location.pathname,
            });
          `}
        </Script>
      </head>
      <body>{children}</body>
    </html>
  );
}