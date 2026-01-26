// components/home/HeroParallaxSection.tsx
"use client";

import BackgroundLayer from "./background-layer";
import CloudBottomLayer from "./cloud-bottom-layer";
import CloudLeftLayer from "./cloud-left-layer";
import CloudRightLayer from "./cloud-right-layer";
import PeopleLayer from "./people-layer";
import RockGradientLayer from "./rock-gradient-layer";
import TextLayer from "./text-layer";

export default function HeroParallaxSection() {
  return (
    <section className="parallax-container relative h-[150vh] md:h-[200vh] w-full">
      <div className="sticky top-0 h-screen w-full overflow-hidden bg-black">
        <BackgroundLayer />
        <TextLayer />
        <PeopleLayer />
        <RockGradientLayer />
        <CloudRightLayer />
        <CloudLeftLayer />
        <CloudBottomLayer />
      </div>
    </section>
  );
}
