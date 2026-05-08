"use client";

import { useState } from "react";

export type SeoTab = {
  id: string;
  label: string;
  h3: string;
  paragraphs: string[];
};

type SeoContentTabsProps = {
  tabs: SeoTab[];
};

export default function SeoContentTabs({ tabs }: SeoContentTabsProps) {
  const [activeTabId, setActiveTabId] = useState<string | null>(null);

  return (
    <div className="max-w-[1440px] sm:px-16 py-10 px-4">
      <div className="flex gap-6 border-b border-gray-200 mb-6">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() =>
              setActiveTabId(activeTabId === tab.id ? null : tab.id)
            }
            className={
              activeTabId === tab.id
                ? "pb-2 text-sm font-semibold text-gray-900 border-b-2 border-gray-900 -mb-px"
                : "pb-2 text-sm font-normal text-gray-400 hover:text-gray-600 transition-colors"
            }
          >
            <h2 className="text-sm">{tab.label}</h2>
          </button>
        ))}
      </div>

      {tabs.map((tab) =>
        activeTabId === tab.id ? (
          <div key={tab.id} className="prose prose-sm max-w-none text-gray-600">
            <h3 className="sr-only">{tab.h3}</h3>
            {tab.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        ) : null,
      )}
    </div>
  );
}
