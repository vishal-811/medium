import { Button } from "../components/Button"
import { InputLabel } from "../components/InputLabel"


export const Signup=()=>{
    return(
        <div className="pt-10 ps-3 pe-3 md:pt-12 h-screen">
        <div  className="flex flex-col max-w-md mx-auto  border border-gray-200 dark:border-gray-800 shadow-2xl rounded-2xl p-4 bg-white dark:bg-zinc-900">
            <div  className="flex flex-col ps-4">
                 <h2 className="font-italic text-xl tracking-tight font-bold text-zinc-800 dark:text-white mb-4">BlogBuddy</h2>
                 <div>
                    <h2 className="text-2xl font-medium text-zinc-900  dark:text-zinc-200 tracking-tight">Create your account</h2>
                    <p className="text-zinc-500 dark:text-zinc-400 tracking-wider">to continue to BlogBuddy</p>
                 </div>
                <InputLabel labeltext={"Username"} placeholdertext={"Enter your username"} inputtype={"text"} Errortext="please provide minimum 4 length"/>
                <InputLabel labeltext={"Email address"} placeholdertext={"Enter your email"} inputtype={"email"} Errortext="couldn't find account"/>
                <InputLabel labeltext={"Password"} placeholdertext={"Enter your password"} inputtype={"password"} Errortext="invalid password"/>
                <Button text={"Sign up"}/>
                 <div className="mt-3 mb-6">
                    <small className="text-sm text-sky-400">Hooray <span className="text-lg">🎉,</span> account created successfully</small>
                 </div>
            </div>
       </div>
    </div>
    )
}