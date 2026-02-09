import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import Imagebio from "../component/image.png";
import Star from "../component/star.png";
import button from "../component/button.png";
import line from "../component/line.png";
import Ani from "./Ani.jsx";
import Autoslider from "./Autoslider.jsx";
import Img from "./Img.jsx";
import My from "./My.jsx";
import Director from'../component/Director.jsx'
import Lesson from "./Lesson.jsx";
import Card from"./Card.jsx";
import about from '../component/about.png'
import Form from "./Form.jsx";
const Home = () => {
  return (
    <>
 <div className="w-full max-w-[1440px] bg-[#F4F6FF] mx-auto flex justify-center items-start p-4
                    max-sm:flex-col-reverse max-sm:items-center max-sm:h-auto">

      {/* LEFT SIDE */}
      <div className="w-2/3 h-[500px] mx-[50px] flex flex-col mt-24 p-2 gap-[27px]
                      max-sm:w-full max-sm:mx-0 max-sm:mt-6
                      max-sm:items-center max-sm:text-center">

        <h1 className="text-[18px] font-normal">
          Hey, i’m Nitish Kumar
        </h1>

       <p className="font-bold leading-[1.1] text-[56px]
              max-sm:text-[28px] max-sm:leading-[1.2]">
  CEO & Strategic Leader
  <span className="hidden sm:inline">
    <br />
  </span>
  at <span className="text-blue-600">NovaNectar</span>
</p>


        {/* <p className="text-[20px] font-normal leading-[28px] text-[#000000B2]">
          Building meaningful products leading high-performing teams and
          <span className="block sm:hidden"></span>
          driving long-term growth ↓
        </p> */}
        
   <p className="text-[20px]  abc font-normal leading-[28px] max-sm:text-[16px] max-sm:leading-[22px] max-sm:w-[90%] text-[#000000B2] ">
  Building meaningful products leading high-performing,<br/> teams and driving long-term growth ↓
</p>


        <button className="w-[168px] h-[48px] bg-[#0033FF] text-white text-[16px] font-bold mt-4
                           flex items-center justify-center">
          Get In touch
        </button>

        <img
          src={button}
          alt="Decorative Button"
          className="w-[157px] h-[41px] mt-[28px]"
        />
      </div>

      {/* RIGHT SIDE */}
{/* RIGHT SIDE */}
<div className="w-[532px] h-[500px] mt-18 relative p-4 rounded-3xl overflow-hidden flex items-center justify-center
                max-sm:w-[90%] max-sm:h-[300px] max-sm:mt-6">

  {/* Main CEO Image */}
  <img
    src={Imagebio}
    alt="CEO Image"
    className="w-full h-[399px] max-sm:h-full mb-7 object-cover rounded-3xl"
  />

  {/* Small Image (Star) */}
  <img
    src={Star}
    alt="Corner Image"
    className="absolute top-2 right-2 w-[79px] h-[50px] object-fill max-sm:hidden"
  />
</div>
</div>
 
 <Director/>   
     {/* About */}

 {/* <div className="relative w-full max-w-[1440px] mx-auto h-full bg-white overflow-hidden">

  
  <div className="absolute top-1/2 left-0 -translate-y-1/2 
                  hidden md:flex flex-col items-center">

  
    <img
      src={line}
      alt="Decorative Line"
      className="w-2 h-[35vh]"
    />

    <div className="h-6" />

  
    <div className="-rotate-90 translate-y-6">
      <p className="text-lg   font-normal whitespace-nowrap">
        My Short Story
      </p>
    </div>
  </div>


  <img
    src={about}
    alt="About Image"
    className="
      w-full 
      max-w-[1200px] 
      h-auto 
      object-contain 
      mx-auto 
      mt-10
      px-4 md:px-0
    "
  />
</div>  */}

<Ani/>


<div className=" w-full max-w-[1440px] mx-auto h-[492.75px] bg-white pt-[80px] pb-[80px] px-[56px] opacity-100 mx-auto flex flex-col items-center gap-3">
  
  
  <p className="abc font-normal text-[18px]  leading-[100%] tracking-[0%] uppercase text-black opacity-50">
    MY SKILLS
  </p>

  
<p className="abc font-extrabold text-[32px] leading-[100%] tracking-[0%] text-black mb-10">
  My Expertise
</p>

<div>
<Autoslider/>
</div>
</div>
<div className="w-full max-w-[1440px] mx-auto bg-white pt-[150px] pb-[80px] px-[56px] flex flex-col gap-[20px] flex justify-center items-center">
  
  <p className="font-bold abc text-[32px] leading-[100%] tracking-[0%] uppercase text-black">
    My Works
  </p>

<p className="font-normal   abc text-[18px] leading-[120%] tracking-[0%] text-black 
              max-sm:text-[16px] max-sm:leading-[20px] max-sm:w-full w-2/3 flex justify-center items-center
              text-center sm:text-left">
  Discover my latest work and strategic solutions that shape business growth
</p>



<div><Img/></div>
</div> 
{/* BUTTON */}
<div className="flex justify-center -mt-2">
  <button className="flex  abc items-center gap-1 bg-blue-600 text-white px-6 py-3  hover:bg-blue-700 transition">
    Projects
    <span className="text-xl">→</span>
  </button>
</div>

{/* MY  EXPERENCE */}
<div>
<My/>
</div>
{/* LESSON */}
<div>
<Lesson/>
</div>
{/* Card */}
<Card/>
{/* FORM */}
<Form/>
{/* Footer
<Footer/> */}
    </>
  );
};

export default Home;  