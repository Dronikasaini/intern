import React, { useEffect, useState, useRef } from "react";

const Ani = () => {
  const [exp, setExp] = useState(0);
  const [projects, setProjects] = useState(0);
  const [industry, setIndustry] = useState(0);
  const [teams, setTeams] = useState(0);
  const sectionRef = useRef();
  const [hasAnimated, setHasAnimated] = useState(false); // ensure animation runs once

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);

          // EXPERIENCE
          let e = 0;
          const expTarget = 5;
          const expInterval = setInterval(() => {
            e += 1;
            setExp(e);
            if (e === expTarget) clearInterval(expInterval);
          }, 300);

          // PROJECTS
          let p = 0;
          const projectTarget = 30;
          const projectInterval = setInterval(() => {
            p += 1;
            setProjects(p);
            if (p === projectTarget) clearInterval(projectInterval);
          }, 80);

          // INDUSTRY SERVED
          let i = 0;
          const industryTarget = 5;
          const industryInterval = setInterval(() => {
            i += 1;
            setIndustry(i);
            if (i === industryTarget) clearInterval(industryInterval);
          }, 300);

          // TEAMS LED
          let t = 0;
          const teamsTarget = 50;
          const teamsInterval = setInterval(() => {
            t += 1;
            setTeams(t);
            if (t === teamsTarget) clearInterval(teamsInterval);
          }, 50);

          // Clean up intervals on unmount
          return () => {
            clearInterval(expInterval);
            clearInterval(projectInterval);
            clearInterval(industryInterval);
            clearInterval(teamsInterval);
          };
        }
      },
      { threshold: 0.5 } // trigger when half of section visible
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, [hasAnimated]);

  return (
    <div
      ref={sectionRef}
      // className="
      //   w-full mt-[120px] mb-[50px]
      //   md:flex md:justify-center  md:gap-12
      //   max-sm:grid max-sm:grid-cols-2 max-sm:gap-4 max-sm:justify-items-center
      //   max-sm:px-4
      // "
    //  className="
//   w-full mt-[120px] mb-[50px]
//   md:flex md:justify-center md:gap-12
//   max-sm:grid max-sm:grid-cols-2 max-sm:gap-2 max-sm:justify-items-center
//   max-sm:px-4
// "
className="
  w-full mt-[120px] mb-[50px]
  md:flex md:justify-center md:gap-12
  max-sm:grid max-sm:grid-cols-2 max-sm:gap-x-1 max-sm:gap-y-6 max-sm:justify-items-center
  max-sm:px-4
"
    >
      {/* EXPERIENCE */}
      <div className="w-[259px] h-[150px] md:w-[259px] md:h-[150px] max-sm:w-[140px] max-sm:h-[140px] bg-[#F4F6FF] flex flex-col items-center justify-center rounded-xl">
        <p className="text-black opacity-50 uppercase text-[16px] max-sm:text-[12px] text-center max-sm:leading-[14px]">
          year of experience
        </p>
        <p className="text-black font-bold text-5xl max-sm:text-2xl mt-1">
          {exp}+
        </p>
      </div>

      {/* PROJECTS */}
      <div className="w-[259px] h-[150px] md:w-[259px] md:h-[150px] max-sm:w-[140px] max-sm:h-[140px] bg-[#F4F6FF] flex flex-col items-center justify-center rounded-xl">
        <p className="text-black opacity-50 uppercase text-[16px] max-sm:text-[12px] text-center max-sm:leading-[14px]">
          projects found
        </p>
        <p className="text-black font-bold text-5xl max-sm:text-2xl mt-1">
          {projects}+
        </p>
      </div>

      {/* INDUSTRY SERVED */}
      <div className="w-[259px] h-[150px] md:w-[259px] md:h-[150px] max-sm:w-[140px] max-sm:h-[140px] bg-[#F4F6FF] flex flex-col items-center justify-center rounded-xl">
        <p className="text-black opacity-50 uppercase text-[16px] max-sm:text-[12px] text-center max-sm:leading-[14px]">
          industry served
        </p>
        <p className="text-black font-bold text-5xl max-sm:text-2xl mt-1">
          {industry}+
        </p>
      </div>

      {/* TEAMS LED */}
      <div className="w-[259px] h-[150px] md:w-[259px] md:h-[150px] max-sm:w-[140px] max-sm:h-[140px] bg-[#F4F6FF] flex flex-col items-center justify-center rounded-xl">
        <p className="text-black  abc opacity-50 uppercase text-[16px] max-sm:text-[12px] text-center max-sm:leading-[14px]">
          teams led
        </p>
        <p className="text-black font-bold  abc text-5xl max-sm:text-2xl mt-1">
          {teams}+
        </p>
      </div>
    </div>
  );
};

export default Ani;
