import React from 'react'
import CategoryPostList from '@/app/components/CategoryPostList/CategoryPostList'
import { getCategoryAndPostsBySlug } from '@/app/api/functions'

const CatPage = async ({ params }: { params: { slug: string } }) => {

  const data = await getCategoryAndPostsBySlug(params.slug)

  let posts = []

  if(Object.hasOwn(data, 'posts')) {
    posts = data.posts;
  }

  return (
    <div className="p-10">
      <CategoryPostList
      posts={posts} />
    </div>
  )
}

export default CatPage
