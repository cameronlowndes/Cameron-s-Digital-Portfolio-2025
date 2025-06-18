"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";

// Dynamically import react-slick
const Slider = dynamic(() => import("react-slick"), { ssr: false });

// Import Slick Carousel styles
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ClientSlider = ({ images }: { images: string[] }) => {
  const [isClient, setIsClient] = useState(false);
  const [fullscreenIndex, setFullscreenIndex] = useState<number | null>(null);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null;

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
  };

  const closeFullscreen = () => setFullscreenIndex(null);

  // Navigate fullscreen images
  const goPrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (fullscreenIndex === null) return;
    setFullscreenIndex((prev) =>
      prev === 0 ? images.length - 1 : (prev ?? 0) - 1
    );
  };

  const goNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (fullscreenIndex === null) return;
    setFullscreenIndex((prev) =>
      prev === images.length - 1 ? 0 : (prev ?? 0) + 1
    );
  };

  return (
    <>
      <div className="mb-4">
        <Slider {...sliderSettings}>
          {images.map((image, index) => (
            <div key={index}>
              <img
                src={image}
                alt={`Project slide ${index + 1}`}
                className="w-full h-64 object-contain rounded-none cursor-pointer"
                onClick={() => setFullscreenIndex(index)}
              />
            </div>
          ))}
        </Slider>
      </div>

      {/* Fullscreen overlay with side navigation */}
      {fullscreenIndex !== null && (
        <div
          className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 cursor-pointer"
          onClick={closeFullscreen}
          aria-modal="true"
          role="dialog"
          tabIndex={-1}
        >
          {/* Prev button */}
          <button
            onClick={goPrev}
            className="absolute left-5 top-1/2 transform -translate-y-1/2 text-white text-4xl font-bold bg-black bg-opacity-50 rounded-full w-12 h-12 flex items-center justify-center hover:bg-opacity-80"
            aria-label="Previous image"
            tabIndex={0}
          >
            &#10094;
          </button>

          {/* Image */}
          <img
            src={images[fullscreenIndex]}
            alt={`Fullscreen project image ${fullscreenIndex + 1}`}
            className="max-w-full max-h-full"
            onClick={(e) => e.stopPropagation()}
          />

          {/* Next button */}
          <button
            onClick={goNext}
            className="absolute right-5 top-1/2 transform -translate-y-1/2 text-white text-4xl font-bold bg-black bg-opacity-50 rounded-full w-12 h-12 flex items-center justify-center hover:bg-opacity-80 cursor-pointer "
            aria-label="Next image"
            tabIndex={0}
          >
            &#10095;
          </button>

          {/* Close button */}
          <button
            onClick={closeFullscreen}
            aria-label="Close fullscreen image"
            className="absolute top-5 right-5 text-white text-3xl font-bold bg-black bg-opacity-50 rounded-full px-3 py-0.5 hover:bg-opacity-80 cursor-pointer"
          >
            &times;
          </button>

        </div>
      )}
    </>
  );
};

export default ClientSlider;
