import React from 'react'
import Carousel from '@/app/components/Carousel/Carousel'
import CarouselCard from '../Carousel/CarouselCard'

const Featured = ({featuredPosts}) => {

  const header = featuredPosts.length == 1 ? 'Featured Post' : 'Featured Post'

  if(featuredPosts.length == 1) {
    const featuredPost = featuredPosts[0];
    return (
      <div className="flex-row items-center mt-[30px] z-10">
        <h1 className='text-[60px]'>{header}</h1>
        <CarouselCard post={featuredPost}/>
      </div>
    )
  } else {
    <Carousel 
    posts={featuredPosts}/>
  }
}

export default Featured