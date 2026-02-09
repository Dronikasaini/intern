import React, { useState } from 'react'
import Frame from "../component/Frame.png";
import { HiArrowUpRight } from "react-icons/hi2";
import { HiMenu, HiX } from "react-icons/hi";
import { useNavigate } from 'react-router-dom';

function Header() {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* FIXED HEADER */}
      <nav
        className="w-full bg-white fixed top-0 left-0 z-50
        shadow-[0_1px_2px_rgba(0,0,0,0.04)]"
      >
        <div className="max-w-[1440px] h-[74px] mx-auto px-[20px] sm:px-[50px] py-[20px] flex items-center justify-between">

          {/* LEFT LOGO */}
          <img
            src={Frame}
            alt="Logo"
            className="w-[150px] sm:w-[186px] h-[34px] object-contain"
          />

          {/* DESKTOP MENU */}
          <ul className="hidden md:flex gap-[31px] text-gray-700 font-medium text-[18px]">
            <li onClick={() => navigate('/Home')} className="cursor-pointer text-black font-medium abc">Home</li>
            <li onClick={() => navigate('/About')} className="cursor-pointer text-black font-medium abc">About</li>
            <li onClick={() => navigate('/Work')} className="cursor-pointer text-black font-medium abc">Work</li>
            <li onClick={() => navigate('/Experience')} className="cursor-pointer text-black font-medium abc">Experience</li>
            <li onClick={() => navigate('/Contact')} className="cursor-pointer text-black font-medium abc">Contact</li>
          </ul>

          {/* DESKTOP SEND QUERY */}
          <div className="hidden md:flex underline items-center gap-1 text-black text-[18px] abc font-medium cursor-pointer">
            Send Query 
            <HiArrowUpRight size={17} strokeWidth={1.5} />
          </div>

          {/* MOBILE MENU ICON */}
          <div className="md:hidden cursor-pointer" onClick={() => setOpen(!open)}>
            {open ? <HiX size={26} /> : <HiMenu size={26} />}
          </div>
        </div>

        {/* MOBILE MENU */}
        {open && (
          <div className="md:hidden px-6 pb-6 flex flex-col gap-4 text-gray-700 font-medium bg-white">
            <p onClick={() => { navigate('/Home'); setOpen(false) }} className="abc">Home</p>
            <p onClick={() => { navigate('/About'); setOpen(false) }} className="abc">About</p>
            <p onClick={() => { navigate('/Work'); setOpen(false) }} className="abc">Work</p>
            <p onClick={() => { navigate('/Experience'); setOpen(false) }} className="abc">Experience</p>
            <p onClick={() => { navigate('/Contact'); setOpen(false) }} className="abc">Contact</p>

            <div className="flex abc underline items-center gap-1 pt-2">
              Send Query
              <HiArrowUpRight size={18} strokeWidth={2.8} className="scale-110" />
            </div>
          </div>
        )}
      </nav>

      {/* HEADER HEIGHT SPACER (VERY IMPORTANT) */}
      <div className="h-[74px]" />
    </>
  )
}

export default Header;
