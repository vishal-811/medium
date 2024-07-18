import { FullBlog } from "../components/FullBlog";
import { useReadBlog } from "../hooks/ReadBlog";
import { useParams } from "react-router-dom";

export const ReadBlog = () => {
    const { id } = useParams<{ id: string }>();

    const { blog ,loading } = useReadBlog({ id: String(id) });
          if(loading){
            return <div>Loading ....</div>
          }
    return (
        <div>
            {blog ? (
                <FullBlog title={blog.title} content={blog.content} authorName={blog.author.username} />
            ) : (
                <div>Loading...</div>
            )}
        </div>
    );
};
