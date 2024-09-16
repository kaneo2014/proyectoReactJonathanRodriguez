import "./CartDetail.scss"
import { useContext } from 'react';
import { CartContext } from '../../context/CartContex/CartProvider';
import { Link } from 'react-router-dom';

const CartDetail = () => {
  const { cart, getTotal, getTotalProducts, removeItem, clearCart } = useContext(CartContext);

  if (cart.length === 0) {
    return (
      <div>
        <h2>No hay productos en el carrito</h2>
        <Link to="/">
          <button>Volver a la tienda</button>
        </Link>
      </div>
    );
  }

  return (
    <div>
      <h2>Carrito de compras</h2>
      {cart.map((item) => (
        <div key={item.product.id} className="cardDeF">
          <img src={item.product.img} alt={item.product.name}></img>
          <p>{item.product.name}</p>
          <p>Cantidad: {item.quantity}</p>
          <p>Precio: ${item.product.price}</p>
          <button onClick={() => removeItem(item.product.id)}>Eliminar</button>
        </div>
      ))}
     <div className="summary">
      <h3>Total Productos: {getTotalProducts()}</h3>
      <h3>Total a Pagar: ${getTotal()}</h3>
      </div>
      <button className="ButtonCD" onClick={clearCart}>Vaciar Carrito</button>
      <Link to="/checkout">
        Comprar
      </Link>
    </div>
  );
};

export default CartDetail;