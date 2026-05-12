import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/nav-bar";
import Footer from "@/components/footer";
import WhatsAppFloat from "@/components/whatsapp-float";
import { CookieProvider } from "@/context/cookie-context";
import GoogleTagManager, {
  GoogleTagManagerNoScript,
  GTMPageViewTracker,
  BokunTracker,
} from "@/lib/gtm";
import { Suspense } from "react";
import CookieBanner from "@/components/cookie-banner";
import CookieConsentModal from "@/components/ui/cookie-consent-modal";
import CookieSettingsButton from "@/components/ui/cookie-settings-button";
import BannerTop from "@/components/ui/banner-top";

const raleway = Raleway({
  variable: "--font-raleway",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Canyoning & More Adventures in Marbella, Málaga & Andalusia",
  description:
    "Discover the best adventures tours in Marbella, Málaga & Andalusia with TUUR Adventure. Explore canyoning, kayaking, and more.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${raleway.variable} font-sans antialiased`}>
        <CookieProvider>
          <GoogleTagManager />
          <GoogleTagManagerNoScript />
          <Suspense fallback={null}>
            <GTMPageViewTracker />
          </Suspense>
          <BokunTracker />
          <BannerTop />
          <Navbar />
          {children}
          <Footer />
          <WhatsAppFloat />
          <CookieBanner />
          <CookieConsentModal />
          <CookieSettingsButton />
        </CookieProvider>
      </body>
    </html>
  );
}
