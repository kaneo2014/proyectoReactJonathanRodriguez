import { useContext } from 'react';
import './Cartwidget.scss'
import { FaShoppingCart } from "react-icons/fa";
import { CartContext } from '../../context/CartContex/CartProvider';
import { Link } from 'react-router-dom';
const Cartwidget=()=>{

    const {getTotalProducts}=useContext(CartContext)
    return(
        <Link to={"/cart"} className='navCart'>
            
            <FaShoppingCart size="2rem" color='blue' />
            {getTotalProducts()===0 ?null:getTotalProducts()}
        </Link>
    )

}
export default Cartwidget;

