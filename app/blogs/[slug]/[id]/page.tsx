import React from 'react'
import prisma from '@/utils/connect';
import { NextResponse } from "next/server"
import SinglePost from '@/app/components/SinglePost/SinglePost'
import { getSinglePostByCatSlugAndSlug } from '@/app/api/functions';


const SinglePostPage = async ({ params }: { params: { slug: string, id:string } }) => {

  const data = await getSinglePostByCatSlugAndSlug(params.slug, params.id);

  return (
    <div className="p-10">
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
