import React from "react";
import icon from "../component/icon.png";

const Autoslider = () => {
  const renderCards = (offset = 0) =>
    [...Array(3)].map((_, i) => (
      <div
        key={i + offset}
        className="flex-shrink-0 w-[366px] h-[265px] mx-auto
                   flex flex-col rounded-[8px] bg-[#F4F6FF] shadow-[0_4px_0_0_#0033FF]
                   p-[14px_23px_14px_23px] gap-[15px] card"
      >
        <div className="flex flex-col gap-[15px]">
          <img src={icon} alt="icon" className="w-[40px] h-[40px] mt-6" />

          <h2 className="text-black font-semibold text-[24px] leading-none">
            Strategic Leadership
          </h2>

          <p className="mt-2 text-black text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Loreamque, expedita. Lorem ipsum dolor sit amet consectetur adipisicing elit. Loreamque, expedita.
          </p>
        </div>
      </div>
    ));

  return (
    <div className="w-full flex justify-center py-6 overflow-hidden">
      {/* Parent container with fixed max-width */}
      <div className="w-full max-w-[1440px] px-4">
        {/* Slider track */}
        <div className="flex gap-6 sm:gap-8 md:gap-10 animate-slide slider-track">
          {renderCards(0)}
          {renderCards(100)}
        </div>
      </div>

      {/* Animation */}
      <style>
        {`
          @keyframes slide {
            from {
              transform: translateX(0);
            }
            to {
              transform: translateX(-50%);
            }
          }

          .slider-track {
            width: max-content;
            animation: slide 14s linear infinite;
          }

          /* Pause animation when hovering over any card */
          .slider-track:hover {
            animation-play-state: paused;
          }
        `}
      </style>
    </div>
  );
};

export default Autoslider;
