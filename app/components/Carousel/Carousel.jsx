"use client"
import React, { useState, useEffect } from 'react'
import CarouselCard from '@/app/components/Carousel/CarouselCard'
import Link from 'next/link'
import Image from 'next/image'

const Carousel = ({posts}) => {
    const [index, setIndex] = useState(0);
    const length = posts.length;

      useEffect(() => {
        //Implementing the setInterval method
        const interval = setInterval(() => {
            setIndex((index + 1) % length);
        }, 10000);
 
        //Clearing the interval
        return () => clearInterval(interval);
    }, [index]);

      const handleClick = (i) => {
        console.log(i)
        setIndex(i % length)
      }

      const rows = [];
        for (let i = 0; i < length; i++) {
            rows.push(<div className={`w-[50px] h-[10px] rounded-full cursor-pointer ${i == index ? "bg-slate-600 scale-[1.1] drop-shadow-[0_0_7px_rgba(99,102,241,0.5)]": "bg-slate-900 drop-shadow-[0px_0px_5px_rgba(99,102,241,0.25)]"}`} key={i} onClick={() => handleClick(i)}/>)
        }
      
      return (
        <div className="carousel flex flex-col w-full h-[600px] overflow-hidden relative">
            <div className={`flex flex-row w-full scroll-smooth p-2 gap-2 transition ease-out duration-200`}
            style={{
              transform: `translateX(-${index * 100}%)`
            }}>
            {posts.map((post) => (
                <CarouselCard
                post={post}/>
            ))}
            </div>
            <div className="flex flex-col justify-center items-center w-full mt-[10px]">
            <div className='w-1/3 flex flex-row justify-center gap-5'>
                {rows}
                </div>
            </div>
        </div>
      )
}

export default Carousel