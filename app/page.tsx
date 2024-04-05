import Featured from "./components/Featured/featured"
import CategoryList from "./components/CategoryList/CategoryList"
import PostList from "./components/PostList/PostList"
import { getAllCategories, getRecentPosts, getFeaturedPosts } from "./api/functions";


const Home = async () => {
  const categories = await getAllCategories();
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
