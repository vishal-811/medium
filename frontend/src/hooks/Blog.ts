import axios from "axios";
import { useEffect, useState } from "react";


interface Author{
  username:string
}
interface Blogtype{
  id:string,
  title:string,
  content:string,
  author:Author,
  publishedDate:string
}
export const useBlogs = () => {
  const [blogs, setBlogs] = useState<Blogtype[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const token = localStorage.getItem('token');
        if (!token) {
          throw new Error("Token not found");
        }

        const response = await axios.get("https://backend.vishalssharma811.workers.dev/api/v1/blog/blogdetails/bulk", {
          headers: {
            authorization: 'Bearer ' + token
          }
        });
            //  console.log(response);
        setBlogs(response.data.blogs);
      } catch (err:any) {
        console.error(err);
        setError(err.message || "An error occurred");
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  return {
    loading,
    blogs,
    error,
  };
};
