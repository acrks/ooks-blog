import Image from "next/image";
import Featured from "./components/Featured/featured"
import CategoryList from "./components/CategoryList/CategoryList"
import PostList from "./components/PostList/PostList"
import prisma from "@/utils/connect"
import { NextResponse } from 'next/server'
import { Category, Post } from "@prisma/client";

const getData = async () => {
  try {
    const categories = await prisma.category.findMany()
    return categories
} catch (err) {
    console.log(err)
    return new NextResponse(
        JSON.stringify({message: "Something went wrong!"})
    );
}
}

const getFeaturedPosts = async () => {
    try {
      const posts = await prisma.post.findMany({
        where: {
          featured: true
        }
      })
      return posts
    } catch (err) {
      console.log(err)
      return new NextResponse(
          JSON.stringify({message: "Something went wrong!"})
      );
  }
}

const getRecentPosts = async () => {
  try {
    const posts = await prisma.post.findMany({
      take: 5,
      orderBy: {
        createdAt: 'desc',
      },
    })
    return posts
  } catch (err) {
    console.log(err)
    return new NextResponse(
        JSON.stringify({message: "Something went wrong!"})
    );
}
}

const Home = async () => {
  const categories = await getData();
  const featuredPosts = await getFeaturedPosts();
  const recentPosts = await getRecentPosts();

  return (
    <main className="flex min-h-screen flex-col items-left p-24">
            {/* Title */}
      <h1 className='text-[96px]'>
      <b>Hey, Alex here!</b><br/>Read up on what projects I have cooking and my past work.
      </h1>
    <Featured
      featuredPosts = {featuredPosts}
    />
      <CategoryList
      categories = {categories}
      />
    <PostList 
      recentPosts = {recentPosts}
    />
    </main>
  );
}

export default Home
