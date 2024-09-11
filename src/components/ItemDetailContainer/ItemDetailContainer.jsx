import "./ItemDetailContainer.scss"
import React, { useState,useEffect } from 'react'
import ItemDetail from "../ItemDetail/ItemDetail"
import { useParams } from "react-router-dom"
import Spinner from "../Spinner/Spinner"
import { getFirestore,getDoc,doc } from "firebase/firestore"

const ItemDetailContainer =()=> {

    const [product,setProduct] = useState(null);
    const {id}=useParams();

    useEffect(()=>{
        const db= getFirestore()
        const newDoc =doc(db,"item",id)
        
        getDoc(newDoc).then(res=>{
            const data=res.data()
            const newProduct ={id:res.id,...data}
            setProduct(newProduct)

        }) 
    },[id]) 

    return (
    <div>
        {product==undefined ?<Spinner/>:<ItemDetail product={product}/>}
    </div>
    )
}

export default ItemDetailContainer