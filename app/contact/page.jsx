import React from 'react'
import Carousel from '@/app/components/Carousel/Carousel'
import { NextResponse } from 'next/server'
import prisma from '@/utils/connect'

const getFeaturedPosts = async () => {
    try {
      const posts = await prisma.post.findMany()
      return posts
    } catch (err) {
      console.log(err)
      return new NextResponse(
          JSON.stringify({message: "Something went wrong!"}, {status: 500})
      );
  }
}

const page = async () => {
    const featuredPosts = await getFeaturedPosts();

  return (
    <div className='p-10'>
        <Carousel 
        posts = {featuredPosts}/>
    </div>
  )
}

export default page
