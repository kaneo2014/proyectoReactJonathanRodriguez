import './ItemCount.scss'
import {useState} from 'react'

const ItemCount=()=>{

    const [count,setCount]=useState(0);

    const decrement =()=>{
        if(count>1){
        setCount(count - 1)
        }
    }
    const increment =()=>{
        if(count<30){
            setCount(count + 1)
        }
        
    }
    
    const addToCart=()=>{
     alert(`se agregaron ${count} items al carrito`)

    }

    return(
        <div className='add'>
            <div className='addCart'>
                <button onClick={decrement}>-</button>
                <h1>{count}</h1>
                <button onClick={increment}>+</button>
            </div>
            <button  className="bAddCart" onClick ={addToCart}>Agregar carrito</button>
        </div>
    )

}
export default ItemCount;


