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
      className="card group flex-shrink-0 flex flex-col rounded-[8px] bg-[#F4F6FF] shadow-[0_4px_0_0_#0033FF] p-4 mt-[30px] relative
                 w-[90vw] sm:w-[364px] h-[203px] sm:h-[206px]"
    >
      <div className="flex flex-col gap-2 pt-3 pl-3">
       <h2 className="text-black/80 abc font-semibold capitalize text-[32px] leading-[44.8px] tracking-normal">
  300%+
</h2>
   <p className="abc  text-black/80 font-medium capitalize text-[20px] leading-[28px] tracking-normal">
  Business Growth
</p>
<p className="abc font-normal capitalize text-[16px] leading-[22.4px] tracking-normal text-black/80">
  Scaled company operations and revenue through strategic decision-making and long-term planning.
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
        className="slider flex gap-4 sm:gap-[30px]"
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
