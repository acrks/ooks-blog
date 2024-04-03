import React from 'react'
import Image from "next/image"
import Link from 'next/link'

const Featured = ({featuredPosts}) => {

  const header = featuredPosts.length == 1 ? 'Featured Post' : 'Featured Post'

  return (
    <div className="flex-row items-center mt-[30px]">
      <h1 className='text-[60px]'>{header}</h1>
    {featuredPosts.map((featuredPost) => (
      <>
      {/* Post */}
      <div className="mt-[30px] flex items-center gap-[50px]">
        {/* Image Container */}
        <div className="flex w-1/2 h-[500px] relative">
          <Image
          className="object-cover h-auto -z-50"
          src={featuredPost.img}
          alt=""
          fill />
        </div>
        {/* Text Container */}
        <div className="flex w-1/2 flex-col gap-[20px]">
          {/* Post Title */}
          <h1 className="text-[40px]">
          {featuredPost.title}
          </h1>
          {/* Post Desc */}
          <p className="text-[20px] font-light text-[color:var(--softTextColor)]">
          {featuredPost.desc}          
          </p>
          {/* Read More Button */}
          <Link href={`/blogs/${featuredPost.catSlug}/${featuredPost.slug}`}>
          <button
          className="px-[20px] py-[16px] rounded-[5px] border-0 w-max">
            Read More
          </button>
          </Link>
        </div>
      </div>
      </>
    ))}
    </div>
  )
}

export default Featured