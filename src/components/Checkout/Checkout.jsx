import { useState, useContext } from 'react';
import { CartContext } from '../../context/CartContex/CartProvider';
import { getFirestore, collection, addDoc, updateDoc, doc, getDoc } from 'firebase/firestore';

const Checkout = () => {
  const { cart, getTotal, clearCart } = useContext(CartContext);

  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [celular, setCelular] = useState('');
  const [email, setEmail] = useState('');
  const [emailConfirmacion, setEmailConfirmacion] = useState('');
  const [error, setError] = useState('');
  const [orderId, setOrderId] = useState('');
  const [loading, setLoading] = useState(false);

  const handleForm = async (e) => {
    e.preventDefault();

 
    if (!nombre || !apellido || !celular || !email || !emailConfirmacion) {
      setError('Por favor completa todos los campos');
      return;
    }

    if (email !== emailConfirmacion) {
      setError('Los correos electrónicos no coinciden');
      return;
    }

    setLoading(true); // Inicia el estado de carga
    setError('');

    const db = getFirestore();
    const order = {
      items: cart.map((product) => ({
        id: product.product.id,
        name: product.product.name,
        quantity: product.quantity,
      })),
      total: getTotal(),
      date: new Date(),
      nombre,
      apellido,
      celular,
      email,
    };

    try {
      // Actualización del stock y creación de la orden
      await Promise.all(
        order.items.map(async (productOrder) => {
          const productRef = doc(db, 'item', productOrder.id);
          const productDoc = await getDoc(productRef);
          const stock = productDoc.data().stock;
          await updateDoc(productRef, {
            stock: stock - productOrder.quantity,
          });
        })
      );

      const docRef = await addDoc(collection(db, 'orders'), order);
      setOrderId(docRef.id);
      clearCart();
    } catch (error) {
      console.error('Error al procesar la orden:', error);
      setError('Ocurrió un error al procesar la orden. Por favor, inténtalo nuevamente.');
    } finally {
      setLoading(false); // Finaliza el estado de carga
    }
  };

  return (
    <div>
      <h2>Ingresa tus datos</h2>

      <div>
        {cart.map((product) => (
          <div key={product.product.id}>
            <p>{product.product.name}</p>
            <p>Precio: {product.product.price}</p>
            <hr />
          </div>
        ))}
      </div>

      <form onSubmit={handleForm}>
        <div>
          <label>Nombre</label>
          <input type="text" onChange={(e) => setNombre(e.target.value)} />
        </div>
        <div>
          <label>Apellido</label>
          <input type="text" onChange={(e) => setApellido(e.target.value)} />
        </div>
        <div>
          <label>Celular</label>
          <input type="number" onChange={(e) => setCelular(e.target.value)} />
        </div>
        <div>
          <label>Email</label>
          <input type="email" onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div>
          <label>Confirmar Email</label>
          <input type="email" onChange={(e) => setEmailConfirmacion(e.target.value)} />
        </div>

        <button type="submit" disabled={loading}>
          {loading ? 'Procesando...' : 'Generar orden de compra'}
        </button>

        {error && <p style={{ color: 'red' }}>{error}</p>}
        {orderId && <p>¡Gracias por tu compra! Tu número de orden es: {orderId}</p>}
      </form>
    </div>
  );
};

export default Checkout;