import type { Metadata, Viewport } from "next";
import { Instrument_Sans, JetBrains_Mono } from "next/font/google";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import "./globals.css";

const instrument = Instrument_Sans({
  variable: "--font-instrument",
  subsets: ["latin"],
  display: "swap",
});

const mono = JetBrains_Mono({
  variable: "--font-mono-jb",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.indusvalley.com"),
  title: {
    default: "Indus Valley Consultants — IT services & consulting since 1996",
    template: "%s · Indus Valley Consultants",
  },
  description:
    "Indus Valley Consultants is an IT services and consulting firm delivering healthcare payer systems, enterprise performance management & BI, and digital integration for enterprises worldwide.",
  openGraph: {
    type: "website",
    siteName: "Indus Valley Consultants",
    title: "Indus Valley Consultants — IT services & consulting since 1996",
    description:
      "Healthcare payer systems, enterprise performance management & BI, and digital integration. Thirty years of delivery from Miamisburg, Ohio.",
  },
};

export const viewport: Viewport = {
  themeColor: "#faf7f3",
  colorScheme: "light",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${instrument.variable} ${mono.variable} h-full antialiased`}
    >
      <head>
        <noscript>
          {/* keep every revealed block visible without JS */}
          <style>{`[data-reveal]{opacity:1 !important;transform:none !important}`}</style>
        </noscript>
      </head>
      <body className="flex min-h-full flex-col bg-cream">
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
