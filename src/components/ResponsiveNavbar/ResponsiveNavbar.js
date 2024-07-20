import { NavLink } from 'react-bootstrap';
import './ResponsiveNavbar.scss'
import { useState } from 'react';
import bigLogo from '../../images/logo_horiz_wide_trns.png'
import smallLogo from '../../images/favicon/favicon-32x32.png'
const ResponsiveNavbar = () =>
{
    const [menuOpen, setMenuOpen] = useState(false)


    return (
        <nav>
            <img src={bigLogo} alt="logo" className='logo' />
            <div className="menu" onClick={() => setMenuOpen(!menuOpen)}>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <ul className={menuOpen ? "open" : ""}>
                <li>Proyecto</li>
                <li>¿Cómo funciona?</li>
                <li>Plataforma</li>
                <li>Beneficios</li>
                <li>Nosotros</li>
                <li>Simulador</li>
                <li>Contacto</li>
            </ul>
        </nav>
    );
};

export default ResponsiveNavbar;
