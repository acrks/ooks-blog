import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const CarouselCard = (post) => {
  return (
        <div className="flex flex-row flex-shrink-0 w-full items-center border border-solid border-white gap-[50px]">
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
  )
}

export default CarouselCard
