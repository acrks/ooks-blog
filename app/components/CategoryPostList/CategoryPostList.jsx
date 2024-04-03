import React from 'react'
import PostListCard from '@/app/components/PostList/PostListCard.jsx'

const CategoryPostList = ({posts}) => {
    let element = "";

    if(data?.length === 0) {
        element = (
        <h1 className='text-[30px]'>
            No posts for this category! Please come back later for some amazing content
        </h1>)
    }
    else {
        element = (
        <>
        <h1 className='text-[30px]'>
            <b>Recent Posts</b>
        </h1>
            <div className='p-10 text-left flex flex-col gap-10'>
            {posts?.map((post) => (
                <PostListCard
                key={post.id}
                {...post}
                />
            )
            )}
            </div>
            </>
        )
        
    }
  return (
    <div className='mt-[30px] flex-row grow justify-start text-center'>
        {element}
    </div>
  )
}

export default CategoryPostList