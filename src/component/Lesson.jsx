import React from 'react';
import man from '../component/man.png';

function Lesson() {
  return (
    <>
      {/* Heading */}
      <div className="flex justify-center px-4 mb-6">
        <h1 className="font-bold text-[32px] md:text-[40px] text-center abc">
          Explore my professional journey and the <br className="hidden md:block" />
          lessons that guide my decisions
        </h1>
      </div>

      {/* Main Content */}
      <div className="flex flex-col md:flex-row
        w-full max-w-[1280px]
        mx-auto
        items-start gap-6 px-4 md:px-10 mt-20 mb-10 " >

        {/* Left Column */}
        <div className="w-full md:w-1/2 mt-10 flex flex-col gap-18 ">

          <div className="flex  gap-4 justify-center items-center">
<span
  className="font-bold text-[30px] leading-[42px] tracking-[0.02em] lowercas abc mb-12">
  01
</span>
            <p className=" font-normal text-[16px] md:text-[18px] leading-[27px]tracking-[0.02em] text-black abc">
At NovaNectar Smart IT Solutions, our vision is to become a trusted growth partner for businesses by delivering innovation, collaboration and support any time it is needed, big or small.
</p>

          </div>

          <div className="flex items-start gap-4">
<span
  className="font-bold text-[30px] leading-[42px] tracking-[0.02em] lowercas abc mb-13">
  02
</span>            <p className=" font-normal text-[16px] md:text-[18px] leading-[27px]tracking-[0.02em] text-black abc">

                            We aim to be more than just a service provider and want to grow alongside our clients by offering smart IT solutions, creative thinking and dependable teamwork.

            </p>
          </div>

          <div className="flex items-start gap-4">
<span className="font-bold text-[30px] leading-[42px] tracking-[0.02em] lowercas abc mb-13">
  03
</span>
 <p className=" font-normal text-[16px] md:text-[18px] leading-[27px]tracking-[0.02em] text-black abc">

            Whether you are a startup or expanding firm we are confident in offering quality and simple digital services that yield results. We are dedicated to listening, evolving and being there when it counts the most because your success is our success.
            
            </p>
          </div>
        </div>

        {/* Right Column */}
        <div className="w-full md:w-1/2 flex justify-center mt-6">
          <img
            src={man}
            alt="man"
            className="w-full max-h-[500px] object-contain"

          />
          
        </div>
      </div>
    </>
  );
}

export default Lesson;
