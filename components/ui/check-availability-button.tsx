"use client";

import { useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Calendar } from "lucide-react";

export default function CheckAvailabilityButton() {
  const bokunRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    bokunRef.current = document.getElementById("bokun-section");
  }, []);

  const scrollToBokun = () => {
    bokunRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <Button
      onClick={scrollToBokun}
      size="lg"
      className="flex items-center justify-center text-xl font-semibold w-full md:hidden"
    >
      Check Availability{" "}
      <Calendar size={25} className="ml-1.5" strokeWidth={2.5} />
    </Button>
  );
}
