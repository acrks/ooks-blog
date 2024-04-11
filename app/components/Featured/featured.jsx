import React from 'react'
import Carousel from '@/app/components/Carousel/Carousel'
import CarouselCard from '../Carousel/CarouselCard'

const Featured = ({featuredPosts}) => {

  const header = featuredPosts.length == 1 ? 'Featured Post' : 'Featured Posts'
  if(featuredPosts.length == 1) {
    const featuredPost = featuredPosts[0];
    return (
      <div className="flex-row items-center mt-[50px] gap-y-10 z-10">
        <h1 className='text-[50px] mb-[50px]'><b>{header}</b></h1>
        <CarouselCard post={featuredPost}/>
      </div>
    )
  } else {
    return (
      <div className="flex-row items-center mt-[50px] gap-y-10 z-10">
      <h1 className='text-[50px] mb-[50px]'><b>{header}</b></h1>
      <Carousel 
      posts={featuredPosts}/>
      </div>
    )
  }
}

export default Featured