import React from 'react'
import {getDate} from '@/app/api/functions'
import Image from 'next/image'
import parse from 'react-html-parser'
import singlepost from './singlepost.css'

const SinglePost = ({title, img, body, createdAt}) => {
  return (
  <div className='flex flex-col mt-[30px] p-10 justify-center items-center'>
    {/* Image Container */}
    <div className='flex h-[350px] w-3/4 relative'>
      <Image src={img} alt="post list card here" className="h-auto object-cover -z-50" fill/>
    </div>
    {/* Text Container */}
    <div className='flex flex-col max-h-full align-middle p-10 justify-between'>
        {/* Date */}
        <p className="text-[25px] font-light text-[color:var(--softTextColor)]">
          {getDate(createdAt)}
        </p>
        {/* Title */}
        <h1 className="text-[30px]">
          {title}
          </h1>
        {/* Desc */}
        <p 
        style={singlepost.para}
        className="text-[20px] font-light text-[color:var(--softTextColor)] p-10 whitespace-pre-wrap">
        {parse(body)}
        </p>
        </div>
    </div>
  )
}

export default SinglePost
