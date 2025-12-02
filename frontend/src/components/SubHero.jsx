import React, { useState, useMemo } from "react";
import { aboutimages } from "../assets/assets";
import vid1t from '../assets/pto1.jpg'

const SubHero = () => {
  const media = useMemo(() => Object.values(aboutimages), []);

  const [currentIndex, setCurrentIndex] = useState(0);

  const mainSrc = media[currentIndex];

  const isVideo = (src) => src.endsWith(".mp4");

  return (
    <div className="flex flex-col items-center space-y-4 mt-5 mb-10">
      {/* Main media (video OR image) */}
      <div className="md:w-[60vw] max-w-7xl">
        {isVideo(mainSrc) ? (
          <video
            src={mainSrc}
            className="w-full h-[460px] rounded-lg object-cover"
            autoPlay
            muted
            loop
            controls
          />
        ) : (
          <img
            src={mainSrc}
            alt="Main"
            className="w-full h-[460px] rounded-lg object-cover"
          />
        )}
      </div>

      {/* Thumbnails */}
      <div className="grid grid-cols-4 max-w-3xl gap-2">
        {media.map((src, index) =>
          isVideo(src) ? (
            <video
              key={index}
              src={src}
              poster={vid1t}
              onClick={() => setCurrentIndex(index)}
              className={
                "rounded-lg md:h-20 h-10 md:w-20 w-10 object-cover cursor-pointer border-2 " +
                (index === currentIndex
                  ? "border-yellow-600"
                  : "border-transparent hover:border-yellow-600 hover:opacity-80")
              }
              muted
            />
          ) : (
            <img
              key={index}
              src={src}
              alt={`Thumb ${index + 1}`}
              onClick={() => setCurrentIndex(index)}
              className={
                "rounded-lg md:h-20 h-10 md:w-20 w-10 object-cover cursor-pointer border-2 " +
                (index === currentIndex
                  ? "border-yellow-600"
                  : "border-transparent hover:border-yellow-600 hover:opacity-80")
              }
            />
          )
        )}
      </div>
    </div>
  );
};

export default SubHero;
