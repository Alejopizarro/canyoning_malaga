#!/usr/bin/env node
// Validates the sitemap against the running site:
//   - every URL answers 200 without redirecting,
//   - its canonical is exactly the sitemap URL,
//   - it has no `noindex`,
//   - every activity linked from the Footer is in the sitemap.
//
// Usage:
//   node scripts/check-sitemap.mjs [--base http://localhost:3000]
//
// Run it against a production server (`npm run build && npm start`).
// Exits with code 1 if anything is KO.

import { parse } from "node-html-parser";

const args = process.argv.slice(2);
const i = args.indexOf("--base");
const BASE = (i >= 0 && args[i + 1] ? args[i + 1] : "http://localhost:3000").replace(/\/$/, "");

const ACTIVITY_PREFIXES = ["/canyoning/", "/via-ferrata/", "/hiking/", "/activities/"];
const noSlash = (u) => u.replace(/\/$/, "");
const toLocal = (u) => {
  const url = new URL(u);
  return BASE + url.pathname + url.search;
};

const rows = [];
const report = (ok, check, url, detail = "") => rows.push({ ok, check, url, detail });

// ─── Sitemap ─────────────────────────────────────────────────────────────────
const sitemapRes = await fetch(`${BASE}/sitemap.xml`);
if (!sitemapRes.ok) {
  console.error(`Could not read ${BASE}/sitemap.xml (HTTP ${sitemapRes.status})`);
  process.exit(1);
}
const sitemapUrls = [...(await sitemapRes.text()).matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1].trim());

for (const url of sitemapUrls) {
  const res = await fetch(toLocal(url), { redirect: "manual" });
  if (res.status !== 200) {
    const location = res.headers.get("location");
    report(false, "page", url, `HTTP ${res.status}${location ? ` → ${location}` : ""}`);
    continue;
  }
  const doc = parse(await res.text());
  const canonical = doc.querySelector('link[rel="canonical"]')?.getAttribute("href");
  const robots = doc.querySelector('meta[name="robots"]')?.getAttribute("content") ?? "";

  const problems = [];
  if (!canonical) problems.push("no canonical");
  else if (noSlash(canonical) !== noSlash(url)) problems.push(`canonical is ${canonical}`);
  if (/noindex/i.test(robots)) problems.push(`robots: ${robots}`);
  report(problems.length === 0, "page", url, problems.join("; "));
}

// ─── Footer activities ───────────────────────────────────────────────────────
const home = parse(await (await fetch(`${BASE}/`)).text());
const footerPaths = [
  ...new Set(
    home
      .querySelectorAll("footer a[href]")
      .map((a) => a.getAttribute("href"))
      .filter((href) => ACTIVITY_PREFIXES.some((p) => href.startsWith(p))),
  ),
];
const sitemapPaths = new Set(sitemapUrls.map((u) => noSlash(new URL(u).pathname)));

for (const footerPath of footerPaths) {
  if (sitemapPaths.has(noSlash(footerPath))) {
    report(true, "footer", footerPath);
    continue;
  }
  const res = await fetch(BASE + footerPath, { redirect: "manual" });
  report(
    false,
    "footer",
    footerPath,
    res.status === 404 ? "not in sitemap — the Footer links to a page that returns 404" : `not in sitemap (HTTP ${res.status})`,
  );
}

// ─── Output ──────────────────────────────────────────────────────────────────
console.log(`\nSitemap check against ${BASE} — ${sitemapUrls.length} URLs in sitemap\n`);
for (const r of rows) {
  console.log(`${r.ok ? "OK" : "KO"}  ${r.check.padEnd(6)}  ${r.url}${r.detail ? `  (${r.detail})` : ""}`);
}
const ko = rows.filter((r) => !r.ok).length;
console.log(`\n${rows.length - ko} OK, ${ko} KO\n`);
process.exit(ko ? 1 : 0);
