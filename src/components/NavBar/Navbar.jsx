import Cartwidget from '../CartWidget/Cartwidget'
import './Navbar.scss'
import { Link, NavLink } from 'react-router-dom'
import { useParams } from 'react-router-dom'


const Navbar=()=>{
    return(

        <nav className='navBar'>
            <div className='navBarLogo'>
            <Link to="/"><img src="/Imagenes/Logo.png" alt="Logo"></img></Link>
            </div>
            <div className='navBarLin'>
                <ul>
                    <li>
                        <NavLink to="/Nosotros" className='link'>Nosotros</NavLink>
                    </li>
                    <li>
                        <NavLink to="/category/Desayunos"className='link'>Desayunos</NavLink>
                    </li>
                    <li>
                        <NavLink to="/category/Postres"className='link'>Postres</NavLink>
                    </li>
                    <li>
                        <NavLink to="/category/Bebidas"className='link'>Bebidas</NavLink>
                    </li>
                </ul>
            </div>
            <Cartwidget/>
        </nav>

    )
}
export default Navbar;


