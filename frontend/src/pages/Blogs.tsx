import { BlogCard } from "../components/BlogCard";
import { useBlogs } from "../hooks/Blog";

export const Blogs = () => {
  const { blogs, loading, error } = useBlogs();

  if (loading) {
    return <div className="bg-white dark:bg-zinc-900">Loading...</div>;
  }

  if (error) {
    return <div className="bg-white dark:bg-zinc-900">Error: {error}</div>;
  }

  return (
    <div className="max-w-xl md:max-w-3xl mx-auto  divide-y divide-solid divide-zinc-300 dark:divide-zinc-700 ps-6 pe-6 md:ps-0 md:pe-0">
      <p className="text-black text-xl font-bold tracking-tight dark:text-white pb-4">All Blogs</p>
      {blogs.map((blog) => (
        <div key={blog.id}>
          <BlogCard
            authorName={blog.author.username}
            title={blog.title}
            content={blog.content}
            publishedDate={blog.publishedDate}
            id={blog.id}
          />
        </div>
      ))}

      <p></p>
    </div>
  );
};
