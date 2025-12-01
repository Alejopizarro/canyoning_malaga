"use client";

import { Button } from "@/components/ui/button";
import { easeOut, motion } from "motion/react";
import * as React from "react";
import Image from "next/image";
import { ChartNoAxesColumnIncreasing, Clock, MapPin, Tag } from "lucide-react";

export interface FlipCardData {
  name: string;
  username: string;
  image: string;
  bio: string;
  stats: {
    level: string;
    duration: string;
    ubication: string;
  };
  price: { days: string; cost: string };
}

interface FlipCardProps {
  data: FlipCardData;
}

export function FlipCard({ data }: FlipCardProps) {
  const [isFlipped, setIsFlipped] = React.useState(false);

  const isTouchDevice =
    typeof window !== "undefined" && "ontouchstart" in window;

  const handleClick = () => {
    if (isTouchDevice) setIsFlipped(!isFlipped);
  };

  const handleMouseEnter = () => {
    if (!isTouchDevice) setIsFlipped(true);
  };

  const handleMouseLeave = () => {
    if (!isTouchDevice) setIsFlipped(false);
  };

  const cardVariants = {
    front: { rotateY: 0, transition: { duration: 0.5, ease: easeOut } },
    back: { rotateY: 180, transition: { duration: 0.5, ease: easeOut } },
  };

  return (
    <div
      className="mt-2 relative w-full h-80 md:w-80 md:h-100 perspective-1000 cursor-pointer mx-auto"
      onClick={handleClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* FRONT: Profile */}
      <motion.div
        className="absolute inset-0 backface-hidden rounded-md border-2 border-foreground/20 px-4 py-2 flex flex-col items-center justify-center bg-gradient-to-br from-muted via-background to-muted text-center"
        animate={isFlipped ? "back" : "front"}
        variants={cardVariants}
        style={{ transformStyle: "preserve-3d" }}
      >
        <Image
          src={data.image}
          alt={data.name}
          width={300}
          height={300}
          className="size-45 md:size-60 rounded-full object-cover mb-4 border-2"
        />
        <h2 className="text-2xl font-semibold text-foreground">{data.name}</h2>
        <p className="text-lg text-gray-600">{data.username}</p>
        <p className="text-xs text-gray-400 mt-6">tap here for more</p>
      </motion.div>

      {/* BACK: Bio + Stats + Socials */}
      <motion.div
        className="absolute inset-0 backface-hidden rounded-md border-2 border-foreground/20 px-4 py-6 flex flex-col justify-between items-center gap-y-4 bg-gradient-to-tr from-muted via-background to-muted "
        initial={{ rotateY: 180 }}
        animate={isFlipped ? "front" : "back"}
        variants={cardVariants}
        style={{ transformStyle: "preserve-3d", rotateY: 180 }}
      >
        <p className="text-xs md:text-sm text-muted-foreground text-center">
          {data.bio}
        </p>

        <div className="flex items-center justify-center gap-2 w-full">
          <p className="text-gray-700 text-sm font-semibold bg-gray-100 rounded-lg px-2 py-1">
            <ChartNoAxesColumnIncreasing
              className="inline-flex mr-2"
              color="gray"
              size={10}
            />
            {data.stats.level}
          </p>
          <p className="text-gray-700 text-sm font-semibold bg-gray-100 rounded-lg px-2 py-1">
            <Clock className="inline-flex mr-1" color="gray" size={10} />
            {data.stats.duration}
          </p>
          <p className="text-gray-700 text-sm font-semibold bg-gray-100 rounded-lg px-2 py-1">
            <MapPin className="inline-flex mr-1" color="gray" size={10} />
            {data.stats.ubication}
          </p>
        </div>

        <div className="flex flex-col items-center justify-center">
          <p className="text-md text-muted-foreground mb-2">
            {data.price.days}
          </p>
          <p className="text-4xl font-extrabold text-primary">
            {data.price.cost}
            <Tag className="inline-flex ml-2 text-primary" size={24} />
          </p>
        </div>

        <Button>Book now!</Button>
      </motion.div>
    </div>
  );
}
