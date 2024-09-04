import React from 'react'
import { useContext } from 'react'
import {CartContext} from "../../context/CartContex/CartProvider"

    const Cart = () => {
        const {cart}=useContext(CartContext)
        return (
            <div>
                {cart.leng === 0 ? (
                <p>no hay productos en el carrito</p>
                ):(
                <>
                    {cart.map((item)=>(
                        <div key={item.product.id}>
                            <p>{item.product.name}</p>
                            <p>{item.quantity}</p>
                        </div>
                    ))}
                </>
                )}
            </div>
        )
    }
export default Cart