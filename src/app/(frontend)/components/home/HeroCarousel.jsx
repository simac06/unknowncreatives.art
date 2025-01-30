"use client";
import { useState, useEffect } from "react";
import Flickity from "react-flickity-component";
import HeroCarouselCard from "./HeroCarouselCard";
import "flickity/css/flickity.css";

const cards = [
  { id: 1, title: "First Card" },
  { id: 2, title: "Second Card" },
  { id: 3, title: "Third Card" },
  { id: 4, title: "Fourth Card" },
];

export default function HeroCarousel() {
  const [isLoading, setIsLoading] = useState(true);
  const [isVisible, setIsVisible] = useState(false);

  const flickityOptions = {
    wrapAround: true,
    pageDots: false,
    prevNextButtons: false,
    cellAlign: "center",
    contain: true,
    draggable: true,
    adaptiveHeight: true,
    selectedAttraction: 0.2,
    friction: 0.8,
    initialIndex: 1,
    autoPlay: true,
    groupCells: true,
  };

  useEffect(() => {
    setIsLoading(false);
    // Add a small delay before showing content to prevent layout shift
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="w-full h-full relative">
      {/* Add a container with fixed dimensions */}
      <div
        className={`w-full h-full relative overflow-clip transition-opacity duration-500 ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
        style={{ visibility: isLoading ? "hidden" : "visible" }}
      >
        <Flickity
          className="w-full h-full "
          options={flickityOptions}
          disableImagesLoaded={false}
          reloadOnUpdate
          static
        >
          {cards.map((card) => (
            <div key={card.id} className="w-2/3  py-6 bg h-full px-4">
              <HeroCarouselCard />
            </div>
          ))}
        </Flickity>
      </div>
    </div>
  );
}
