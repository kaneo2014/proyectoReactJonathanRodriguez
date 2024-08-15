
import Navbar from './components/NavBar/Navbar'
import ItemListContainer from "./components/ItemListContainer/ItemListContainer"
import './App.scss'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import{BrowserRouter,Routes,Route} from "react-router-dom"

function App() {
    return (
    <>
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/' element={<ItemListContainer><h1> Este es un componente hijo</h1></ItemListContainer>}/>
      <Route path='/category/:categoryId' element={<ItemListContainer><h1> Este es un componente hijo</h1></ItemListContainer>}/>
      <Route path='item/:id' element={<ItemDetailContainer/>}/>
      <Route path='*' element={<ItemListContainer><h1> Este es un componente hijo</h1></ItemListContainer>}/>
    </Routes>
    
    </BrowserRouter>
    </>
  )
}
export default App

