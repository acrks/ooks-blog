import { headers } from 'next/headers';
import prisma from '@/utils/connect';
import { NextResponse } from 'next/server'

export const getDomain = () => {
    const env = process.env.NODE_ENV
    let host = "";
    if(env === 'production') {
        // Add production url when available
    } else if (env === 'development') {
        const headersList = headers();
        host = headersList.get('host');
    } else {
        return 'Unable to determine env';
    }
    const string = `http://${host}`;
    return string;
}

export const getDate = (dateToConvert) => {
    const dateObj = new Date(dateToConvert)
    const month = dateObj.getMonth() + 1;
    const year = dateObj.getFullYear();
    const date = dateObj.getDate();
    return `${month}/${date}/${year}`;
  }

  export const getRecentPosts = async () => {
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
            JSON.stringify({message: "Something went wrong!"}, {status: 500})
        );
    }
  }

  export const getFeaturedPosts = async () => {
    try {
      const posts = await prisma.post.findMany({
        where: {
            featured: true
        },
        orderBy: {
            createdAt: 'desc',
          },
      })
      return posts
    } catch (err) {
      console.log(err)
      return new NextResponse(
          JSON.stringify({message: "Something went wrong!"}, {status: 500})
      );
  }
}

export const getAllCategories = async () => {
    try {
      const categories = await prisma.category.findMany()
      return categories
  } catch (err) {
      console.log(err)
      return new NextResponse(
          JSON.stringify({message: "Something went wrong!"}, {status: 500})
      );
  }
}

export const getAllCategoriesAndPosts = async () => {
    try {
        const categories = await prisma.category.findMany(({
            include: {
                posts: true
            }
        }))
        return categories
    } catch (err) {
        console.log(err)
        return new NextResponse(
            JSON.stringify({message: "Something went wrong!"}, {status: 500})
        );
    }
}

export const getCategoryAndPostsBySlug = async (slug) => {
    try {
        const category = await prisma.category.findUnique({
            where: {
                slug
            },
            include: {
              posts: true,
            },
        })
        return category
    } catch (err) {
        console.log(err)
        return new NextResponse(
            JSON.stringify({message: "Something went wrong!"}, {status: 500})
        );
    }
}

export const getSinglePostByCatSlugAndSlug = async (catSlug, slug) => {
    try {
        const post = await prisma.post.findFirst({
            where: {
                AND: [
                    {catSlug: catSlug},
                    {slug: slug}
                ]
            },
        })
        return post
    } catch (err) {
        console.log(err)
        return new NextResponse(
            JSON.stringify({message: "Something went wrong!"}, {status: 500})
        );
    }
}