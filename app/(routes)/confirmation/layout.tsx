import type { Metadata } from "next";

// Post-booking thank-you page: keep it out of search results.
// The page is a client component, so its metadata lives here.
export const metadata: Metadata = {
  robots: {
    index: false,
    follow: true,
  },
};

export default function ConfirmationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
