import { BlogCard } from "../components/BlogCard";
import { useBlog } from "../hooks/Blog"; // Adjust the import path if necessary

export const Blogs = () => {
  const { blogs, loading, error } = useBlog();
  // console.log(blogs);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="max-w-xl md:max-w-3xl mx-auto mt-12 divide-y divide-solid divide-zinc-300 dark:divide-zinc-700 h-screen p-5">
      <p className="text-black text-xl font-bold tracking-tight dark:text-white">All Blogs</p>
      {blogs.map((blog:any) => (
        <BlogCard
          key={blog.id}
          authorName={blog.author.username} 
          title={blog.title} 
          content={blog.content} 
          publishedDate={blog.publishedDate} 
        />
      ))}
    </div>
  );
};
