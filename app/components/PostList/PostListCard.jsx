import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import {getDate} from '@/app/api/functions'



const PostListCard = ({img, title, desc, createdAt, catSlug, slug, }) => {

  return (
    <div className='flex flex-row h-[400px] bg-[#16131a] rounded-lg shadow-md shadow-indigo-500/40 hover:shadow-indigo-500/50'>
    {/* Image Container */}
    <div className='flex pr-[50px] overflow-hidden w-1/3 h-auto relative'>
        <Image src={img} alt="post list card here" className="w-full h-auto object-cover rounded-l-lg" fill={true}/>
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
          className="px-[20px] py-[16px] rounded-[5px] border-0 w-max">
                Read More!
            </button>
            </Link>
        </div>
        </div>
    </div>
  )
}

export default PostListCard