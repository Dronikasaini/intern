import React from "react";
import line from "../component/line.png";
import Dir from "../component/Director.png";

function Director() {
  return (
    <div className="relative w-full max-w-[1280px] mx-auto min-h-[784px]  overflow-hidden">

<div className="absolute top-1/2 left-0 -translate-y-[60%] hidden md:flex flex-col items-center">
  <img src={line} alt="Decorative Line" className="w-2 h-[50vh]" />
  <div className="h-6" />
  <div className="-rotate-90 translate-y-6">
    <p className="text-lg font-normal whitespace-nowrap">
      My Short Story
    </p>
  </div>
</div>

   


      {/* HERO SECTION */}
      <div className="
  flex flex-col md:flex-row
  justify-center items-center
  min-h-[784px]
  px-4 md:pl-[100px]
">

  <div className="
    flex flex-col md:flex-row
    gap-[24px] md:gap-[40px]
    w-full
    h-auto md:h-[563px]
  ">

    {/* LEFT HERO */}
    <div className="
      w-full md:w-[600.5px]
      h-auto md:h-[563px]
      overflow-hidden
      flex justify-center
    ">
      <img
        src={Dir}
        alt="Hero"
        className="
          w-full
          max-w-[320px] sm:max-w-[380px] md:max-w-full
          h-auto md:h-[534.7px]
          object-contain
        "
      />
    </div>

    {/* RIGHT HERO */}
    <div className="
      flex flex-col
      gap-[20px] md:gap-[31px]
      w-full md:w-[743px]
      mt-6 md:mt-1
      text-center md:text-left
    ">

      {/* ABOUT ME */}
      <p className="abc font-semibold text-[18px] md:text-[24px] uppercase text-[rgba(104,104,104,0.8)]">
        About me
      </p>

      {/* NAME */}
      <h1 className="abc font-extrabold text-[28px] sm:text-[34px] md:text-[42px] leading-tight text-black">
        Hey, I'm Nitish Kumar 👋
      </h1>

      {/* PARAGRAPH 1 */}
      <p className="
        w-full
        font-normal abc
        text-[16px] md:text-[18px]
        leading-[26px] md:leading-[28px]
        text-black
        whitespace-normal break-words
      ">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
        incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Iusto esse distinctio sequi, cumque hic possimus eligendi pariatur?
        Dolorum repudiandae nobis, inventore, a illo, unde optio neque quibusdam esse doloremque possimus!
      </p>

      {/* PARAGRAPH 2 */}
      <p className="
        w-full
        font-normal abc
        text-[16px] md:text-[18px]
        leading-[26px] md:leading-[28px]
        text-black
        whitespace-normal break-words
      ">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
        incididunt ut labore et dolore magna aliqua.
      </p>

      {/* BUTTON */}
      <button className="
        mt-[16px] md:mt-[20px]
        w-[168px] h-[48px]
        bg-[#0033FF]
        text-white text-[16px]
        abc font-bold
        flex items-center justify-center
        mx-auto md:mx-0
      ">
        Get In touch
      </button>



          </div>
        </div>
      </div>
    </div>
  );
}

export default Director;
