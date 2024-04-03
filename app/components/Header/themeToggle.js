"use client"

import React from 'react'
import { ThemeContext } from '@/app/context/ThemeContext'
import { useContext } from 'react'
import { IoMdMoon, IoIosSunny } from "react-icons/io"


const ThemeToggle = () => {
  const { toggle, theme } = useContext(ThemeContext);

  return (
    <div onClick={toggle} className={`w-[40px] h-[20px] rounded-full px-0.5 py-0.5 cursor-pointer flex items-center justify-between relative bg-black ${theme === "dark" ? 'bg-white' : 'bg-dark'}`}>
       <div className={`w-[15px] h-[15px] rounded-full bg-white absolute ${theme === "dark" ? 'left-[1px] bg-dark' : 'right-[1px] bg-white'}`}></div>
       <div className="flex justify-between">
       <IoMdMoon size='1rem' />
       <IoIosSunny style={{ fill: 'black' }} size='1rem'/>
       </div>
    </div>
  )
}


export default ThemeToggle