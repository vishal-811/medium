import { useState } from "react"
import { Button } from "../components/Button"
import { InputLabel } from "../components/InputLabel"
import { SignupParams } from "@vishal-811/common"
import axios from "axios"
import { useNavigate } from "react-router-dom"
import { Link } from "react-router-dom"

export const Signup=()=>{
   const [signPostParams, setSignPostParams] =useState<SignupParams>({  //to make it more secure take types from common folder (backend).
         username:"",
         email:"",
         password:""
   })
       const [errortext , setErrorText] =useState('');
        const [signSuccess , setSignSuccess] =useState(false);
        const navigate =useNavigate();
  return(
        <div className="pt-10 ps-3 pe-3 md:pt-12 h-screen">
        <div  className="flex flex-col pb-7 max-w-md mx-auto  border border-gray-200 dark:border-gray-800 shadow-2xl dark:shadow-sm rounded-2xl p-4 bg-white dark:bg-zinc-900">
            <div  className="flex flex-col ps-4">
                 <h2 className="font-italic text-xl tracking-tight font-bold text-zinc-800 dark:text-white mb-4">BlogBuddy</h2>
                 <div>
                    <h2 className="text-2xl font-medium text-zinc-900  dark:text-zinc-200 tracking-tight">Create your account</h2>
                    <p className="text-zinc-500 dark:text-zinc-400 tracking-wider">to continue to BlogBuddy</p>
                 </div>
                <InputLabel labeltext={"Username"} placeholdertext={"Enter your username"} inputtype={"text"} Errortext={errortext==='Username'?"Username":undefined} 
                      errorColor={errortext ==='Username' ? true : false}
                    onChange={(e)=>{
                          setErrorText('');
                         setSignPostParams({
                            ...signPostParams,
                            username:e.target.value
                         })
                    }}
                />
                <InputLabel labeltext={"Email address"} placeholdertext={"Enter your email"} inputtype={"email"} Errortext={errortext==='email'?"Email":undefined}
                       errorColor={errortext ==='email' ? true : false}
                       onChange={(e)=>{
                        setErrorText('');
                        setSignPostParams({
                           ...signPostParams,
                           email:e.target.value
                        })
                   }}
                />
                <InputLabel labeltext={"Password"} placeholdertext={"Enter your password"} inputtype={"password"} Errortext={errortext === 'password'?'Password':undefined}
                 errorColor={errortext ==='password' ? true : false}
                      onChange={(e)=>{
                        setErrorText('');
                        setSignPostParams({
                           ...signPostParams,
                           password:e.target.value
                      })
                 }}
                />
                <Button text={"Sign up"} 
                onClick={async()=>{

                  // Valiadte Input fields
                     if(!signPostParams.username){
                          setErrorText("Username");
                          return;
                     }
                     if (!signPostParams.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(signPostParams.email)) {
                        setErrorText('email');
                        // setLoading(false);
                        return;
                      }
                      if (!signPostParams.password) {
                        setErrorText('password');
                        // setLoading(false);
                        return;
                      }


                   try {
                        const response =await axios.post('https://backend.vishalssharma811.workers.dev/api/v1/user/signup',{
                           ...signPostParams  //sending parameters
                        })
                            console.log(response);
                            if(response.status === 200){
                                setSignSuccess(true);
                                navigate('/')
                            }
                       } catch (error:any) {
                           console.log(error);
                           setErrorText(error.response.data.msg)
                        }
                }}/>

                         {signSuccess && (
                            <div className="mt-3 mb-6">
                            <small className="text-sm text-sky-400">Hooray <span className="text-lg">🎉,</span> account created successfully</small>
                           </div>
                          )}
                          {errortext===('User already exist with this credentials' || 'Error While Signup' ||'plz provide  a valid inputs')
                          && (
                             <small className="text-sm text-red-500 pt-1">{errortext}</small>
                          )}

                       <div className="mt-6 flex items-center space-x-1 mb-8">
                       <p className="text-sm text-black dark:text-white">Have an account?</p>
                        <Link to={'/signin'}>
                        <p className="text-lg text-green-500 dark:text-green-300 tracking-tight"> Sign in</p>
                       </Link>
                        </div>
            </div>
       </div>
    </div>
    )
}