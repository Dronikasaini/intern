import React from 'react'
import Frame from '../component/Frame.png'

function Footer() {
  return (
    <footer className="w-full bg-[#F4F6FF] py-12">
      
      {/* Inner container */}
      <div
        className="
          max-w-[1440px]
          mx-auto
          px-6
          flex
          flex-col
          md:flex-row
          gap-10
          
        "
      >

        {/* ================= Left Section ================= */}
        <div className="flex flex-col gap-4 max-w-[400px]">
          <img src={Frame} alt="logo" className="w-[200px] h-auto" />
<p className="abc text-[14px] leading-[20px] font-normal text-[rgba(0,0,0,0.8)]">
  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
  Sed do eiusmod tempor incididunt ut labore.
  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
  Sed do eiusmod tempor incididunt ut labore.
</p>


        </div>

        {/* ================= Quick Links ================= */}
        <div className="flex flex-col items-start md:items-center gap-4 ">
          <h3 className="abc font-medium text-[20px] leading-[24px] text-black">
            Quick Links
          </h3>
 <ul className="flex flex-col gap-2 abc font-normal text-[18px] leading-[100%] tracking-[0] text-[#5A5A5A] abc">

            <li>Home</li>
            <li>About</li>
            <li>Experience</li>
            <li>Work</li>
            <li>Contact</li>
          </ul>
        </div>

        {/* ================= Social Links ================= */}
        <div className="flex flex-col items-start md:items-center gap-2 ">
          <h3 className="abc font-medium text-[20px] leading-[24px] text-black">
            Social Links
          </h3>

 <ul className="flex flex-col gap-2 abc font-medium text-[18px] leading-[100%] tracking-[0] text-[#5A5A5A] abc">
  <li>LinkedIn</li>
  <li>X (Twitter)</li>
  <li>Behance</li>
  <li>Instagram</li>
</ul>


        </div>

        {/* ================= Newsletter ================= */}
        <div className="flex flex-col gap-4 ml-auto">
          <h3 className="abc font-medium text-[20px] text-black leading-[24px]">
            Newsletter
          </h3>

          <p className="abc text-[16px] text-black leading-[100%]">
            Join My Newsletter for Meaningful Updates
          </p>

          {/* Email + Button (472px fixed) */}
         <div className="flex flex-col sm:flex-row w-full max-w-[472px] gap-2">
  <input
    type="email"
    placeholder="Enter your email"
    className="
      w-full           
      sm:w-[360px]     
      h-[44px]
      px-4
      bg-amber-50
      abc
      text-[14px]
      outline-none
    "
  />

  <button
    className="
      w-full          
      sm:w-[122px]    
      h-[44px]
      px-6
      bg-[#2200FF]
      text-white
      abc
      font-medium
      text-[14px]
      whitespace-nowrap
    "
  >
    Subscribe
  </button>
</div>


        </div>

      </div>
    </footer>
  )
}

export default Footer
