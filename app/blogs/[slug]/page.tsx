import React from 'react'
import CategoryPostList from '@/app/components/CategoryPostList/CategoryPostList'
import prisma from '@/utils/connect';
import { NextResponse } from "next/server"

const getData = async (slug: string) => {
  try {
      const category = await prisma.category.findUnique({
          where: {
              slug
          },
          include: {
            posts: true,
          },
      })
      return category
  } catch (err) {
      console.log(err)
      return new NextResponse(
          JSON.stringify({message: "Something went wrong!"}, {status: 500})
      );
  }
}

const CatPage = async ({ params }: { params: { slug: string } }) => {

  const data = await getData(params.slug)

  let posts = []

  if(Object.hasOwn(data, 'posts')) {
    posts = data.posts;
  }

  return (
    <div>
      <CategoryPostList
      posts={posts} />
    </div>
  )
}

export default CatPage
