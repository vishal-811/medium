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
            }
        };

        fetchBlog();
    }, [id]);

    return { blog };
};
