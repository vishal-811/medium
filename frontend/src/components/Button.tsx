
interface buttonProps{
    text:string
    onClick :()=>void
}

export const Button:React.FC<buttonProps>=({text,onClick})=>{
    return(
        <button onClick={onClick} className="mt-6 md:mt-8 bg-green-500 rounded-md p-2 flex items-center justify-center shadow-sm hover:shadow-lg">
            <p className="text-white"> {text}</p>
        </button>
    )
}