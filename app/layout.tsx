import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/nav-bar";
import Footer from "@/components/footer";
import WhatsAppFloat from "@/components/whatsapp-float";

const raleway = Raleway({
  variable: "--font-raleway",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Canyoning Malaga",
  description:
    "Experience the thrill of canyoning in Malaga with our expert-guided tours. Explore stunning gorges, waterfalls, and natural pools while enjoying safety and fun.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${raleway.variable} font-sans antialiased`}>
        <Navbar />
        {children}
        <Footer />
        <WhatsAppFloat />
      </body>
    </html>
  );
}
