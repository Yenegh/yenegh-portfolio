import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import { SiteChrome } from "@/components/SiteChrome";

export const metadata: Metadata = {
  title: "YENEGH",
  description: "Minimal architecture portfolio.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
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