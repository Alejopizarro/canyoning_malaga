"use client";
import Image from "next/image";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";

const benefits = [
  {
    icon: (
      <svg
        className="w-16 h-16 lg:w-8 lg:h-8 text-primary"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
        />
      </svg>
    ),
    title: "Certified Experts",
    description:
      "All our guides are officially certified and trained to the highest safety standards in outdoor adventure.",
  },
  {
    icon: (
      <svg
        className="w-16 h-16 lg:w-8 lg:h-8 text-primary"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
        />
      </svg>
    ),
    title: "Smaller Groups, Better Experience",
    description:
      "We keep our groups small so you enjoy more attention, better safety, and a real connection with nature.",
  },
  {
    icon: (
      <svg
        className="w-16 h-16 lg:w-8 lg:h-8 text-primary"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
        />
      </svg>
    ),
    title: "Top-Rated for a Reason",
    description:
      "2,000+ glowing reviews and a 4.9/5 rating speak for themselves.",
  },
];

export default function WhyChoose() {
  const router = useRouter();

  return (
    <section className="relative z-20 bg-background">
      <div className="max-w-[1440px] py-16 sm:py-24 px-4 sm:px-8 mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Right - Content */}
          <div className="order-2 text-center lg:text-left">
            <p className="text-primary font-medium mb-2">Our Company</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              Why Choose Us?
            </h2>
            <p className="text-gray-600 leading-relaxed mb-8">
              We believe that a great adventure starts with great people. With
              over 10 years of experience and thousands of happy adventurers, we
              offer more than just a tour — we deliver a safe, personal, and
              unforgettable canyoning experience in the most stunning spots in
              southern Spain.
            </p>

            {/* Benefits List */}
            <div className="space-y-6">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center lg:flex-row lg:items-start gap-4"
                >
                  <div className="flex-shrink-0 mt-1 flex items-center justify-center">
                    {benefit.icon}
                  </div>
                  <div>
                    <h4 className="font-bold text-2xl text-gray-900 mb-1">
                      {benefit.title}
                    </h4>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <Button
              className="mt-8"
              size="lg"
              onClick={() => router.push("/about-us")}
            >
              About Us
            </Button>
          </div>
          <div className="relative w-full max-w-[616px] aspect-square mx-auto lg:mx-0 order-1">
            {/* Background Image */}
            <Image
              src="/trip-advisor.webp"
              alt="TripAdvisor Travellers Choice Awards 2024"
              fill
              className="w-full rounded-2xl object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
