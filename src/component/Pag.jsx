function Pag({currentPage,
    allPage,
    setPage,}){
    return(
        <div className="flex items-center gap-5 mt-10">
            <button className="px-3 py-2 bg-blue-500 rounded text-amber-50 font-bold" disabled={currentPage === 1} onClick={()=>setPage(currentPage-1)} >Last</button>

            {[...Array(allPage)].map((_,index)=>(
                <button
                className={`w-10 h-10 rounded-full font-bold ${currentPage===index+1 
                    ? "bg-blue-400 text-amber-50":"bg-gray-200"}
                key={index} 
                onClick={()=>setPage(index+1)}`}>
                        {index+1}
                </button>

            ))}

            <button className="px-3 py-2 bg-blue-500 rounded text-amber-50 font-bold" disabled={currentPage===allPage}
            onClick={()=>setPage(currentPage+1)}>
                Next
            </button>


        </div>
    )
}
export default Pag