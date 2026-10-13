#!/usr/bin/env node
// Checks that collapsible content (accordions, FAQ answers…) is present in the
// HTML the server sends, i.e. without running any JavaScript. Google indexes
// what is in that HTML, so a closed accordion must still contain its text.
//
// Usage:
//   node scripts/check-ssr-content.mjs [--base http://localhost:3000] [--out result.json]
//
// Run it against a production server (`npm run build && npm start`).
// Exits with code 1 if any page fails.

import { readFileSync, writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import path from "node:path";
import { parse } from "node-html-parser";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");

const args = process.argv.slice(2);
const argValue = (name, fallback) => {
  const i = args.indexOf(name);
  return i >= 0 && args[i + 1] ? args[i + 1] : fallback;
};
const BASE = argValue("--base", "http://localhost:3000").replace(/\/$/, "");
const OUT = argValue("--out", null);

// ─── URL list ────────────────────────────────────────────────────────────────
// Built from `excursions` in app/data.ts as `/${categoryPath}/${route}`, the
// same way the Footer builds its links (app/sitemap.ts is incomplete).

function excursionUrls() {
  const src = readFileSync(path.join(ROOT, "app/data.ts"), "utf8");
  const body = src.slice(src.indexOf("export const excursions"));
  const objects = body.split(/\n  \{\r?\n/).slice(1);
  return objects
    .map((obj) => {
      const route = obj.match(/\n {4}route: "([^"]+)"/)?.[1];
      const categoryPath = obj.match(/\n {4}categoryPath: "([^"]+)"/)?.[1];
      return route && categoryPath ? `/${categoryPath}/${route}` : null;
    })
    .filter(Boolean);
}

// Pages that exist but are not listed in `excursions`.
const EXTRA_URLS = [
  "/canyoning/zarzalones",
  "/faqs",
  "/team-building",
  "/summer-camp",
  "/campamento-de-verano",
];

// ─── Known phrases ───────────────────────────────────────────────────────────
// Content that is not a Radix accordion: every FAQ answer on /faqs must be in
// the HTML, including those on pagination pages 2+.

function faqsPageAnswers() {
  const src = readFileSync(path.join(ROOT, "app/(routes)/faqs/page.tsx"), "utf8");
  return [...src.matchAll(/answer:\s*\n?\s*"((?:[^"\\]|\\.)*)"/g)].map((m) =>
    JSON.parse(`"${m[1]}"`),
  );
}

const KNOWN_PHRASES = {
  "/faqs": faqsPageAnswers(),
};

// ─── Checks ──────────────────────────────────────────────────────────────────

const normalize = (s) => s.replace(/\s+/g, " ").trim();
const snippet = (s, n = 60) => normalize(s).slice(0, n);

async function checkUrl(url) {
  const res = await fetch(BASE + url, { redirect: "follow" });
  if (res.status === 404) return { url, status: 404, result: "SKIP", items: [] };
  if (!res.ok) return { url, status: res.status, result: "FAIL", items: [] };

  const root = parse(await res.text());
  root.querySelectorAll("script, style, noscript").forEach((n) => n.remove());
  const pageText = normalize(root.text);
  const items = [];

  // Radix accordions: every trigger points (aria-controls) to its content.
  for (const trigger of root.querySelectorAll('[data-slot="accordion-trigger"]')) {
    const label = snippet(trigger.text, 50);
    const contentId = trigger.getAttribute("aria-controls");
    const content = contentId ? root.getElementById(contentId) : null;
    const chars = content ? normalize(content.text).length : 0;
    items.push({ kind: "accordion", label, chars, ok: chars > 0 });
  }

  for (const phrase of KNOWN_PHRASES[url] ?? []) {
    const ok = pageText.includes(snippet(phrase));
    items.push({ kind: "phrase", label: snippet(phrase, 50), chars: ok ? phrase.length : 0, ok });
  }

  const failed = items.filter((i) => !i.ok).length;
  return {
    url,
    status: res.status,
    result: items.length === 0 ? "N/A" : failed ? "FAIL" : "PASS",
    blocks: items.length,
    failed,
    items,
  };
}

const urls = [...new Set([...excursionUrls(), ...EXTRA_URLS])];
const results = [];
for (const url of urls) results.push(await checkUrl(url));

console.log(`\nSSR collapsible-content check against ${BASE}\n`);
console.log("Result  HTTP  Blocks  Empty  URL");
for (const r of results) {
  console.log(
    `${r.result.padEnd(6)}  ${String(r.status).padEnd(4)}  ${String(r.blocks ?? "-").padStart(6)}  ${String(r.failed ?? "-").padStart(5)}  ${r.url}`,
  );
}
const anyFail = results.some((r) => r.result === "FAIL");
console.log(
  `\n${results.filter((r) => r.result === "PASS").length} pass, ` +
    `${results.filter((r) => r.result === "FAIL").length} fail, ` +
    `${results.filter((r) => r.result === "N/A").length} without collapsible content, ` +
    `${results.filter((r) => r.result === "SKIP").length} not found (404)\n`,
);

if (OUT) {
  writeFileSync(OUT, JSON.stringify({ base: BASE, date: new Date().toISOString(), results }, null, 2));
  console.log(`Saved to ${OUT}`);
}
process.exit(anyFail ? 1 : 0);
