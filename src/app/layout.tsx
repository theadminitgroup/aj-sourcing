import localFont from "next/font/local";
import type { Metadata } from "next";
import { MetaPixel } from "@/components/analytics/meta-pixel";
import { SiteNavbar } from "@/components/layout/navbar";
import { Providers } from "@/components/providers";
import { siteConfig } from "@/lib/data";
import "./globals.css";

const zalandoSans = localFont({
  src: [
    {
      path: "../../public/fonts/ZalandoSans-Variable.ttf",
      style: "normal",
    },
  ],
  variable: "--font-zalando",
  display: "swap",
  weight: "400 700",
});

const siteUrl = "https://www.ajsourcing.com.hk";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: `${siteConfig.name} - Import from China with Confidence`,
  description: siteConfig.tagline,
  icons: {
    icon: [
      { url: "/brand/favicon.png", type: "image/png" },
      { url: "/favicon.ico", sizes: "any" },
    ],
    apple: [{ url: "/apple-icon.png" }],
  },
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: siteConfig.name,
    title: `${siteConfig.name} - Import from China with Confidence`,
    description: siteConfig.tagline,
    images: [
      {
        url: "/brand/og.jpg",
        width: 1024,
        height: 537,
        alt: "AJ Sourcing — Import from China with confidence",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} - Import from China with Confidence`,
    description: siteConfig.tagline,
    images: ["/brand/og.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={zalandoSans.variable}>
      <body className="font-sans antialiased">
        <MetaPixel />
        <Providers>
          <SiteNavbar />
          <main>{children}</main>
        </Providers>
      </body>
    </html>
  );
}
