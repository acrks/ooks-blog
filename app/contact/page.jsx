import React from 'react'
import Carousel from '@/app/components/Carousel/Carousel'
import { getFeaturedPosts, getRecentPosts } from '../api/functions'
import Featured from '../components/Featured/featured';

const page = async () => {
    // TODO: CHANGE TO getFeaturedPosts
    const featuredPosts = await getRecentPosts();

    if (featuredPosts.length == 1) {
        return (
            <div>
                <Featured 
                featuredPosts={featuredPosts} />
            </div>
        )
    }

  return (
    <div className='p-10'>
        <Carousel 
        posts = {featuredPosts}/>
    </div>
  )
}

export default page
