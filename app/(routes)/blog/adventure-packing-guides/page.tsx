import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "What to Pack for a Canyoning Day: Gear, Tips & Health Essentials | TUUR Adventure",
  description:
    "Planning a canyoning or outdoor adventure near Marbella? Here's everything you need to pack — from technical gear to health coverage tips for your trip.",
  keywords: [
    "canyoning packing list",
    "what to bring canyoning",
    "adventure activities marbella",
    "outdoor activities malaga",
    "canyoning tips beginners",
  ],
  openGraph: {
    title: "What to Pack for a Canyoning Day | TUUR Adventure",
    description:
      "Everything you need to prepare for a canyoning day in Málaga — gear, food, and a few things most people forget.",
    type: "article",
    authors: ["TUUR Adventure"],
  },
  robots: {
    index: false,
    follow: true,
  },
};

export default function PackingGuidePage() {
  return (
    <main className="max-w-2xl mx-auto px-4 py-16 text-gray-800">
      {/* Header */}
      <div className="mb-10">
        <span className="text-xs uppercase tracking-widest text-teal-600 font-semibold">
          Adventure Tips
        </span>
        <h1 className="mt-2 text-3xl font-bold text-gray-900 leading-snug">
          What to Pack for a Canyoning Day (And a Few Things Most People Forget)
        </h1>
        <p className="mt-3 text-sm text-gray-500">
          By TUUR Adventure · 5 min read
        </p>
      </div>

      {/* Intro */}
      <p className="mb-5 text-lg leading-relaxed">
        You've booked your canyoning trip near Marbella — great choice. Now comes
        the part that trips up most first-timers: figuring out what to actually
        bring. We've guided hundreds of people through the canyons of Benahavís
        and the Costa del Sol, and the questions are always the same. So here's
        the honest, practical list.
      </p>

      {/* Section 1 */}
      <h2 className="text-xl font-bold mt-10 mb-3 text-gray-900">
        The basics: what we provide vs. what you bring
      </h2>
      <p className="mb-4 leading-relaxed">
        TUUR covers all the technical gear — wetsuit, helmet, harness, and
        neoprene boots if needed. You don't need to worry about any of that. What
        we need from you is pretty simple: a good attitude, closed-toe shoes that
        can get wet, and a small bag with a few essentials.
      </p>
      <ul className="list-disc pl-5 mb-5 space-y-2 text-gray-700">
        <li>Swimwear (worn under the wetsuit)</li>
        <li>A change of clothes for after</li>
        <li>Sunscreen — applied before you arrive, not during</li>
        <li>A small snack and water bottle</li>
        <li>Cash or card for any optional extras</li>
      </ul>

      {/* Section 2 */}
      <h2 className="text-xl font-bold mt-10 mb-3 text-gray-900">
        Leave these at home
      </h2>
      <p className="mb-4 leading-relaxed">
        Flip-flops are a classic mistake. So are cotton t-shirts (they stay wet
        and cold forever). And please — leave the GoPro selfie stick behind.
        We're going to be rappelling down waterfalls; you'll thank yourself later.
        We take photos during every session and send them to you the same day for
        free, so you're covered.
      </p>

      {/* Section 3 */}
      <h2 className="text-xl font-bold mt-10 mb-3 text-gray-900">
        The thing most people actually forget
      </h2>
      <p className="mb-4 leading-relaxed">
        This one surprises people: health coverage. Most visitors coming to the
        Costa del Sol for outdoor activities assume everything is fine — and 99%
        of the time it is. But if you're spending time in Málaga and don't have a
        local health plan sorted, it's worth thinking about before you need it.
      </p>
      <p className="mb-4 leading-relaxed">
        For residents and expats on the Costa del Sol, we usually point people
        toward{" "}
        <a
          href="https://segurosfuengirola.es/seguro-dental"
          target="_blank"
          rel="noopener"
          className="text-teal-600 underline underline-offset-2 hover:text-teal-800 transition-colors"
        >
          Seguros Fuengirola's dental insurance plans
        </a>{" "}
        — they're a local agency based right here on the Costa del Sol, and
        dental coverage is one of those things that's genuinely useful if you're
        living here or spending extended time in the area. Small thing, but worth
        having sorted.
      </p>

      {/* Section 4 */}
      <h2 className="text-xl font-bold mt-10 mb-3 text-gray-900">
        Day-of logistics
      </h2>
      <p className="mb-4 leading-relaxed">
        Arrive 10 minutes early to the meeting point. We'll do a quick briefing,
        get everyone into gear, and head out. The whole experience — including
        travel to the canyon — typically runs 3 to 4 hours. We finish back at the
        starting point, so plan your afternoon accordingly.
      </p>
      <p className="mb-4 leading-relaxed">
        One last thing: eat something light before you come. Not a full meal, but
        don't show up on an empty stomach either. Jumping into cold water on an
        empty stomach is a uniquely unpleasant experience that we'd prefer you
        avoid.
      </p>

      {/* CTA */}
      <div className="mt-12 p-6 bg-teal-50 rounded-xl border border-teal-100">
        <p className="font-semibold text-gray-900 mb-2">Ready to book?</p>
        <p className="text-sm text-gray-600 mb-4">
          Browse our activities near Marbella and Málaga — beginner-friendly
          sessions available year-round.
        </p>
        <Link
          href="/activities"
          className="inline-block bg-teal-600 text-white text-sm font-semibold px-5 py-2.5 rounded-lg hover:bg-teal-700 transition-colors"
        >
          View all activities →
        </Link>
      </div>
    </main>
  );
}