import Link from 'next/link'
import React from 'react'
import CategoryPagePostList from '@/app/components/CategoryPagePostList/CategoryPagePostList'
import prisma from '@/utils/connect'
import { NextResponse } from 'next/server'

const getData = async () => {
  try {
      const category = await prisma.category.findMany({
          include: {
            posts: true,
          },
      })
      return category
  } catch (err) {
      console.log(err)
      return new NextResponse(
          JSON.stringify({message: "Something went wrong!"})
      );
  }
}

const page = async () => {

  const categories = await getData();

  return (
    <div className='flex flex-col p-10 gap-10'>
      {categories?.map((category) => (
        <CategoryPagePostList 
        {...category}/>
      ))}
    </div>
  )
}

export default page