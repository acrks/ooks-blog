import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { getDate } from '@/app/api/functions'

const CategoryPagePostListCard = (post) => {
  return (
        <Link href={`/blogs/${post.catSlug}/${post.slug}`}>
            <div key={post.id} className="ease-out duration-200 flex flex-col w-[500px] h-[400px] drop-shadow-[0_0_5px_rgba(191,191,191,0.15)] hover:drop-shadow-[0_0_5px_rgba(191,191,191,0.25)] hover:scale-[1.025]">
                <div className='flex overflow-hidden w-full h-[200px] relative rounded-t-lg'>
                    <Image src={post.img} alt="post list card here" className="w-full h-auto object-cover -z-50" fill={true}/>
                </div>
                <div className='flex flex-col h-[200px] justify-between p-3 bg-[#16131a] rounded-b-lg'>
                    <p className="text-[15px] font-light text-[color:var(--softTextColor)]">
                        {getDate(post.createdAt)}
                    </p>
                    <h2 className='text-[25px]'>{post.title}</h2>
                    <p className='text-[15px] text-[color:var(--softTextColor)]'>{post.desc}</p>
                </div>
                <div className='flex justify-center'>
                </div>
            </div>
        </Link>
  )
}

export default CategoryPagePostListCard
