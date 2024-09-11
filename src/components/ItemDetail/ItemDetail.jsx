import "./ItemDetail.scss"
import {useState,React} from 'react'
import ItemCount from "../ItemCount/ItemCount";
import { useContext } from "react";
import {CartContext} from "../../context/CartContex/CartProvider";
import { Link } from "react-router-dom";

const ItemDetail = ({product}) => {

  const {addItems}=useContext(CartContext)
  const [showItemCount,setShowItemCount]=useState(true)
  const onAdd=(quantity)=>{
    addItems(product,quantity);
    setShowItemCount(false)
  };
  if (!product) return <p>Cargando...</p>;
  return (
    <div className="cardDe">
        <h2>{product.name}</h2>
        <img src={product.img} alt={product.name}/>
        <h2>{product.category}</h2>
        <p>{product.description}</p>
        <p>${product.price}</p>
        <p>Stock :{product.stock}</p>

        {showItemCount?(<ItemCount initial={1} stock={product.stock} onAdd={onAdd}/>):(<Link to="/cart">Terminar mi compra</Link>)}
        
    </div>
  )
}
export default ItemDetail