import { BlogCard } from "../components/BlogCard";
import { useBlog } from "../hooks/Blog"; // Adjust the import path if necessary

export const Blogs = () => {
  const { blogs, loading, error } = useBlog();
  console.log(blogs);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="max-w-2xl md:max-w-3xl mx-auto mt-12 divide-y divide-solid divide-zinc-300 dark:divide-zinc-700 h-screen">
      <p className="text-black text-xl font-bold tracking-tight dark:text-white">All Blogs</p>
      {blogs.map((blog:any) => (
        <BlogCard
          key={blog.id} // Ensure each child in a list has a unique key
          authorName={blog.author.username} // Use actual data from blogs
          title={blog.title} // Use actual data from blogs
          content={blog.content} // Use actual data from blogs
          publishedDate={blog.publishedDate} // Use actual data from blogs
        />
      ))}
    </div>
  );
};
