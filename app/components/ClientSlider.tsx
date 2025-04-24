"use client"; // Ensures that this file is a client-side component

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";

// Dynamically import Slider for client-side only
const Slider = dynamic(() => import("react-slick"), { ssr: false });

// Make sure to import Slick Carousel's CSS
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ClientSlider = ({ images }: { images: string[] }) => {
  // Use state to ensure component renders after client-side is initialized
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    // After mounting, enable client-side rendering
    setIsClient(true);
  }, []);

  if (!isClient) {
    // Return null or a loading state if client-side isn't ready
    return null;
  }

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="mb-4">
      <Slider {...sliderSettings}>
        {images.map((image, index) => (
          <div key={index}>
            <img
              src={image}
              alt={`Project slide ${index + 1}`}
              className="w-full h-64 object-cover rounded-lg"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ClientSlider;
