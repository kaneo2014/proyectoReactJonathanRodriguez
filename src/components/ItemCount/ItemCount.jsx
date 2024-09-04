import './ItemCount.scss'
import {useState} from 'react'

const ItemCount=({initial,stock,onAdd})=>{

    const [count,setCount]=useState(initial);

    const decrement =()=>{
        if(count>initial){
        setCount(count - 1)
        }
    }
    const increment =()=>{
        if(count<stock){
            setCount(count + 1)
        }
        
    }
    
    
    return(
        <div className='add'>
            <div className='addCart'>
                <button onClick={decrement}>-</button>
                <h1>{count}</h1>
                <button onClick={increment}>+</button>
            </div>
            <button  className="bAddCart" onClick ={()=>onAdd(count)}>Agregar carrito</button>
        </div>
    )

}
export default ItemCount;


