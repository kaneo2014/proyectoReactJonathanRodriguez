import React, { useContext } from 'react';
import { CartContext } from "../../context/CartContex/CartProvider";
import CartDetail from "../CartDetail/CartDetail";
import { Link } from 'react-router-dom';

const Cart = () => {
    const { cart } = useContext(CartContext);

    return (
        <div>
            {cart.length === 0 ? (
                <div>
                    <h1>No hay productos en el carrito</h1>
                    <Link to="/">
                        <button>Volver a la tienda</button>
                    </Link>
                </div>
            ) : (
                <CartDetail cart={cart}/>
            )}
        </div>
    );
}

export default Cart;