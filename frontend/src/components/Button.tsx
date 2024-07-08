
interface buttonProps{
    text:string
}

export const Button:React.FC<buttonProps>=({text})=>{
    return(
        <button className="mt-3 bg-green-500 rounded-md p-2 flex items-center justify-center shadow-sm hover:shadow-lg">
            <p className="text-white"> {text}</p>
        </button>
    )
}