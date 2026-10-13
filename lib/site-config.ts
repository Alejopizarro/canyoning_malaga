// Single source of truth for contact details and social profiles.
// Anything that shows or links to these (UI, JSON-LD, metadata) should read from here.

export type SocialNetwork = "instagram" | "facebook" | "youtube";

export interface SiteAddress {
  street: string;
  locality: string;
  region: string;
  postalCode: string;
  country: string;
}

export interface SiteConfig {
  name: string;
  /** Canonical origin, no trailing slash. */
  url: string;
  email: string;
  /** E.164 format, e.g. +34699199158 */
  phone: string;
  /** Human-readable phone, e.g. +34 699 199 158 */
  phoneDisplay: string;
  address: SiteAddress;
  /** Only include networks that actually exist. Missing ones are not rendered. */
  social: Partial<Record<SocialNetwork, string>>;
}

export const siteConfig: SiteConfig = {
  name: "TUUR Adventure",
  url: "https://www.tuuradventure.com",
  email: "tuurcanyoning@gmail.com",
  phone: "+34699199158",
  phoneDisplay: "+34 699 199 158",
  address: {
    street: "C. San Javier Nº 16 4-B",
    locality: "San Pedro de Alcántara",
    region: "Málaga",
    postalCode: "29670",
    country: "ES",
  },
  social: {
    facebook: "https://www.facebook.com/TUUR.Canyoning",
    instagram: "https://www.instagram.com/tuur_canyoning/",
    youtube: "https://www.youtube.com/@tuuradventureexperts7171",
  },
};

// ─── Derived helpers ──────────────────────────────────────────────────────────

export const socialLabels: Record<SocialNetwork, string> = {
  instagram: "Instagram",
  facebook: "Facebook",
  youtube: "YouTube",
};

export const telHref = `tel:${siteConfig.phone}`;
export const mailtoHref = `mailto:${siteConfig.email}`;
export const whatsappUrl = `https://wa.me/${siteConfig.phone.replace(/^\+/, "")}`;

/** Short address for UI, e.g. "C. San Javier Nº 16 4-B, San Pedro de Alcántara, Málaga" */
export const addressDisplay = `${siteConfig.address.street}, ${siteConfig.address.locality}, ${siteConfig.address.region}`;

/** Defined social profile URLs, for JSON-LD `sameAs`. */
export const socialUrls = Object.values(siteConfig.social).filter(
  (url): url is string => Boolean(url),
);

/** Defined social networks with their URL, in config order. */
export const socialLinks = (
  Object.entries(siteConfig.social) as [SocialNetwork, string | undefined][]
)
  .filter((entry): entry is [SocialNetwork, string] => Boolean(entry[1]))
  .map(([network, url]) => ({ network, url, label: socialLabels[network] }));

/** schema.org PostalAddress built from the config. */
export const jsonLdPostalAddress = {
  "@type": "PostalAddress",
  streetAddress: siteConfig.address.street,
  addressLocality: siteConfig.address.locality,
  addressRegion: siteConfig.address.region,
  postalCode: siteConfig.address.postalCode,
  addressCountry: siteConfig.address.country,
};
