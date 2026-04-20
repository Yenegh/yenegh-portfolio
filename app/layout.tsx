import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import { SiteChrome } from "@/components/SiteChrome";

export const metadata: Metadata = {
  metadataBase: new URL("https://yenegh.com"),

  title: {
    default: "Yenegh Badimayalew | Architectural Designer",
    template: "%s | Yenegh Badimayalew",
  },

  description:
    "Portfolio by Yenegh Badimayalew, an architectural designer focused on design-led thinking, ecological systems, housing, and built work.",

  keywords: [
    "Yenegh Badimayalew",
    "Architectural Designer Auckland",
    "Architecture Portfolio NZ",
    "Housing Design",
    "Ecological Architecture",
    "Design-led Architecture",
  ],

  authors: [{ name: "Yenegh Badimayalew" }],
  creator: "Yenegh Badimayalew",

  openGraph: {
    title: "Yenegh Badimayalew | Architectural Designer in Auckland",
    description:
      "Portfolio by Yenegh Badimayalew, an architectural designer focused on design-led thinking, ecological systems, housing, and built work.",
    url: "https://yenegh.com",
    siteName: "Yenegh",
    locale: "en_NZ",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Yenegh Badimayalew | Architectural Designer",
    description:
      "Portfolio of Yenegh Badimayalew, an architectural designer focused on design-led thinking, ecological systems, housing, and built work.",
  },

  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-S45QSE1BJ4"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-S45QSE1BJ4');
          `}
        </Script>

        <SiteChrome>{children}</SiteChrome>
      </body>
    </html>
  );
}