"use client";

import { useEffect } from "react";

const TrustIndexInfoBanner = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://cdn.trustindex.io/loader.js?50db14f6502b75431896b7778ad";
    script.async = true;
    script.defer = true;

    const container = document.getElementById(
      "trustindex-info-banner-container",
    );
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
    <>
      <div
        id="trustindex-info-banner-container"
        className="inline-block p-0 m-0"
        style={{ padding: 0, margin: 0 }}
      />
      <style>{`
        /* Reset controlado exclusivamente a ti-header y sus hijos inmediatos */
        #trustindex-info-banner-container .ti-header {
          margin: 0 !important;
          padding: 0 !important;
        }

        #trustindex-info-banner-container .ti-header > a {
          padding: 0 !important;
          margin: 0 !important;
        }

        #trustindex-info-banner-container .ti-header .ti-fade-container,
        #trustindex-info-banner-container .ti-header .ti-mob-row {
          margin: 0 !important;
          padding: 0 !important;
        }

        /* Solo en caso de que aparezca un offset de 20 en el widget */
        #trustindex-info-banner-container {
          padding: 0 !important;
          margin: -20px 0 0 0;
        }
      `}</style>
    </>
  );
};

export default TrustIndexInfoBanner;
