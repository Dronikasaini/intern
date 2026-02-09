import React from "react";
import { useNavigate } from "react-router-dom";
import Image1 from "../component/image1.png";
import Image2 from "../component/image2.png";
import Image3 from "../component/image3.png";
import Image4 from "../component/image4.png";
import { HiArrowUpRight } from "react-icons/hi2";

const Img = () => {
  const navigate = useNavigate();

  const images = [Image1, Image2, Image3, Image4];

  const texts = [
    "Development",
    "Development",
    "Digital Transformation",
    "Business Strategy",
  ];

  const overlayTexts = [
    "MetaView3D",
    "NovaDashboard",
    "DigitalFlow",
    "StrategyLab",
  ];

  return (
    <div className="pt-4 overflow-hidden">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-20 md:gap-8 w-screen -mx-4 md:w-auto md:mx-0">
        {images.map((src, idx) => (
          <div
            key={idx}
            className="
              flex flex-col items-start
              w-full
              md:max-w-[644px]
              h-[350px] md:h-[666px]
              mx-auto
              relative group
            "
          >
            {/* TOP TEXT */}
            <p className="mb-2 text-black text-lg px-4 abc md:px-0 pb-1 md:pb-0">
              {texts[idx]}
            </p>

            {/* IMAGE + OVERLAY */}
            <div
              className="relative w-full h-full cursor-pointer"
              onClick={() => navigate("/page3")}
            >
              <img
                src={src}
                alt={`Image ${idx + 1}`}
                className="w-full h-full object-cover"
              />

              {/* HOVER OVERLAY */}
              <div
                className="
                  absolute inset-0
                  bg-black/60
                  opacity-0 group-hover:opacity-100
                  transition-opacity duration-200
                  flex justify-center items-center
                  p-6
                "
              >
                <p className="text-white text-[32px] whitespace-nowrap  abc leading-6 flex items-center gap-2">
                  {overlayTexts[idx]}
                  <HiArrowUpRight />
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Img;
