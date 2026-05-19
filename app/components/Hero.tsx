"use client";

import { useEffect, useState } from "react";

const images = [
  {
    src: "/heroimg.jpg",
    description: "mix sjørett",
  },
  {
    src: "/and.jpg",
    description: "And med Rød karri",
  },
  {
    src: "/FingerFood.jpg",
    description: "Fingerfood",
  },
    {
    src: "/Kongereker.jpg",
    description: "Kongereker",
  },
  {
    src: "/Kongbao.jpg",
    description: "Kong Bao med kylling",
  },
  {
    src: "/Kyllingred.jpg",
    description: "Fingerfood",
  },
];

export default function Hero() {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative pt-20">
      <div className="relative mx-auto h-[320px] w-full max-w-[1200px] overflow-hidden sm:h-[420px] border border-white rounded">
      <img
  src={images[currentImage].src}
  alt={images[currentImage].description}
  className="h-full w-full object-cover object-[center_60%] transition-opacity duration-700"
/>

        <div className="absolute inset-0 bg-black/40" />

        <div className="absolute inset-0 flex items-center justify-center px-4 sm:px-6">
          <div className="mx-auto max-w-[500px] text-center">
            <h1  style={{ fontFamily: "var(--font-cormorant)" }}
  className="text-4xl font-semibold text-white">
              Velkommen til LILLETHAI Restaurant
            </h1>

            <p className="mt-3 text-sm leading-relaxed text-on-brand sm:mt-4 sm:text-base">
              Ring og bestill mat på telefon: 63 89 95 00
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}