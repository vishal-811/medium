
import { useNavigate } from 'react-router-dom'
import Homeimage from '../assets/Homepage.png'

export const ReadBlogContainer=()=>{
       const navigate = useNavigate();
     return(
    <div className="md:mt-32 mt-24 max-w-xl md:max-w-6xl mx-auto ps-12 pe-8 md:ps-0 md:pe-0 pb-6 ">
            <div className="flex justify-center items-center">
                  <h2 className="text-2xl md:text-6xl tracking-wide  font-bold text-zinc-900 dark:text-zinc-100">Read all blogs in one place</h2>
            </div>

            <div className="mt-10 w-full grid grid-cols-1 md:grid-cols-[2fr_2.5fr] gap-9 md:gap-0">

                      {/* Text Div */}
              <div className='pt-0 md:pt-10 md:w-[75%] w-full'>
                    <div className=''>
                         <p className='text-lg text-zinc-700 dark:text-zinc-200 tracking-tight'>Explore a world of insights, stories, and inspiration.
                            From tech tips to travel tales, we’ve got blogs for every
                            curious mind. No more searching,  find all your favorite reads
                            right here, all in one place!
                        </p>
                    </div>
                    {/* Read Blog Button */}
                    <div className='md:pt-12 pt-5 text-center'>
                       <button onClick={()=>{
                          navigate('/blogs')
                       }} className='bg-black  w-full md:w-fit  dark:bg-blue-600 ps-12 pe-12 pt-5 pb-5 rounded-xl text-white flex justify-center items-center hover:scale-105 text-lg transition-transform duration-500 ease-in-out'>
                          Read Blogs
                       </button>
                    </div>

              </div>
                       {/* Image div */}
              <div className="relative flex flex-row bg-gray-300 dark:bg-gray-700 p-1 rounded-lg w-full shadow-2xl shadow-zinc-900 dark:shadow-gray-500  h-56 md:h-96">
                  <div className="bg-gray-800 dark:bg-gray-900 shadow-lg shadow-zinc-900 rounded-lg p-3">
                       <div className="rounded-lg bg-white h-full overflow-hidden w-full">
                       <img
                          className="rounded-lg object-fill"
                          src={Homeimage}
                          srcSet={`${Homeimage} 480w,
                                   ${Homeimage} 768w,
                                   ${Homeimage} 1200w`}
                                   sizes="(max-width: 480px) 100vw,
                                     (max-width: 768px) 50vw,
                                       33vw"
                                 loading='lazy'
                                 decoding='async'
                                 alt="Home"
                        />

                       </div>
                  </div>
              </div>
        
          </div>
    </div>
     )
}