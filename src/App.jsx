import { useEffect, useState } from 'react'
import Loader  from './component/Loader'
import Cardlist from './component/CardList'

import {default as ReactPaginate} from "react-paginate"
function App(){
  const[post,setPost]=useState([])
  const[loading, setLoading] = useState(true)
  const [currentPage,setPage]=useState(1)
  


  useEffect(()=>{
  const fetchPost=async()=>{
       try{const response = await fetch("https://jsonplaceholder.typicode.com/posts")
      const data=await response.json();


      //Loader time 5 seconds
setTimeout(()=>{
  setPost(data)
  setLoading(false)

},5000)
    }catch(error){
      console.log(error);
      
    }}
  fetchPost();
  },[]
)


//remove card
const CardRemove=(id)=>{
  setPost((prevpost)=>prevpost.filter((post)=>post.id !==id))
}
//pagination
const cardInPage=6
const indexLastCard = currentPage*cardInPage
const indexFirstCard = indexLastCard-cardInPage

const currentPages=post.slice(
  indexFirstCard,
  indexLastCard
);

const allPage=Math.ceil(post.length/cardInPage);

if (loading) {
  return <Loader/>
}

  return(
    <>
    <div className="bg-gray-400">
      
      <Cardlist post={currentPages}
      removeCard={CardRemove}
      />
   

      <ReactPaginate.default
      previousLabel={"Previous"}
      nextLabel={"Next"}
      breakLabel={"....."}
      pageCount={allPage}  
      pageRangeDisplayed={3}
      marginPagesDisplayed={0}
      onPageChange={({selected})=>setPage(selected + 1)}
      containerClassName="flex justify-center items-center gap-2 mt-10"
      pageLinkClassName='w-10 h-10 flex items-center justify-center rounded-full bg-gray-300 hover:bg-blue'
      activeLinkClassName='bg-blue-400 text-white'
      previousLinkClassName='px-4 py-2 bg-blue-500 text-white rounded'
      nextLinkClassName='px-4 py-2 bg-blue-500 text-white rounded'
      disabledLinkClassName='opacity-50 cursor-not-allowed'
        
      />
      
      
   
</div>
    </>
  )
}
export default App