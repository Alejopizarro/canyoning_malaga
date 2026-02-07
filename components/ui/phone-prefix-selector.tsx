"use client";

import { useState, useRef, useEffect } from "react";
import { ChevronDown, Search } from "lucide-react";
import { cn } from "@/lib/utils";

const phonePrefixes = [
  { code: "+34", country: "Spain" },
  { code: "+44", country: "United Kingdom" },
  { code: "+33", country: "France" },
  { code: "+49", country: "Germany" },
  { code: "+39", country: "Italy" },
  { code: "+351", country: "Portugal" },
  { code: "+31", country: "Netherlands" },
  { code: "+32", country: "Belgium" },
  { code: "+41", country: "Switzerland" },
  { code: "+43", country: "Austria" },
  { code: "+45", country: "Denmark" },
  { code: "+46", country: "Sweden" },
  { code: "+47", country: "Norway" },
  { code: "+48", country: "Poland" },
  { code: "+353", country: "Ireland" },
  { code: "+358", country: "Finland" },
  { code: "+30", country: "Greece" },
  { code: "+420", country: "Czech Republic" },
  { code: "+36", country: "Hungary" },
  { code: "+40", country: "Romania" },
  { code: "+1", country: "United States" },
  { code: "+1", country: "Canada" },
  { code: "+52", country: "Mexico" },
  { code: "+55", country: "Brazil" },
  { code: "+54", country: "Argentina" },
  { code: "+56", country: "Chile" },
  { code: "+57", country: "Colombia" },
  { code: "+61", country: "Australia" },
  { code: "+81", country: "Japan" },
  { code: "+82", country: "South Korea" },
  { code: "+86", country: "China" },
  { code: "+91", country: "India" },
  { code: "+971", country: "UAE" },
  { code: "+966", country: "Saudi Arabia" },
  { code: "+27", country: "South Africa" },
  { code: "+212", country: "Morocco" },
];

interface PhonePrefixSelectorProps {
  value: string;
  onChange: (value: string) => void;
}

export function PhonePrefixSelector({
  value,
  onChange,
}: PhonePrefixSelectorProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState("");
  const containerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(e.target as Node)
      ) {
        setIsOpen(false);
        setSearch("");
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  const selected = phonePrefixes.find((p) => p.code === value);

  const filtered = phonePrefixes.filter((p) => {
    const q = search.toLowerCase().replace("+", "");
    return (
      p.country.toLowerCase().includes(q) || p.code.replace("+", "").includes(q)
    );
  });

  return (
    <div ref={containerRef} className="relative">
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          "border-input flex h-9 w-full items-center justify-between rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none md:text-sm",
          "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
          "text-muted-foreground"
        )}
      >
        <span className="truncate text-left">
          {selected ? `${selected.country} (${selected.code})` : value}
        </span>
        <ChevronDown className="ml-1 size-4 shrink-0 opacity-50" />
      </button>

      {isOpen && (
        <div className="absolute z-50 mt-1 w-full min-w-[260px] rounded-md border bg-white shadow-lg">
          <div className="flex items-center border-b px-3 py-2">
            <Search className="mr-2 size-4 shrink-0 opacity-50" />
            <input
              ref={inputRef}
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search country or code..."
              className="w-full bg-transparent text-sm outline-none placeholder:text-muted-foreground"
            />
          </div>
          <div className="max-h-[220px] overflow-y-auto p-1">
            {filtered.length === 0 && (
              <p className="px-3 py-2 text-sm text-muted-foreground">
                No results found.
              </p>
            )}
            {filtered.map((prefix) => (
              <button
                key={`${prefix.code}-${prefix.country}`}
                type="button"
                onClick={() => {
                  onChange(prefix.code);
                  setIsOpen(false);
                  setSearch("");
                }}
                className={cn(
                  "flex w-full items-center justify-between rounded-sm px-3 py-2 text-sm hover:bg-accent cursor-pointer",
                  value === prefix.code && "bg-accent"
                )}
              >
                <span>{prefix.country}</span>
                <span className="text-muted-foreground">{prefix.code}</span>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
