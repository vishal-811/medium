import axios from "axios";
import { useState } from "react";
 import { useNavigate } from "react-router-dom";
export const WriteBlog = () => {
           const navigate =useNavigate();
           const [title,setTitle] =useState("");
           const [content , setContent] =useState("");
           const [ispublished ,setIsPublished] =useState(false);
           const [errortxt, setErrorTxt] =useState('');
           const publishBlogHandler=async()=>{
                if(!title || !content){
                      setErrorTxt("Please fill all the input fields.");
                     return;
                }
              
                try {
                    const response = await axios.post(
                         "https://backend.vishalssharma811.workers.dev/api/v1/blog/post",
                         {
                           title,
                           content
                         },
                         {
                           headers: {
                             Authorization: "Bearer " + localStorage.getItem('token'),
                           }
                         }
                       );
                         
                         if(response.status === 200){
                              setTimeout(() => {
                                   setIsPublished(false);
                                   navigate('/blogs');
                                 }, 3000);
                         }
                } catch (error:any) {
                    setErrorTxt(error.response.data.msg)
                }
             
        }
     return (
       <div className="pt-24 max-w-6xl mx-auto p-2">
         <div>
           <div className="flex flex-col">
             <h2 className="md:text-4xl text-xl font-bold tracking-wide dark:text-white px-2">
               Write Your Blog
             </h2>
           </div>
           <div className="flex flex-col space-y-5 p-8">
             <label className="text-2xl text-zinc-700 tracking-tighter dark:text-zinc-300">
               Title
             </label>
             <input
                onChange={(e)=>{
                    setErrorTxt("")
                    setTitle(e.target.value)}}
               className="bg-transparent border border-zinc-600 dark:border-zinc-300 p-3 rounded-md placeholder:text-zinc-800 dark:placeholder:text-zinc-300 dark:text-zinc-300 text-zinc-900 focus:outline-none focus:border-blue-500 dark:focus:border-blue-900 shadow-md hover:shadow-lg transition-shadow duration-300"
               type="text"
               placeholder="Enter title of the blog..."
             />
           </div>
           <div className="flex flex-col space-y-5 p-8">
             <label className="text-2xl text-zinc-700 tracking-tighter dark:text-zinc-300">
               Content
             </label>
             <textarea
                onChange={(e)=>{
                      setErrorTxt("");
                    setContent(e.target.value)}}
               className="bg-transparent border border-zinc-600 dark:border-zinc-300 p-3 rounded-md placeholder:text-zinc-800 dark:placeholder:text-zinc-300 dark:text-zinc-300 text-zinc-900 focus:outline-none focus:border-blue-500 dark:focus:border-blue-900 shadow-md hover:shadow-lg transition-shadow duration-300 h-48"
               placeholder="Tell your story..."
               required
             />
           </div>
           <div className="flex flex-col justify-center items-center p-8 space-y-3">
             <button onClick={publishBlogHandler} className="bg-blue-500 text-white px-4 py-2 rounded-md shadow-md hover:bg-blue-600 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 md:w-32 w-full">
               Publish
             </button>
                {errortxt!=null && <span className="text-red-500 text-lg">{errortxt}</span>}
               {ispublished &&  <span className="text-lg text-green-400 ">Great 🎉, Blog Publish Successfully</span>}
           </div>
         </div>
       </div>
     );
   };
   