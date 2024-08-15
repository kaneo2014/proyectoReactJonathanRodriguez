import "./ItemDetail.scss"
import React from 'react'
import ItemCount from "../ItemCount/ItemCount";

const ItemDetail = ({product}) => {
  if (!product) return <p>Cargando...</p>;
  return (
    <div className="cardDe">
        <h2>{product.name}</h2>
        <img src={product.img} alt={product.name}/>
        <h2>{product.category}</h2>
        <p>{product.description}</p>
        <p>${product.price}</p>
        <p>Stock :{product.stock}</p>
        <ItemCount></ItemCount>
    </div>
  )
}
export default ItemDetail