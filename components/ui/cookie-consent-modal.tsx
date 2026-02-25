"use client";

import { useState, useEffect } from "react";
import { useCookieConsent, CookiePreferences } from "@/context/cookie-context";
import { cookieCategories } from "@/lib/cookie-utils";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronDown, ChevronUp, Shield, Check } from "lucide-react";

export default function CookieConsentModal() {
  const {
    showModal,
    setShowModal,
    preferences,
    savePreferences,
    acceptAll,
    rejectAll,
  } = useCookieConsent();

  const [localPreferences, setLocalPreferences] =
    useState<CookiePreferences>(preferences);
  const [expandedCategories, setExpandedCategories] = useState<string[]>([]);

  // Sincronizar preferencias locales cuando cambian las globales
  useEffect(() => {
    setLocalPreferences(preferences);
  }, [preferences]);

  const toggleCategory = (categoryId: keyof CookiePreferences) => {
    if (categoryId === "necessary") return; // No se puede desactivar

    setLocalPreferences((prev) => ({
      ...prev,
      [categoryId]: !prev[categoryId],
    }));
  };

  const toggleExpanded = (categoryId: string) => {
    setExpandedCategories((prev) =>
      prev.includes(categoryId)
        ? prev.filter((id) => id !== categoryId)
        : [...prev, categoryId],
    );
  };

  const handleSave = () => {
    savePreferences(localPreferences);
  };

  const handleClose = () => {
    setShowModal(false);
    setLocalPreferences(preferences); // Reset to saved preferences
  };

  if (!showModal) return null;

  return (
    <AnimatePresence>
      {showModal && (
        <>
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="fixed inset-0 bg-black/50 z-[9999]"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed inset-4 md:inset-auto md:top-1/2 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2 md:max-w-2xl md:w-full md:max-h-[85vh] bg-white rounded-xl shadow-2xl z-[10000] flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-4 md:p-6 border-b border-gray-200">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-green-100 rounded-lg">
                  <Shield className="w-5 h-5 text-green-600" />
                </div>
                <div>
                  <h2 className="text-lg font-semibold text-gray-900">
                    Cookie Settings
                  </h2>
                  <p className="text-sm text-gray-500">
                    Manage your cookie preferences
                  </p>
                </div>
              </div>
              <button
                onClick={handleClose}
                className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Content */}
            <div className="flex-1 overflow-y-auto p-4 md:p-6">
              <p className="text-gray-600 text-sm mb-6">
                We use cookies to enhance your experience on our website. You
                can choose which categories of cookies you allow. Click on the
                category headers to learn more about each type.
              </p>

              <div className="space-y-3">
                {cookieCategories.map((category) => {
                  const isExpanded = expandedCategories.includes(category.id);
                  const isEnabled = localPreferences[category.id];

                  return (
                    <div
                      key={category.id}
                      className="border border-gray-200 rounded-lg overflow-hidden"
                    >
                      {/* Category Header */}
                      <div className="flex items-center justify-between p-4 bg-gray-50">
                        <button
                          onClick={() => toggleExpanded(category.id)}
                          className="flex items-center gap-3 flex-1 text-left"
                        >
                          {isExpanded ? (
                            <ChevronUp className="w-4 h-4 text-gray-500" />
                          ) : (
                            <ChevronDown className="w-4 h-4 text-gray-500" />
                          )}
                          <div>
                            <span className="font-medium text-gray-900">
                              {category.name}
                            </span>
                            {category.required && (
                              <span className="ml-2 text-xs text-green-600 font-medium">
                                Always Active
                              </span>
                            )}
                          </div>
                        </button>

                        {/* Toggle Switch */}
                        <button
                          onClick={() =>
                            toggleCategory(
                              category.id as keyof CookiePreferences,
                            )
                          }
                          disabled={category.required}
                          className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                            category.required
                              ? "bg-green-600 cursor-not-allowed"
                              : isEnabled
                                ? "bg-green-600"
                                : "bg-gray-300"
                          }`}
                        >
                          <span
                            className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                              isEnabled ? "translate-x-6" : "translate-x-1"
                            }`}
                          />
                        </button>
                      </div>

                      {/* Category Details (Expandable) */}
                      <AnimatePresence>
                        {isExpanded && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="overflow-hidden"
                          >
                            <div className="p-4 border-t border-gray-200 bg-white">
                              <p className="text-sm text-gray-600 mb-4">
                                {category.description}
                              </p>

                              {category.cookies.length > 0 && (
                                <div className="space-y-2">
                                  <p className="text-xs font-medium text-gray-500 uppercase tracking-wide">
                                    Cookies used:
                                  </p>
                                  <div className="bg-gray-50 rounded-lg overflow-hidden">
                                    <table className="w-full text-xs">
                                      <thead>
                                        <tr className="border-b border-gray-200">
                                          <th className="text-left p-2 font-medium text-gray-600">
                                            Name
                                          </th>
                                          <th className="text-left p-2 font-medium text-gray-600">
                                            Provider
                                          </th>
                                          <th className="text-left p-2 font-medium text-gray-600 hidden sm:table-cell">
                                            Expiry
                                          </th>
                                        </tr>
                                      </thead>
                                      <tbody>
                                        {category.cookies.map(
                                          (cookie, index) => (
                                            <tr
                                              key={index}
                                              className="border-b border-gray-100 last:border-0"
                                            >
                                              <td className="p-2 text-gray-700 font-mono">
                                                {cookie.name}
                                              </td>
                                              <td className="p-2 text-gray-600">
                                                {cookie.provider}
                                              </td>
                                              <td className="p-2 text-gray-600 hidden sm:table-cell">
                                                {cookie.expiry}
                                              </td>
                                            </tr>
                                          ),
                                        )}
                                      </tbody>
                                    </table>
                                  </div>
                                </div>
                              )}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Footer */}
            <div className="flex flex-col sm:flex-row gap-2 p-4 md:p-6 border-t border-gray-200 bg-gray-50">
              <button
                onClick={rejectAll}
                className="flex-1 px-4 py-2.5 text-sm font-medium text-gray-700 border border-gray-300 hover:bg-gray-100 rounded-lg transition-colors"
              >
                Reject All
              </button>
              <button
                onClick={handleSave}
                className="flex-1 px-4 py-2.5 text-sm font-medium text-white bg-green-600 hover:bg-green-700 rounded-lg transition-colors flex items-center justify-center gap-2"
              >
                <Check className="w-4 h-4" />
                Save Preferences
              </button>
              <button
                onClick={acceptAll}
                className="flex-1 px-4 py-2.5 text-sm font-medium text-green-700 bg-green-100 hover:bg-green-200 rounded-lg transition-colors"
              >
                Accept All
              </button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
