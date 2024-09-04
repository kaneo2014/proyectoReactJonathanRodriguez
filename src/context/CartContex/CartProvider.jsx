import{createContext,useState} from "react"
export const CartContext =createContext()

export const CartProvider=({children})=>{
    //Funcionalidades del carrito
    const[cart,setCart] =useState([])
    //Agregar al carrito
    const addItems= (product,quantity) =>{
        setCart([...cart,{product,quantity}])
    };
    
    //Ver si esta en el carrito
    const isInCart=() =>{};

    //Limpiar el carrito

    const clearCart=() =>{};

    //Total del carrito

    const getTotal=()=> {};

    //Total de productos en el carrito

    const getTotalProducts=()=>{}

    // Eliminar PRODUCTO DEL CARRITO

    const removeItem=()=>{

    } 
        return(
        <CartContext.Provider value={{
            cart,
            addItems,
            isInCart,
            clearCart,
            getTotal,
            getTotalProducts,
            removeItem,
        }}> {children} </CartContext.Provider>
    )
}
export default CartProvider