
import { Link } from 'react-router-dom';
import logo from '../../images/logo_horiz_wide_trns.png'
import './Navbar.scss';
const Navbar = () =>
{
    return (
        <div className='navbar'>
            <div className="navbar_container">
                <div className="left">
                    <Link to='/'>
                        <img src={logo} alt="logo" className='logo' />
                    </Link>
                </div>
                <div className="right">
                    <ul className="nav_links">
                        <li>Proyecto</li>
                        <li>¿Cómo funciona?</li>
                        <li>Plataforma</li>
                        <li>Beneficios</li>
                        <li>Nosotros</li>
                        <li><Link to='/simulator'>Simulador</Link></li>
                        <li>Contacto</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Navbar