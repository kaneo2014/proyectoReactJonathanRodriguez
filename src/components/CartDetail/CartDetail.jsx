import { useContext } from 'react'
import { CartContext } from '../../context/CartContex/CartProvider'

import { Link } from 'react-router-dom';
const CartDetail = () => {
  const { cart, getTotal, getTotalProducts, removeItem, clearCart, buy } = useContext(CartContext);

  return (
    <div>
      <h2>Carrito de compras</h2>
      {cart.map((item) => (
        <div key={item.product.id} className="cardDe">
          <img src={item.product.img} alt={item.product.name}></img>
          <p>{item.product.name}</p>
          <p>Cantidad: {item.quantity}</p>
          <p>Precio: {item.product.price}</p>
          <button onClick={() => removeItem(item.product.id)}>Eliminar</button>
        </div>
      ))}
      <h3>Total Productos: {getTotalProducts()}</h3>
      <h3>Total a Pagar: $ {getTotal()}</h3>
      <button onClick={clearCart}>Vaciar Carrito</button>
            <Link to={"checkout"}>Comprar</Link>
    </div>
  );
}

export default CartDetail;
