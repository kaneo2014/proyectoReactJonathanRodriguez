import{createContext,useState} from "react"
export const CartContext =createContext()

export const CartProvider=({children})=>{
    //Funcionalidades del carrito
    const[cart,setCart] =useState([])
    //Agregar al carrito
    const addItems= (product,quantity) =>{
   if(isInCart(product.id)){
    setCart(
        cart.map((item)=>
            item.product.id ===product.id
        ?{...item,quantity:item.quantity+quantity}:item
        )
    );
    }else{
        setCart([...cart,{product,quantity}])
    }
    };
    
    //Ver si esta en el carrito
    const isInCart=(productId) =>{
        return cart.some((item)=>item.product.id ===productId)
    };

    //Limpiar el carrito

    const clearCart=() =>{
        setCart([])
    };

    //Total del carrito

    const getTotal=()=> {
        return cart.reduce((total,item)=>total + item.product.price*item.quantity,0)

    };

    //Total de productos en el carrito

    const getTotalProducts=()=>{

        return cart.reduce((total,item)=>total + item.quantity,0)
    }

    // Eliminar PRODUCTO DEL CARRITO

    const removeItem=(productId)=>{
        setCart(cart.filter((item)=>item.product.id !== productId))

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