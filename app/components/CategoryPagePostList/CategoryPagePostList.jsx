import React from 'react'
import Link from 'next/link'
import CategoryPagePostListCard from '@/app/components/CategoryPagePostList/CategoryPagePostListCard'

const CategoryPagePostList = (category) => {
  return (
      <div key={category.id} className='w-full drop-shadow-md'>
        <div className='py-3 px-5 bg-[#22004f] rounded-tl-xl'>
        <Link href={`/blogs/${category.slug}`}>
          <h2 className='text-[30px]'>{category.title}</h2>
        </Link>
        <p className='text-[20px] text-[color:var(--softTextColor)]'>{category.desc}</p>
        </div>
        <div className='flex flex-row bg-gradient-to-b from-slate-800 to-stone-950 gap-10 overflow-hidden p-2'>
        {category.posts.map((post) => (
          <CategoryPagePostListCard
          key={post.id} 
          {...post}/>
        ))}
        </div>
      </div>
  )
}

export default CategoryPagePostList
