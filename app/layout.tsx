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
} from "@/lib/gtm";
import { Suspense } from "react";
import CookieBanner from "@/components/cookie-banner";
import CookieConsentModal from "@/components/ui/cookie-consent-modal";
import CookieSettingsButton from "@/components/ui/cookie-settings-button";

const raleway = Raleway({
  variable: "--font-raleway",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "TUUR Adventure | The Best Experiences in Andalusia",
  description:
    "Discover the best adventure experiences in Andalusia with TUUR Adventure. Explore canyoning, kayaking, and more in Malaga and beyond.",
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
