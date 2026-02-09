import React from 'react'
import Img from './Img'

function Work() {
  return (
    <div className="
      w-full max-w-[1440px] mx-auto bg-white
      pb-[80px] px-[56px]
      flex flex-col gap-[20px]
      max-md:px-6  
    ">
      {/* Heading */}
      <p className="
        font-bold text-[32px]
        abc leading-[100%]
        flex items-start text-black mt-5
      ">
        My Works
      </p>

      {/* Sub text */}
      <p className="
        font-normal
        text-[16px] md:text-[18px]
        leading-[24px] md:leading-[27px]
        abc text-black flex  items-start
      ">
        Discover my latest work and strategic solutions that shape business growth
      </p>

     
        <Img />
      
    </div>
  )
}

export default Work
