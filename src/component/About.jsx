import React from 'react'
import { FiArrowRight } from "react-icons/fi"
import photo1 from '../component/photo1.png'
import photo2 from '../component/photo2.png'
import photo3 from '../component/photo3.png'
import Autocard from './Autocard'
import focus from '../component/focus.png'
function About() {
  return (
    <>
      {/* ABOUT ME SECTION */}
      <div className="w-full max-w-[1169px] flex flex-col gap-4 mt-16 mx-auto px-4">
        <h2 className="abc font-medium text-[42px] leading-[58.8px] max-md:text-[32px] max-md:leading-[44px]">
          About Me
        </h2>

        <p className="abc font-normal text-[18px] leading-[25.2px] max-md:text-[16px] max-md:leading-[22px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque quis
          odio fermentum, condimentum purus vitae, congue felis. Duis nec
          efficitur odio, pharetra aliquet lectus. In dapibus, risus vitae
          volutpat rutrum, nisi nisl maximus nulla, maximus gravida est justo nec
          risus. Aliquam erat volutpat.
        </p>
      </div>

      {/* MOVING TEXT / MARQUEE */}
      <div className=" w-[1440px] mx-auto overflow-hidden mt-10 border-gray-700 hidden sm:flex">
  {/* visible window = fixed */}

  <div className="flex gap-20 animate-marquee w-max">
    {/* moving content */}

    <span className="text-[90px] font-normal  uppercase abc  whitespace-nowrap">
      Chief Executive Officer • Chief Executive Officer •
    </span>

    <span className="text-[90px] font-normal uppercase  abc whitespace-nowrap">
      Chief Executive Officer • Chief Executive Officer •
    </span>
  </div>



      <style>
        {`
          @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .animate-marquee {
            display: flex;
            animation: marquee 15s linear infinite;
            min-width: max-content;
          }
        `}
      </style>
    </div>
{/* Button */}
    
    {/* SCROLL BUTTON */}
<div className="w-full  h-auto flex justify-center items-center mt-0 sm: mt-[40px]">
  <button
    className="
      w-[155px] h-[41px]
      flex items-center justify-center gap-[10px]
      px-[10px]
      text-gray-500
      abc text-[14px]
      opacity-100 abc uppercase
      
    "
  >
    Scroll Down
    <FiArrowRight className="text-[16px]" />
  </button>
</div>

{/* HERO SECTION with margin-top */}
<div className="w-full flex justify-center py-12 mt-[90px]">
  {/* Main container */}
  <div className="w-[90%] max-w-[1440px] flex flex-col lg:flex-row gap-10">
    
    {/* Left Content */}
    <div className="flex-1  flex flex-col gap-6 abc  font-normal
      text-[16px] leading-[24px]
      md:text-[18px] md:leading-[27px]">
      <p className='abc'>
        As a CEO, I lead at the intersection of technology, innovation, and business strategy. 
        With a background in building AI-powered SaaS platforms, 3D virtual experiences, 
        and enterprise-scale digital products, I bring a unique blend of technical expertise 
        and visionary leadership to every project. My focus is on transforming complex challenges 
        into scalable, intuitive, and high-impact solutions that elevate both user experience 
        and business value.
      </p>

      <p className='abc'>
        My leadership approach combines strategic decision-making with a deep understanding of modern engineering. 
        From guiding teams in developing Retrieval-Augmented Generation (RAG) systems and optimizing WebGL for immersive 3D environments 
        to architecting type-safe monorepos and scalable platform infrastructures.
      </p>

      <p className='abc'>
        What defines my leadership is my ability to oversee the entire technology lifecycle: 
        shaping system architecture, directing product vision, integrating AI capabilities, 
        and ensuring efficient delivery pipelines through modern DevOps practices. 
        I don’t just manage teams—I empower them to innovate, execute, and deliver products 
        that create lasting business impact.
      </p>

      <h2 className="text-2xl font-semibold font-['DM_Sans'] abc mt-4 gap-5">My Principles</h2>

      <ul className="flex flex-col gap-4">
        <li className="flex items-start gap-3">
          {/* Bullet with check */}
          <span className="w-5 h-5 rounded-full bg-blue-400 flex items-center justify-center flex-shrink-0 mt-1">
            <span className="text-white text-sm font-bold">&#10003;</span> {/* ✔ symbol */}
          </span>
          <p className="abc gap-0">
            <span className="text-blue-400 font-semibold abc">Simplicity: </span>
            Great products are built by removing the unnecessary.
          </p>
        </li>

        <li className="flex items-start gap-3">
          <span className="w-5 h-5 rounded-full bg-blue-400 flex items-center justify-center flex-shrink-0 mt-1">
            <span className="text-white text-sm font-bold">&#10003;</span>
          </span>
          <p className="abc ">
            <span className="text-blue-400 font-semibold abc ">Empathy: </span>
            Understanding users deeply is the foundation of good design.
          </p>
        </li>

        <li className="flex items-start gap-3">
          <span className="w-5 h-5 rounded-full bg-blue-400 flex items-center justify-center flex-shrink-0 mt-1">
            <span className="text-white text-sm font-bold">&#10003;</span>
          </span>
          <p className="abc ">
            <span className="text-blue-400 font-semibold abc">Integrity: </span>
            I believe in honest work, clear communication, and long-term thinking.
          </p>
        </li>

        <li className="flex items-start gap-3">
          <span className="w-5 h-5 rounded-full bg-blue-400 flex items-center justify-center flex-shrink-0 mt-1">
            <span className="text-white text-sm font-bold">&#10003;</span>
          </span>
          <p className="abc ">
            <span className="text-blue-400 font-semibold abc">Growth: </span>
            I constantly learn, experiment, and push myself to improve.
          </p>
        </li>
      </ul>
    </div>

    {/* Right Image */}
    <div className="
  flex-1 flex flex-col  items-center
  h-[400px] sm:h-[865px] md:h-[865px] lg:h-[865px]
">
  <img 
    src={photo1} 
    alt="CEO Photo" 
    className="
      w-full h-full
      object-cover
      
    "
  />

      <div className="flex flex-col text-[16px] sm:text-[16px] md:text-[18px] justify-center items-center mt-4">
        <p className='abc'>Nitish Kumar</p>
        <p className="text-gray-400 text-sm sm:text-[16px] abc">Chief Executive Officer at Novanectar</p>
      </div>
    </div>

  </div>
</div>




<h1 className="flex justify-center  font-bold mt-[90px] text-[32px] abc">
  My Purpose
</h1>

<div className="w-full max-w-[1440px] flex flex-col lg:flex-row gap-10 px-4 sm:px-6 md:px-12 py-12 mx-auto">
  
  {/* Left Image */}
  <div className="w-full lg:w-[601px] flex justify-center">
    <img 
      src={photo2} 
      alt="img"
      className="w-full max-w-[538px] h-auto sm:h-[400px] md:h-[500px] lg:h-[550px] object-cover"
    />
  </div>

  {/* Right Content */}
  <div className="w-full lg:w-[644px] flex flex-col gap-4">
    <div className="flex-1 abc flex flex-col abc  font-normal
      text-[16px] leading-[24px]
      md:text-[18px] md:leading-[27px] gap-4">
      <p>My career began with a simple curiosity: Why do some digital experiences feel effortless while others frustrate us? This curiosity led me into UI/UX, where I found my passion for improving the way people interact with technology.</p>
      <p>Over the years, I’ve worked on websites, apps, and dashboards — learning what truly matters for users. Today, as a CEO, I combine my design mindset with leadership to build products that are not only beautiful but genuinely useful.</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque quis odio fermentum, condimentum purus vitae, congue felis. Duis nec efficitur odio, pharetra aliquet lectus. In dapibus, risus vitae volutpat rutrum, nisi nisl maximus nulla, maximus gravida est justo nec risus. Aliquam erat volutpat. Aliquam vitae mollis elit, quis sagittis massa. Aenean non nisi ut erat tincidunt placerat. Ut sagittis enim ut leo hendrerit, id interdum nulla viverra.</p>
      <p>Over the years, I’ve worked on websites, apps, and dashboards — learning what truly matters for users. Today, as a CEO, I combine my design mindset with leadership to build products that are not only beautiful but genuinely useful.</p>
      <p>Over the years, I’ve worked on websites, apps, and dashboards — learning what truly matters for users. Today, as a CEO, I combine my design mindset with leadership to build products that are not only beautiful but genuinely useful.</p>
    </div>
  </div>
</div>

{/* My Journey */}
<h1 className="flex justify-center  font-bold mt-[90px] text-[32px] abc">
  My Journey
</h1>

<div className="w-full max-w-[1440px] flex flex-col lg:flex-row gap-10 px-4 sm:px-6 md:px-12 py-12 mx-auto">
  
  {/* Left Content */}
  <div className="w-full lg:w-[644px] flex flex-col gap-4 order-2 lg:order-1">
  <div 
    // flex-1 abc flex flex-col gap-4
    //   abc  font-normal
    //   text-[16px] leading-[24px]
    //   md:text-[18px] md:leading-[27px]
    className="flex-1  flex flex-col gap-6 abc  font-normal
      text-[16px] leading-[24px]
      md:text-[18px] md:leading-[27px]
  ">
    <p>
      My career began with a simple curiosity: Why do some digital experiences
      feel effortless while others frustrate us? This curiosity led me into
      UI/UX, where I found my passion for improving the way people interact
      with technology.
    </p>

    <p>
      Over the years, I’ve worked on websites, apps, and dashboards — learning
      what truly matters for users. Today, as a CEO, I combine my design mindset
      with leadership to build products that are not only beautiful but
      genuinely useful.
    </p>

    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque quis odio
      fermentum, condimentum purus vitae, congue felis. Duis nec efficitur odio.
    </p>

    <p>
      Over the years, I’ve worked on websites, apps, and dashboards — learning
      what truly matters for users.
    </p>

    <p>
      Over the years, I’ve worked on websites, apps, and dashboards — learning
      what truly matters for users.
    </p>
  </div>
</div>


  {/* Right Image */}
  <div className="w-full lg:w-[589px] flex justify-center order-1 lg:order-2">
    <img 
      src={photo3} 
      alt="img"
      className="w-full max-w-[589px] h-auto sm:h-[400px] md:h-[500px] lg:h-[550px] object-cover"
    />
  </div>
</div>



    <h1 className="flex  justify-center  font-bold mt-[90px]  h-[45px] abc text-[32px]"> proven impact </h1>
<Autocard/>

<div className=" w-full max-w-[1440px]  max-h-[450px] flex  justify-center items-center mx-auto mt-18">
  
  <img 
    src={focus}
    alt="image"
    className="w-full h-full object-contain"
  />

</div>



    </>
  )}
export default About
