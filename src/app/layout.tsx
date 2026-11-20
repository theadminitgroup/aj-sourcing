import { Montserrat } from "next/font/google";
import type { Metadata } from "next";
import { StickyNavbar } from "@/components/layout/navbar";
import { Providers } from "@/components/providers";
import { siteConfig } from "@/lib/data";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
});

export const metadata: Metadata = {
  title: `${siteConfig.name} - Import from China with Confidence`,
  description: siteConfig.tagline,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={montserrat.variable}>
      <body className="font-sans antialiased">
        <Providers>
          <StickyNavbar />
          <main>{children}</main>
        </Providers>
      </body>
    </html>
  );
}
