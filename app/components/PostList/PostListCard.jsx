import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import {getDate} from '@/app/api/functions'



const PostListCard = ({img, title, desc, createdAt, catSlug, slug}) => {

  return (
    <div className='flex flex-row h-[400px] bg-[#16131a] rounded-lg drop-shadow-[0px_0px_5px_rgba(253,224,71,0.25)] hover:scale-[1.01] hover:drop-shadow-[0_0_10px_rgba(253,224,71,0.5)] transition-all duration-200'>
    {/* Image Container */}
    <div className='flex pr-[50px] overflow-hidden w-1/3 h-auto relative'>
        <Image src={img} alt="post list card here" className="w-full h-auto object-cover rounded-l-lg -z-49" fill={true}/>
    </div>
    {/* Text Container */}
    <div className='flex flex-col max-h-full p-10 w-2/3 justify-between'>
        {/* Date */}
        <p className="text-[15px] font-light text-[color:var(--softTextColor)]">
          {getDate(createdAt)}
        </p>
        {/* Title */}
        <h1 className="text-[30px]">
          {title}
          </h1>
        {/* Desc */}
        <p className="text-[15px] font-light text-[color:var(--softTextColor)] overflow-hidden">
          {desc}
        </p>
        {/* Read More */}
        <div>
            <Link href={`/blogs/${catSlug}/${slug}`}>
            <button
          className="px-[20px] py-[16px] rounded-[5px] border-0 w-max buttonhover">
                Read More
            </button>
            </Link>
        </div>
        </div>
    </div>
  )
}

export default PostListCard