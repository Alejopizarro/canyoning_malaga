import type { Metadata } from "next";

// The FAQs page is a client component, so its metadata lives here.
export const metadata: Metadata = {
  alternates: {
    canonical: "/faqs",
  },
};

export default function FaqsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
