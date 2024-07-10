import { ChangeEvent } from "react"

interface inputlabelProps{
    labeltext:string,
    placeholdertext:string,
    Errortext?:string,
    inputtype:string,
    errorColor?:boolean,
     onChange:(e: ChangeEvent<HTMLInputElement>) => void
    }


export const InputLabel:React.FC<inputlabelProps>=({labeltext ,placeholdertext ,Errortext,inputtype ,onChange,errorColor})=>{

    return(
        <div className="flex flex-col mt-5">
        <label className="text-zinc-700 mb-1 dark:text-zinc-100">{labeltext}</label>
        <input className={`${errorColor == true ?'border-red-600 dark:border-red-500':' border-zinc-300 dark:border-zinc-500 '} placeholder:italic placeholder:text-slate-400 block border
        rounded-md p-2 focus:outline-none focus:border-green-500 
         shadow-sm dark:bg-zinc-900 dark:focus:border-green-300 dark:placeholder:text-zinc-400 dark:text-white`}
          placeholder={placeholdertext} type={inputtype} required  onChange={ onChange }
          pattern={inputtype === "email" ? "[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,}$" : undefined}
        />
         
         {/* Error show */}
           {Errortext && (
             <div className="pt-2 flex flex-row space-x-1 items-center">
             <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14"
              className="text-red-600" width={14}>
              <path fill="currentColor" fillRule="evenodd" 
              d="M13.4 7A6.4 6.4 0 1 1 .6 7a6.4 6.4 0 0 1 12.8 0Zm-5.6 3.2a.8.8 0 1 1-1.6 0 .8.8 0 0 1 1.6 0ZM7 3a.8.8 0 0 0-.8.8V7a.8.8 0 0 0 1.6 0V3.8A.8.8 0 0 0 7 3Z" 
              clipRule="evenodd"></path></svg>
              <small className="text-sm  text-red-600 dark:text-red-500">{Errortext}</small>
             </div>
           )}
        </div>
    )
}