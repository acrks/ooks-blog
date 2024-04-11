import React from 'react'
import prisma from '@/utils/connect';
import { NextResponse } from "next/server"
import SinglePost from '@/app/components/SinglePost/SinglePost'

const getData = async (catSlug: string, slug:string) => {
    try {
        const post = await prisma.post.findFirst({
            where: {
                AND: [
                    {catSlug: catSlug},
                    {slug: slug}
                ]
            },
        })
        return post
    } catch (err) {
        console.log(err)
        return new NextResponse(
            JSON.stringify({message: "Something went wrong!"})
        );
    }
}


const SinglePostPage = async ({ params }: { params: { slug: string, id:string } }) => {

    const data = await getData(params.slug, params.id);

  return (
    <div>
        <SinglePost 
            img = {data.img}
            body = {data.body}
            title = {data.title}
            createdAt = {data.createdAt}
        />
    </div>
  )
}

export default SinglePostPage
