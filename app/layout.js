import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import SiteHeader from "@/components/layout/site-header";
import SiteFooter from "@/components/layout/site-footer";
import { Providers } from "./providers";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Pancatiara Sentrausaha - Managemen Gedung Profesional",
  keywords: [
    "manajemen gedung",
    "layanan profesional",
    "pemeliharaan gedung",
    "keamanan gedung",
    "dukungan teknis",
    "layanan kebersihan",
  ],
  description: "PT Pancatiara Sentrausaha adalah perusahaan yang bergerak di bidang manajemen gedung profesional dengan kualitas yang terjaga dan terpercaya, yang telah mendapatkan Sertifikat Management Mutu ISO 9001 : 2015",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-200  `}
      >
        <Providers>
            <SiteHeader />
            <main className="min-h-screen pt-12">{children}</main>
            <SiteFooter />
        </Providers>        
      </body>
    </html>
  );
}
