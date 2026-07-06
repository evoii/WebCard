import { useEffect, useState } from 'react'
import Loader  from './component/Loader'
import Pag from './component/Pag'
import Cardlist from './component/CardList'
import Card from '../src/component/Card'

function App(){
  const[post,setPost]=useState([])
  const[loading, setLoading] = useState(true)
  const [currentPage,setPage]=useState(1)
  const cardInPage=6

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
      <div className="flex items-center justify-center">
        <Pag currentPage={currentPage}
      allPage={allPage}
      setPage={setPage}
      />
      </div>
      
</div>
    </>
  )
}
export default App