import React, { useState, useEffect, useRef } from "react";
import icon from "./icon.png";

function Autocard() {
  const [pause, setPause] = useState(false);
  const sliderRef = useRef(null);
  const speed = 0.5; // pixels per frame
  const [offset, setOffset] = useState(0);

  const cards = [...Array(3)].map((_, i) => (
    <div
      key={i}
      className="card group w-[366px] flex-shrink-0 flex flex-col rounded-[8px] bg-[#F4F6FF] shadow-[0_4px_0_0_#0033FF] p-4 mt-[30px] relative"
    >
      <div className="flex flex-col gap-4">
        <img src={icon} alt="icon" className="w-[20px] h-[20px]" />
        <h2 className="text-black font-semibold abc text-[24px] leading-none">
          Strategic Leadership
        </h2>
        <p className="text-black abc text-sm">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
      </div>

      {/* Optional arrow */}
      <div className="absolute top-1/2 right-4 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer">
        ➡️
      </div>
    </div>
  ));

  useEffect(() => {
    let animationFrame;

    const animate = () => {
      if (!pause && sliderRef.current) {
        const sliderWidth = sliderRef.current.scrollWidth / 2;
        setOffset(prev => {
          const next = prev + speed;
          return next >= sliderWidth ? 0 : next;
        });
      }
      animationFrame = requestAnimationFrame(animate);
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [pause]);

  return (
    <div
      className="w-full max-w-[1440px] mx-auto py-6 overflow-hidden"
      onMouseEnter={() => setPause(true)}
      onMouseLeave={() => setPause(false)}
    >
      <div
        className="slider flex gap-[30px]"
        ref={sliderRef}
        style={{
          transform: `translateX(-${offset}px)`,
          transition: "transform 0.1s linear",
        }}
      >
        {/* Duplicate cards for infinite scroll */}
        {cards}
        {cards}
      </div>
    </div>
  );
}

export default Autocard;
