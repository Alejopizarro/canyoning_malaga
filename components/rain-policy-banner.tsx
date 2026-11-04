import Link from "next/link";

const RAIN_ARTICLE = "/blog/can-you-go-canyoning-in-the-rain";

// Yellow info box for activity pages, styled like the Safety and Session boxes.
// Links to the rain guide and to the weather policy section inside it.
// No outer margin: the activity page's flex column gap spaces the boxes.
export default function RainPolicyBanner() {
  return (
    <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
      <h3 className="font-semibold text-yellow-800 mb-2">
        🌧️ Rain or Shine, We Go Out
      </h3>
      <p className="text-yellow-700 text-sm">
        We also run activities on rainy days, as long as conditions are safe.
        Find out how rain changes a canyon in our guide{" "}
        <Link
          href={RAIN_ARTICLE}
          title="Can you go canyoning in the rain? Winter guide to Málaga"
          className="font-semibold underline underline-offset-2 hover:text-yellow-900"
        >
          canyoning in the rain
        </Link>
        , and read{" "}
        <Link
          href={`${RAIN_ARTICLE}#if-the-weather-turns`}
          title="TUUR Adventure weather policy: postponement, alternative route or refund"
          className="font-semibold underline underline-offset-2 hover:text-yellow-900"
        >
          TUUR Adventure&apos;s weather policy
        </Link>{" "}
        to see what happens if the weather turns.
      </p>
    </div>
  );
}
