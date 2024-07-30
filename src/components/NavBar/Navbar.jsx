import Cartwidget from '../CartWidget/Cartwidget'
import './Navbar.scss'



const Navbar=()=>{
    return(

        <nav className='navBar'>
            <div className='navBarLogo'>
            <p> LOGO</p>
            </div>
            <div className='navBarLin'>
                <ul>
                    <li>
                        <a href="">Nosotros</a>
                    </li>
                    <li>
                        <a href="">Productos</a>
                    </li>
                    <li>
                        <a href="">Contactenos</a>
                    </li>
                    <li>
                        <a href="">Promociones</a>
                    </li>
                </ul>
            </div>
            <Cartwidget/>
        </nav>

    )
}
export default Navbar;


