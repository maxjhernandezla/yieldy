import './ResponsiveNavbar.scss';
import { useEffect, useRef, useState } from 'react';
import bigLogo from '../../images/logo_horiz_wide_trns.png';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const ResponsiveNavbar = () =>
{
    const [menuOpen, setMenuOpen] = useState(false);
    const menuRef = useRef(null);

    // const handleClickOutside = (event) =>
    // {
    //     if (menuRef.current && !menuRef.current.contains(event.target))
    //     {
    //         setMenuOpen(false);
    //     }
    // };

    // useEffect(() =>
    // {
    //     document.addEventListener('click', handleClickOutside, true);
    //     return () =>
    //     {
    //         document.removeEventListener('click', handleClickOutside, true);
    //     };
    // }, []);

    const handleMenuToggle = () =>
    {
        setMenuOpen(!menuOpen);
    };

    const handleLinkClick = () =>
    {
        setMenuOpen(false);
    };
    console.log(menuOpen);
    return (
        <nav>
            <Link to='/'>
                <img src={bigLogo} alt="logo" className='logo' />
            </Link>
            <div className="menu" onClick={handleMenuToggle}>
                <FontAwesomeIcon icon={faBars} />
            </div>
            <ul ref={menuRef} className={menuOpen ? "open" : ""}>
                <li onClick={handleLinkClick}><Link to='/'>Proyecto</Link></li>
                <li onClick={handleLinkClick}><Link to='/'>¿Cómo funciona?</Link></li>
                <li onClick={handleLinkClick}><Link to='/'>Plataforma</Link></li>
                <li onClick={handleLinkClick}><Link to='/'>Beneficios</Link></li>
                <li onClick={handleLinkClick}><Link to='/'>Nosotros</Link></li>
                <li onClick={handleLinkClick}><Link to='/simulator'>Simulador</Link></li>
                <li onClick={handleLinkClick}><Link to='/'>Contacto</Link></li>
            </ul>
        </nav>
    );
};

export default ResponsiveNavbar;


