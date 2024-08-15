import Cartwidget from '../CartWidget/Cartwidget'
import './Navbar.scss'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'


const Navbar=()=>{
    return(

        <nav className='navBar'>
            <div className='navBarLogo'>
            <Link to="/"><p>LOGO</p></Link>
            </div>
            <div className='navBarLin'>
                <ul>
                    <li>
                        <Link to="/Nosotros" className='link'>Nosotros</Link>
                    </li>
                    <li>
                        <Link to="/category/Desayunos"className='link'>Desayunos</Link>
                    </li>
                    <li>
                        <Link to="/category/Postres"className='link'>Postres</Link>
                    </li>
                    <li>
                        <Link to="/category/Bebidas"className='link'>Bebidas</Link>
                    </li>
                </ul>
            </div>
            <Cartwidget/>
        </nav>

    )
}
export default Navbar;


