import { Link, useNavigate } from "react-router-dom";
import { Button } from "../components/Button";
import { InputLabel } from "../components/InputLabel";
import { useState } from "react";
import { signinParams } from "@vishal-811/common";
import axios from "axios";

export const Signin = () => {
  const [errortxt, setErrortxt] = useState('');
  const [loading, setLoading] = useState(false);
  const [postInputs, setPostInputs] = useState<signinParams>({
    email: "",
    password: ""
  });

    const navigate =useNavigate();
  return (
    <div className="pt-10 ps-3 pe-3 md:pt-24 h-screen">
      <div className="flex flex-col max-w-md mx-auto border border-gray-200 dark:border-gray-800 shadow-4xl rounded-2xl p-4 bg-white dark:bg-zinc-900">
        <div className="flex flex-col ps-4">
          <h2 className="font-italic text-xl tracking-tight font-bold text-zinc-800 dark:text-white mb-4">BlogBuddy</h2>
          <div>
            <h2 className="text-2xl font-medium text-zinc-900 dark:text-zinc-200 tracking-tight">Sign in</h2>
            <p className="text-zinc-500 dark:text-zinc-400">to continue to BlogBuddy</p>
          </div>
          <InputLabel
            labeltext={"Email address"}
            placeholdertext={"Enter your email"}
            inputtype={"email"}
            Errortext={errortxt === 'email' ? "Email" : undefined}
            onChange={(e) => {
              setErrortxt('');
              setPostInputs({
                ...postInputs,
                email: e.target.value
              });
            }}
          />
          <InputLabel
            labeltext={"Password"}
            placeholdertext={"Enter your password"}
            inputtype={"password"}
            Errortext={errortxt === 'password' ? "Password" : undefined}
            onChange={(e) => {
              setErrortxt('');
              setPostInputs({
                ...postInputs,
                password: e.target.value
              });
            }}
          />
          <Button
            text={loading ? "Signing in..." : "Sign in"}
            onClick={async () => {
              setLoading(true);

              // Validate input fields 
              if (!postInputs.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(postInputs.email)) {
                setErrortxt('email');
                setLoading(false);
                return;
              }
              if (!postInputs.password) {
                setErrortxt('password');
                setLoading(false);
                return;
              }

              try {
                const response = await axios.post("https://backend.vishalssharma811.workers.dev/api/v1/user/signin", {
                  ...postInputs   // send email  password by using spread opearator
                });
               //  console.log(response);
                setLoading(false);
                  if(response.status===200){
                     console.log(response.data.token);
                     navigate('/');
                  }
              } catch (error: any) {
                setErrortxt("Couldn't find account");
                console.log(error.response.data.msg);
                setLoading(false);
              }
            }}
            // disabled={loading}
          />

          <div className="flex flex-col mt-1">
            {/* Show if any error */}
            {errortxt && (
              errortxt === "User doesn't exist with this credentials,Please signup" ?
                <small className="text-sm text-red-500">{errortxt}</small> : undefined
            )}
            <div className="mt-3 flex items-center space-x-1 mb-8">
              <p className="text-sm text-black dark:text-white">No account?</p>
              <Link to={'/signup'}>
                <p className="text-lg text-green-500 dark:text-green-300 tracking-tight"> Sign Up</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
