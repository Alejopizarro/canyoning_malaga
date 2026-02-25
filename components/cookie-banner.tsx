"use client";

import { useCookieConsent } from "@/context/cookie-context";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

export default function CookieBanner() {
  const { showBanner, acceptAll, rejectAll, openSettings, isLoading } =
    useCookieConsent();

  // No mostrar nada mientras carga o si no debe mostrarse
  if (isLoading || !showBanner) return null;

  return (
    <AnimatePresence>
      {showBanner && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className="fixed bottom-0 left-0 right-0 z-[9999] p-4 md:p-6"
        >
          <div className="max-w-7xl mx-auto">
            <div className="bg-white rounded-xl shadow-2xl border border-gray-200 p-4 md:p-6">
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                {/* Texto */}
                <div className="flex-1">
                  <div className="flex items-start gap-3">
                    <span className="text-2xl">🍪</span>
                    <div>
                      <h3 className="font-semibold text-gray-900 text-lg">
                        We value your privacy
                      </h3>
                      <p className="text-gray-600 text-sm mt-1 max-w-2xl">
                        We use cookies to enhance your browsing experience,
                        serve personalized content, and analyze our traffic. By
                        clicking &quot;Accept All&quot;, you consent to our use
                        of cookies.{" "}
                        <Link
                          href="/cookie-policy"
                          className="text-green-600 hover:text-green-700 underline"
                        >
                          Learn more
                        </Link>
                      </p>
                    </div>
                  </div>
                </div>

                {/* Botones */}
                <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 lg:flex-shrink-0">
                  <button
                    onClick={openSettings}
                    className="px-4 py-2.5 text-sm font-medium text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors order-3 sm:order-1"
                  >
                    Customize
                  </button>
                  <button
                    onClick={rejectAll}
                    className="px-4 py-2.5 text-sm font-medium text-gray-700 border border-gray-300 hover:bg-gray-50 rounded-lg transition-colors order-2"
                  >
                    Reject All
                  </button>
                  <button
                    onClick={acceptAll}
                    className="px-6 py-2.5 text-sm font-medium text-white bg-green-600 hover:bg-green-700 rounded-lg transition-colors order-1 sm:order-3"
                  >
                    Accept All
                  </button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
