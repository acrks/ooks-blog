import React from 'react'
import CategoryPagePostList from '@/app/components/CategoryPagePostList/CategoryPagePostList'
import { getAllCategoriesAndPosts } from '../api/functions'


const page = async () => {

  const categories = await getAllCategoriesAndPosts();

  return (
    <div className='flex flex-col page-div gap-10'>
      {categories?.map((category) => (
        <CategoryPagePostList
        key={category.id} 
        {...category}/>
      ))}
    </div>
  )
}

export default page