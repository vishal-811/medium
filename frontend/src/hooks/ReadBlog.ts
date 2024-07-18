import axios from "axios";
import { useEffect, useState } from "react";

interface authortype{
    username: string;
    name: string;
    author:string
}
interface BlogType {
    title: string;
    content: string;
    author:authortype
}

export const useReadBlog = ({ id }: { id: string }) => {
    const [blog, setBlog] = useState<BlogType | null>(null);
    const [loading ,setLoading]=useState(true);
    useEffect(() => {
        const fetchBlog = async () => {
            try {
                const response = await axios.get(`https://backend.vishalssharma811.workers.dev/api/v1/blog/${id}`, {
                    headers: {
                        Authorization: "Bearer " + localStorage.getItem('token'),
                    },
                });
                setBlog(response.data.blog);
                console.log(response.data.blog)
            } catch (error) {
                console.error(error);
            }finally{
                setLoading(false);
            }
        };

        fetchBlog();
    }, [id]);

    return { blog ,loading};
};
