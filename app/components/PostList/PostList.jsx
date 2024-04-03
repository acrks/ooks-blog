import React from 'react'
import PostListCard from '@/app/components/PostList/PostListCard.jsx'

const PostList = ({recentPosts}) => {

    let element = "";

    if(recentPosts?.length === 0) {
        element = (<h1 className='text-[30px]'>
            No posts to display! Please come back later for some amazing content
            </h1>)
    }
    else {
        element = (
        <>
        <h1 className='text-[30px]'>
            <b>Recent Posts</b>
        </h1>
            <div className='flex flex-col gap-10 mt-[30px]'>
            {recentPosts?.map((recentPost) => (
                <PostListCard
                key={recentPost.id}
                {...recentPost}
                />
            )
            )}
            </div>
        </>)
    }
  return (
    <div className='mt-[30px] flex-row grow justify-start text-left'>
        {element}
    </div>
  )
}

export default PostList