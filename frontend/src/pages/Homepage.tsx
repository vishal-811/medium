import Typewriter from 'typewriter-effect'


export const HomePage=()=>{
    return(
        <div className="select-none h-screen">
              <div className="mt-5  ps-2 pe-2 md:ps-0 md:pe-0">
              <h1 className="text-4xl md:text-6xl font-bold mb-5 mt-20 relative text-center
               text-zinc-700 dark:text-zinc-300  md:mx-auto max-w-4xl md:max-w-6xl !leading-snug">Creating stunning, high-performance
               blogs that  <br className="md:hidden block"/> <span className="relative bg-clip-text text-transparent
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
                     strings: ["Discover the possibilities.", "Create something cool.", "Connect with your audience."],
                     autoStart: true,
                      loop: true,
                      }}
/>
             </div>
       </div>
            
        </div>
    )
}