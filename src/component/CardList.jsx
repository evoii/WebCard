import Card from "./Card";

function Cardlist({post,removeCard}){
    return(
        <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
            {post.map((item)=>(
                <Card
                key={item.id}
                post={item}
                removeCard={removeCard}/>

            ))}
        </div>
    )
}
export default Cardlist