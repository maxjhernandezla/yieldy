import React from 'react'
import logo from '../../images/logo_horiz_wide_trns.png'
import './Navbar.scss'

const Navbar = () =>
{
    return (
        <div className='navbar'>
            <div className="navbar_container">
                <div className="left">
                    <img src={logo} alt="logo" className='logo' />
                </div>
                <div className="right">
                    <ul className="nav_links">
                        <li>Proyecto</li>
                        <li>¿Cómo funciona?</li>
                        <li>Plataforma</li>
                        <li>Beneficios</li>
                        <li>Nosotros</li>
                        <li>Simulador</li>
                        <li>Contacto</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Navbar
