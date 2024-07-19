


export const Loader=()=>{
    return(
        <div className="rounded-md p-8 md:max-w-2xl max-w-lg mx-auto mt-12">
        <div className="animate-pulse flex space-x-4">
          <div className="rounded-full bg-slate-700 h-6 w-6"></div>
          <div className="flex-1 space-y-6 py-1">
            <div className="h-2 bg-slate-700 rounded w-24"></div>
            <div className="space-y-3">
              <div className="grid grid-cols-3 gap-4">
                <div className="h-2 bg-slate-700 rounded col-span-2"></div>
                <div className="h-2 bg-slate-700 rounded col-span-1"></div>
              </div>
              <div className="h-2 bg-slate-700 rounded"></div>
              <div className="h-2 bg-slate-700 rounded w-24"></div>
            </div>
          </div>
        </div>
      </div>
    )
}