import React, { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

interface CarouselProps {
  images: string[];
}

const Carousel: React.FC<CarouselProps> = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);

  const handlePrevClick = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNextClick = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="relative w-[300px] h-[250px]">
      <div className="grid grid-cols-1 gap-4">
        {images.map((imageUrl, index) => (
          <img
            key={index}
            className={` 
              absolute w-full h-[250px] object-contain rounded-md mb-2
              opacity-${
                index === currentImageIndex ? "100" : "0"
              } transition-opacity duration-500`}
            src={imageUrl}
            alt={`Image ${index + 1}`}
          />
        ))}
      </div>
      <div className="absolute top-1/2 left-0 transform -translate-y-1/2">
        <FaArrowLeft
          className="text-2xl hover:text-3xl text-gray-500 cursor-pointer hover:text-red-600"
          onClick={handlePrevClick}
        />
      </div>
      <div className="absolute top-1/2 right-0 transform -translate-y-1/2">
        <FaArrowRight
          className="text-2xl hover:text-3xl text-gray-500 cursor-pointer hover:text-red-600"
          onClick={handleNextClick}
        />
      </div>
    </div>
  );
};

export default Carousel;
