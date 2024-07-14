

interface BlogProps{
    authorName :string,
    title:string,
    content:string,
    publishedDate:string
}
export const BlogCard:React.FC<BlogProps>=({authorName,title,content,publishedDate})=>{
    return(
        <div className="mt-4 pt-8 select-none">
              <div className="bg-gray-50 rounded-md dark:bg-zinc-800  cursor-pointer">
                    <div className="flex flex-col space-y-2 p-6">
                       <div className="flex items-center space-x-3">
                          <div className="mb-2 flex space-x-4">
                              <Avatar name={authorName}/>
                              <p className="text-zinc-950 dark:text-zinc-300">{authorName}</p>  
                          </div>
                           
                       </div>
                        <h2 className="text-2xl font-bold text-black tracking-tight dark:text-white">{title}</h2>
                        <p className="text-lg text-zinc-900 dark:text-zinc-400">{content.slice(0,150)+"...."}</p>

                        <div className="flex flex-row space-x-2 items-center">
                              <p className="text-sm text-zinc-600 dark:text-zinc-500 tracking-tight">{publishedDate}</p>
                              <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="16"
                                  height="16"
                                  fill="currentColor"
                                  viewBox="0 0 16 16"
                                  className="text-black dark:text-white"
                               >
                         <path d="M8 3a.5.5 0 0 1 .5.5V8h3a.5.5 0 0 1 0 1H8.5v4.5a.5.5 0 0 1-1 0V8a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1H8V3.5A.5.5 0 0 1 8 3z" />
                            <path fillRule="evenodd" d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0zm0 1a7 7 0 1 0 0 14A7 7 0 0 0 8 1z" />
                      </svg>



                              <p className="text-sm text-zinc-600  dark:text-zinc-500 tracking-tight">{`${Math.ceil(content.length/100)}`} minutes reads</p>
                        </div>
                    </div>
              </div>
        </div>
    )
}


function Avatar({name}: { name:string}){
    return (
        <div className="relative inline-flex items-center justify-center h-6 w-6 overflow-hidden bg-zinc-200 rounded-full  dark:bg-gray-600 p-2">
              <span className="font-medium text-gray-600 dark:text-gray-300 ">{name[0]}</span>
        </div>
    )
}