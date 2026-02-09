import React, { useEffect } from "react";
import { FaCheckCircle } from "react-icons/fa";
import { FiClock } from "react-icons/fi";
import AOS from "aos";
import "aos/dist/aos.css";

const data = [
  {
    years: "3+ years",
    company: "Creatify Labs",
    role: "Lead/Senior Product Designer",
    time: "2024 – PRESENT",
    points: [
      "Defined brand voice and identity for startups.",
      "Delivered high-impact brand campaigns.",
      "Delivered high-impact brand campaigns.",
      "Designed presentation frameworks & visual stories.",
    ],
  },
  {
    years: "3+ years",
    company: "Creatify Labs",
    role: "Lead/Senior Product Designer",
    time: "2024 – PRESENT",
    points: [
      "Defined brand voice and identity for startups.",
      "Delivered high-impact brand campaigns.",
      "Delivered high-impact brand campaigns.",
      "Designed presentation frameworks & visual stories.",
    ],
  },
  {
    years: "3+ years",
    company: "Creatify Labs",
    role: "Lead/Senior Product Designer",
    time: "2024 – PRESENT",
    points: [
      "Defined brand voice and identity for startups.",
      "Delivered high-impact brand campaigns.",
      "Delivered high-impact brand campaigns.",
      "Designed presentation frameworks & visual stories.",
    ],
  },
  {
    years: "3+ years",
    company: "Creatify Labs",
    role: "Lead/Senior Product Designer",
    time: "2024 – PRESENT",
    points: [
      "Defined brand voice and identity for startups.",
      "Delivered high-impact brand campaigns.",
      "Delivered high-impact brand campaigns.",
      "Designed presentation frameworks & visual stories.",
    ],
  },
];

function My() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // animation duration in ms
      easing: "ease-in-out",
      once: true, // animation only once
    });
  }, []);

  return (
<div className="w-full max-w-[1280px]   mt-18  mx-auto px-4 ">
<h1 className="text-center font-bold abc text-4xl mb-10">
        My Experience
      </h1>

      {data.map((item, index) => (
        <div
          key={index}
          data-aos="fade-up"
          data-aos-delay={index * 200} // staggered animation
        >
          <div className="relative flex flex-col lg:flex-row gap-10">
            {/* Years */}
            <div className="lg:w-[190px]">
              <p className="w-fit border abc border-black rounded-2xl px-3 -py-1">
                {item.years}
              </p>
            </div>

            {/* Content */}
            <div className="flex-1">
              <h2 className="font-bold  abc text-[24px]">{item.company}</h2>
              <p className="font-medium abc  text-[18px] mb-6">{item.role}</p>

              <ul className="flex flex-col gap-4 text-[16px] abc text-black leading-[24px]">
                {item.points.map((point, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <FaCheckCircle className="text-gray-400 mt-1" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Time */}
          <div className="
          h-[21px] w-[183px]
    flex abc items-center gap-2
    font-normal
    text-[15px] leading-[100%] tracking-[0]
    uppercase
    text-[rgba(0,0,0,0.74)]
    absolute top-0 right-0
    lg:static lg:items-start 
     pt-1
  "
>

              <FiClock  />
              <span>{item.time}</span>
            </div>
          </div>

<hr className="border-t border-gray-400 my-8" />
        </div>
      ))}
    </div>
  );
}

export default My;
