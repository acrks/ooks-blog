"use client"
import React, { useState } from 'react'
import CarouselCard from '@/app/components/Carousel/CarouselCard'
import Link from 'next/link'
import Image from 'next/image'

const Carousel = ({posts}) => {
    const [index, setIndex] = useState(0);
    const length = posts.length;
    const handlePrevious = () => {
        const newIndex = index - 1;
       setIndex(newIndex < 0 ? length - 1 : newIndex);
      };
      
      const handleNext = () => {
        const newIndex = index + 1;
        setIndex(newIndex >= length ? 0 : newIndex);
      };

      const handleClick = (i) => {
        setIndex(i)
      }

      const rows = [];
        for (let i = 0; i < length; i++) {
            rows.push(<div className={`w-[50px] h-[10px] rounded-full cursor-pointer ${i == index ? "bg-white": "bg-slate-700"} cursor-pointer`} key={i} onClick={() => handleClick(i)}/>)
        }
      
      return (
        <div className="carousel flex flex-col border border-solid border-white w-full h-[600px]">
            <div className="flex flex-row w-full overflow-x-auto border border-solid border-cyan-600 scroll-smooth p-2 gap-2">
            {posts.map((post, i) => (
                <div className={`flex flex-row flex-shrink-0 w-full items-center border border-solid border-white gap-[50px] ${i == index ? "": "hidden"}`}>
                {/* Image Container */}
                <div className="flex w-1/2 h-[500px] relative">
                <Image
                className="object-cover h-auto -z-50"
                src={post.img}
                alt=""
                fill />
                </div>
                {/* Text Container */}
                <div className="flex w-1/2 flex-col gap-[20px]">
                {/* Post Title */}
                <h1 className="text-[40px]">
                {post.title}
                </h1>
                {/* Post Desc */}
                <p className="text-[20px] font-light text-[color:var(--softTextColor)]">
                {post.desc}          
                </p>
                {/* Read More Button */}
                <Link href={`/blogs/${post.catSlug}/${post.slug}`}>
                <button
                className="px-[20px] py-[16px] rounded-[5px] border-0 w-max">
                    Read More
                </button>
                </Link>
                </div>
            </div>
            ))}
            </div>
            <div className='w-1/2 h-[20px] flex flex-row justify-around border border-solid border-cyan-500'>
                {rows}
            </div>
        </div>
      )
}

export default Carousel