import localFont from "next/font/local";
import type { Metadata } from "next";
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

export const metadata: Metadata = {
  title: `${siteConfig.name} - Import from China with Confidence`,
  description: siteConfig.tagline,
  icons: {
    icon: [
      { url: "/brand/favicon.png", type: "image/png" },
      { url: "/favicon.ico", sizes: "any" },
    ],
    apple: [{ url: "/apple-icon.png" }],
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
        <Providers>
          <SiteNavbar />
          <main>{children}</main>
        </Providers>
      </body>
    </html>
  );
}
