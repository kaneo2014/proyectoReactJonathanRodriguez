import "./ItemList.scss"
import { Link, NavLink} from "react-router-dom"
import React from "react"
import Item from "../Item/Item"


const ItemList =({products})=>{
    return(
        
        <div className="cardsContainer">
            {products.map((item)=>(
            <Item key={item.id} item={item}/>
            ))}
        </div>
    )
}
export default ItemList;
