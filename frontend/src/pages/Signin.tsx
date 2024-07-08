import { Link } from "react-router-dom"
import { Button } from "../components/Button"
import { InputLabel } from "../components/InputLabel"


export const Signin=()=>{
    return(
              <div className="pt-10 ps-3 pe-3 md:pt-24 h-screen">
                  <div  className="flex flex-col max-w-md mx-auto  border border-gray-200 dark:border-gray-800 shadow-4xl rounded-2xl p-4 bg-white dark:bg-zinc-900">
                      <div  className="flex flex-col ps-4">
                           <h2 className="font-italic text-xl tracking-tight font-bold text-zinc-800 dark:text-white mb-4">BlogBuddy</h2>
                           <div>
                              <h2 className="text-2xl font-medium text-zinc-900 dark:text-zinc-200 tracking-tight">Sign in</h2>
                              <p className="text-zinc-500 dark:text-zinc-400">to continue to BlogBuddy</p>
                           </div>
                          <InputLabel labeltext={"Email address"} placeholdertext={"Enter your email"} inputtype={"text"} Errortext="couldn't find your account"/>
                          <InputLabel labeltext={"Password"} placeholdertext={"Enter your password"} inputtype={"password"} Errortext="invalid password"/>
                          <Button text={"Sign in"}/>
                           
                           <div className="mt-6 flex items-center space-x-1 mb-8">
                                <p className="text-sm text-black dark:text-white">No account?</p>
                                <Link to={'/signup'}>
                                   <p className="text-lg text-green-500 dark:text-green-300 tracking-tight"> Sign Up</p>
                                </Link>
                           </div>
                      </div>
                     
                 </div>
              </div>
    )
}

