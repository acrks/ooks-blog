import React from 'react'
import SinglePost from '@/app/components/SinglePost/SinglePost'
import { getSinglePostById } from '@/app/api/functions';

const SinglePostPage = async ({ params }) => {

  const data = await getSinglePostById(params.id);

  return (
    <div className="page-div">
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