
import Navbar from './components/NavBar/Navbar'
import ItemListContainer from "./components/ItemListContainer/ItemListContainer"
import './App.scss'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import{BrowserRouter,Routes,Route} from "react-router-dom"
import CartProvider from './context/CartContex/CartProvider'
import Cart from './components/Cart/Cart'
import Checkout from './components/Checkout/Checkout'
import { useEffect, useState } from 'react'
import { db } from './main'
import { getFirestore,collection,getDocs} from 'firebase/firestore'

const App =()=> {
  const [products,setProducts]=useState([])
  useEffect(()=>{
    const db =getFirestore()
    const itemsCollection = collection(db,"item")
    getDocs(itemsCollection).then((snapshot)=>{
    setProducts(snapshot.docs.map((doc)=>({id:doc.id,...doc.data()})));
  });
},[]);


    return (
    <>
    <CartProvider>
        <BrowserRouter>
        <Navbar/>
          <Routes>
          <Route path='/' element={<ItemListContainer><h1> Nuestros Productos</h1></ItemListContainer>}/>
          <Route path='/category/:categoryId' element={<ItemListContainer><h1>Categoria: </h1></ItemListContainer>}/>
          <Route path='item/:id' element={<ItemDetailContainer/>}/>
          <Route path='/Cart' element={<Cart/>}/>
          <Route path='/checkout' element={<Checkout/>}/>
          <Route path='*' element={<ItemListContainer></ItemListContainer>}/>
        </Routes>
      </BrowserRouter>
      </CartProvider>
    </>
  )
}
export default App

