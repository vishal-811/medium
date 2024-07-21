import { useNavigate } from 'react-router-dom'
import Typewriter from 'typewriter-effect'
import { ReadBlogContainer } from '../components/ReadBlogContainer';
import { Footer } from '../components/Footer';
 


export const HomePage=()=>{
     const navigate =useNavigate();
    return(
        <div className="select-none">
              <div className="mt-5  ps-2 pe-2 md:ps-0 md:pe-0">
              <h1 className="text-4xl md:text-6xl font-bold mb-5 md:mt-12  relative text-center
               text-zinc-700 dark:text-zinc-300  md:mx-auto max-w-4xl md:max-w-6xl !leading-snug">Creating stunning, high-performance
               blogs that  <br className="md:hidden block"/>
                <span className="relative bg-clip-text text-transparent
                bg-gradient-to-t from-indigo-600 to-indigo-400/[0.8]">
                    captivate &amp; engage</span> 
              </h1>
              </div>

              <div className="max-w-4xl mx-auto px-6">
             <h3 className="text-md md:text-xl leading-snug tracking-tight text-center text-zinc-700 dark:text-zinc-400 ps-4 pe-4">
               Crafting visually appealing and high-performing blogs that engage readers
               with compelling content. Our designs aim to inspire and captivate, 
               fostering meaningful connections and leaving a lasting impression.
             </h3>

             <div className="flex mt-7 items-center justify-center space-x-6 md:space-x-16 text-2xl md:text-3xl font-bold
              tracking-normal bg-gradient-to-b from-orange-600 via-orange-400 to-yellow-400 bg-clip-text text-transparent">
                    <Typewriter
                    options={{
                     strings: ["Discover the possibilities.", "Create something cool.", "Connect with audience."],
                     autoStart: true,
                      loop: true,
                      }}
/>
             </div>
       </div> 

               {/* Write a Blog Button */}
               <div className='flex justify-center mx-auto mt-12'>
              <div className='relative rounded-full shadow-black shadow-2xl dark:border dark:border-slate-900 dark:shadow  group'>
              <button onClick={()=>{
                navigate('/writeblog')
              }} className='bg-zinc-900 ps-9 pe-9 pt-4 pb-4 rounded-full dark:bg-black relative flex justify-between items-center space-x-6'>
                <p className='text-white text-xl font-semibold tracking-tight z-10'>Write a blog</p>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" aria-label="Write" className='text-white'>
                <path fill="currentColor" d="M14 4a.5.5 0 0 0 0-1zm7 6a.5.5 0 0 0-1 0zm-7-7H4v1h10zM3 4v16h1V4zm1 17h16v-1H4zm17-1V10h-1v10zm-1 1a1 1 0 0 0 1-1h-1zM3 20a1 1 0 0 0 1 1v-1zM4 3a1 1 0 0 0-1 1h1z">
                </path><path stroke="currentColor" d="m17.5 4.5-8.458 8.458a.25.25 0 0 0-.06.098l-.824 2.47a.25.25 0 0 0 .316.316l2.47-.823a.25.25 0 0 0 .098-.06L19.5 6.5m-2-2 2.323-2.323a.25.25 0 0 1 .354 0l1.646 1.646a.25.25 0 0 1 0 .354L19.5 6.5m-2-2 2 2"></path></svg>

                <span className='absolute -bottom-px  h-px  w-[70%] left-[1rem] bg-gradient-to-r from-emerald-500/0  via-emerald-500  to-emerald-500/0 transition-opacity duration-300 opacity-100 group-hover:opacity-50'></span>
               </button>
              </div>
          </div>
                   {/* Div show a ReadBlog pic */}
                   <ReadBlogContainer/>
        </div>
    )
}