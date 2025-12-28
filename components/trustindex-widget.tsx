"use client";

import { useEffect } from "react";

export default function TrustindexWidget() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://cdn.trustindex.io/loader.js?6fe21d260661856da256193bcca";
    script.async = true;
    script.defer = true;

    const container = document.getElementById("trustindex-container");
    if (container) {
      container.appendChild(script);
    }

    return () => {
      if (container && script.parentNode === container) {
        container.removeChild(script);
      }
    };
  }, []);

  return (
    <section className="max-w-[1440px] mx-auto py-12 sm:py-16 px-4 sm:px-0 sm:pr-8 bg-background">
      <div className="" id="trustindex-container"></div>
    </section>
  );
}
