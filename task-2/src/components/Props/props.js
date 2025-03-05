
import Cards from "../../App";
import  './props.css'

function Props(cardInfo){
    console.log(cardInfo);
    
    return(
            <div id="card">
                <img src={cardInfo.imgurl} width="300px" height="300px"/>
                <p>Title:({cardInfo.title})</p>
                <p>$:{cardInfo.price}</p>
                <p>Category:({cardInfo.category})</p>
                <button>{cardInfo.cartBtn}</button>
                <button>{cardInfo.buyNow}</button>
            </div>
    )
}
export default Props;