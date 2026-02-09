import React from 'react'
import Frame from "../component/Frame.png";
import { HiArrowUpRight } from "react-icons/hi2";
import project1 from '../component/project1.png';
import project2 from '../component/project2.png';
import project3 from '../component/project3.png';
import project4 from '../component/project4.png';
import project5 from '../component/project5.png';
import Img from "./Img.jsx";
import Footer from "./Footer.jsx";
import Work from './Work.jsx';

function Page3() {
  return (
    <>  

      <div className="mx-8 mt-4">
        <p>Back</p>
      </div>

      {/* image 1 */}
      <div className="w-full max-w-[1440px] mx-auto h-[636px] flex gap-[61px] pt-[10px] pr-[50px] pb-[10px] pl-[50px] opacity-100 max-md:flex-col max-md:h-auto">
        <div className="w-[556px] h-[616px] bg-gray-300 max-md:w-full max-md:h-[360px]">
          <img src={project1} alt="img" className="w-full h-full object-cover" />
        </div>

        <div className="w-[663px] h-[180px] flex flex-col gap-[12px] max-md:w-full max-md:h-auto">
          <h2 className="text-[32px] font-semibold abc">Project Overview</h2>
          <p className="abc text-[18px] font-normal leading-[25.2px] tracking-normal">
  VexLogic AI Assistant is a modern conversational platform designed for users who want fast,
  clean, and distraction-free interactions with AI. My goal was to create a UI that feels
  intelligent, lightweight, and enjoyable, without overwhelming the user with unnecessary
  elements. The final design focuses on balance—clarity, speed, comfort, and structure.
</p>

        </div>
      </div>

      {/* image 2 */}
    <div className="w-full max-w-[1440px] mx-auto h-[697px] flex gap-[61px] pt-[10px] pr-[50px] pb-[10px] pl-[50px] opacity-100 max-md:flex-col max-md:h-auto">

  {/* IMAGE — mobile par pehle */}
  <div className="w-[670px] h-[677px] bg-gray-300 max-md:w-full max-md:h-[360px] order-2 max-md:order-1">
    <img src={project2} alt="img" className="w-full h-full object-cover" />
  </div>

  {/* TEXT — mobile par baad me */}
  <div className="flex justify-center items-center w-full order-1 max-md:order-2">
    <div className="w-[670px] h-[480px] flex flex-col gap-[32px] max-md:w-full max-md:h-auto">
      <h2 className="text-[32px] font-semibold abc">Problem Statement</h2>

      <p className="abc text-[18px] font-normal leading-[25.2px] tracking-normal">
        Most AI chat interfaces today feel cluttered, unorganized, or slow. Users often struggle with:
      </p>

      <ul className="space-y-2">
        {[
          "Confusing layout",
          "Poor message hierarchy",
          "Weak visual guidance",
          "Build a consistent and scalable design system.",
          "No emotional feel or brand personality",
        ].map((text, i) => (
          <li
            key={i}
            className="relative w-[646.5px] h-[40px] flex items-center gap-[5px] max-md:w-full max-md:h-auto"
          >
            <span className="w-[15px] h-[15px] bg-black rounded-full flex-shrink-0"></span>
            <p className="abc font-normal text-[18px] leading-[25.2px] ml-4 tracking-normal">
              {text}
            </p>
          </li>
        ))}
      </ul>

      <p className="abc text-[18px] font-normal leading-[25.2px] tracking-normal">
        Most AI chat interfaces today feel cluttered, unorganized, or slow. Users often struggle with:
      </p>
    </div>
  </div>

</div>


      {/* image 3 */}
      <div className="w-full max-w-[1440px] mx-auto flex gap-[40px] pt-[10px] pr-[50px] pb-[10px] pl-[50px] opacity-100 max-md:flex-col">
        <div className="w-[601px] h-[653px] bg-gray-300 max-md:w-full max-md:h-[360px]">
          <img src={project3} alt="img" className="w-full h-full object-cover" />
        </div>

        <div className="w-[696px] h-[448px] flex flex-col gap-[12px] mt-16 max-md:w-full max-md:h-auto max-md:mt-6">
          <h2 className="text-[32px] font-semibold abc">Project Goals</h2>
          <p className="abc text-[18px] font-normal leading-[25.2px] tracking-normal">
            Designing a modern, intuitive, and user-centric AI interface focused on clarity,
            <br  />
            comfort, and seamless interaction.The goal was to create a digital environment that reduces cognitive load, enhances
            <br />
            readability, and delivers a smooth conversational experience—while maintaining a premium, professional visual identity.
          </p>

          <h1 className="font-semibold text-[16px] abc ">Key Points</h1>

          <ul className="space-y-2">
            {[
              "Confusing layout",
              "Poor message hierarchy",
              "Weak visual guidance",
              "Build a consistent and scalable design system.",
              "No emotional feel or brand personality",
            ].map((text, i) => (
              <li key={i} className="relative w-[646.5px] h-[40px] flex items-center gap-[5px] max-md:w-full max-md:h-auto">
                <span className="w-[15px] h-[15px] bg-black rounded-full flex-shrink-0"></span>
                <p className="abc font-normal text-[18px] leading-[25.2px] ml-4 tracking-normal">
                  {text}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* image 4 — ONLY MOBILE ORDER CHANGE */}
      <div className="w-full max-w-[1440px] mx-auto flex gap-[52px] pt-[10px] pr-[50px] pb-[10px] pl-[50px] opacity-100 max-md:flex-col-reverse">
        <div className="w-[723px] h-[616px] flex flex-col justify-center gap-[40px] max-md:w-full max-md:h-auto">
          <h2 className="text-[32px] font-semibold abc">Challenges & Solutions</h2>

          <p className=" abc text-[18px] font-normal leading-[25.2px] tracking-normal">
            Throughout the design process, several usability and visual clarity issues emerged.
            The goal was to overcome these challenges with simple, thoughtful design decisions
            that improved readability, reduced friction, and created a more polished user experience.
          </p>

          <h2 className="text-[18px] font-semibold abc">Key Points</h2>

          <ul className="space-y-3">
            {[
              "Generic visual style: Introduced a unique spacing system and branded UI elements.",
              "Low readability in long chats: Improved hierarchy, line height, and bubble padding.",
            ].map((text, i) => (
              <li key={i} className="relative w-[646.5px] flex items-start gap-4 max-md:w-full">
                <span className="w-[14px] h-[14px] bg-black rounded-full mt-[6px] flex-shrink-0"></span>
                <p className="abc text-[18px] font-normal leading-[25.2px] tracking-normal">
                  {text}
                </p>
              </li>
            ))}
          </ul>
        </div>

        <div className="w-[556px] h-[616px] bg-gray-300 max-md:w-full max-md:h-[360px]">
          <img src={project4} alt="img" className="w-full h-full object-cover" />
        </div>
      </div>

      {/* image 5 */}
      <div className="w-full max-w-[1440px] mx-auto flex gap-[40px] pt-[10px] pr-[50px] pb-[10px] pl-[50px] opacity-100 max-md:flex-col max-md:gap-6">
        <div className="w-[601px] h-[653px] bg-gray-300 max-md:w-full max-md:h-[360px]">
          <img src={project5} alt="img" className="w-full h-full object-cover" />
        </div>

        <div className="w-[644px] flex flex-col h-[653px] justify-end gap-[12px] max-md:w-full max-md:h-auto">
          <h2 className="text-[32px] font-semibold abc">Outcome & Results</h2>
          <p className="abc text-[18px] font-normal leading-[25.2px] tracking-normal mb-9">
            The final design delivered a more focused, intuitive, and visually balanced experience.
            Through refined spacing, improved hierarchy, and thoughtful interaction patterns,
            the overall product became smoother, more reliable, and more enjoyable for users—strengthening
            both usability and brand perception.
          </p>
        </div>
      </div>

      <Work />
    </>
  )
}

export default Page3
