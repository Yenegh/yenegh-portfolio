import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://yenegh.com"),

  title: {
    default: "Yenegh Badimayalew",
    template: "%s | Yenegh Badimayalew",
  },

  description:
    "Portfolio of Yenegh Badimayalew — architecture, ecological systems, housing, and built work in Aotearoa New Zealand.",

  keywords: [
    "Yenegh Badimayalew",
    "Architecture Auckland",
    "Architecture Portfolio NZ",
    "Housing Design",
    "Ecological Architecture",
    "Design-led Architecture",
  ],

  authors: [{ name: "Yenegh Badimayalew" }],
  creator: "Yenegh Badimayalew",

  openGraph: {
    title: "Yenegh Badimayalew",
    description:
      "Portfolio of Yenegh Badimayalew — architecture, ecological systems, housing, and built work in Aotearoa New Zealand.",
    url: "https://yenegh.com",
    siteName: "Yenegh",
    locale: "en_NZ",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Yenegh Badimayalew",
    description:
      "Portfolio of Yenegh Badimayalew — architecture, ecological systems, housing, and built work in Aotearoa New Zealand.",
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

        {children}
      </body>
    </html>
  );
}