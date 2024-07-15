interface FullBlogProps {
    title: string;
    content: string;
    authorName:string
}

export const FullBlog = ({ title, content,authorName }: FullBlogProps) => {
    return (
        <div className="flex flex-col space-y-10 md:max-w-2xl max-w-lg mx-auto md:mt-16 mt-10 h-screen p-6">
            <div className="flex flex-col">
                <div className="pb-6">
                    <h2 className="text-4xl font-bold tracking-tight dark:text-white">{title}</h2>
                </div>
                <div>
                    <p className="text-lg font-medium text-zinc-800 tracking-tight dark:text-zinc-100">{content}</p>
                </div>
            </div>
            <div className="relative group">
             <p className="text-xl font-bold tracking-tight dark:text-zinc-400 hover:cursor-pointer p-1 relative">
              Written by {authorName}
            </p>
             <span
              className="absolute left-0 bottom-0 h-px transition-all duration-300 ease-in-out transform scale-x-0 group-hover:scale-x-100"
              style={{
               width: `${authorName.length * 21}px`,
               background: 'linear-gradient(90deg, rgba(29,78,216,1) 0%, rgba(102,126,234,1) 50%, rgba(99,102,241,1) 100%)',
               borderRadius: '2px'
              }}
            ></span>
        </div>

        </div>
    );
};
