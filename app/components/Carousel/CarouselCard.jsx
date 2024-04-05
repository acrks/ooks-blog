import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const CarouselCard = ({post}) => {
  return (
    <div
      key={post.id} 
      className={`flex flex-row flex-shrink-0 w-full items-center gap-[50px] bg-[#16131a] rounded-lg drop-shadow-[0px_0px_5px_rgba(99,102,241,0.25)] hover:scale-[1.01] hover:drop-shadow-[0_0_10px_rgba(99,102,241,0.5)] transition-all duration-200`}>    
      {/* Image Container */}
      <div className="flex w-1/2 h-[500px] relative pr-10">
      <Image
      className="object-cover h-auto rounded-l-lg"
      src={post.img}
      alt=""
      fill />
    </div>
    {/* Text Container */}
    <div className="flex w-1/2 pr-10 flex-col gap-[20px]">
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
      className="px-[20px] py-[16px] rounded-[5px] border-0 w-max buttonhover">
        Read More
      </button>
      </Link>
    </div>
    </div>
  )
}

export default CarouselCard
