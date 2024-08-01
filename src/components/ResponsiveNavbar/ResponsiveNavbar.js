import './ResponsiveNavbar.scss';
import { useRef, useState, useEffect } from 'react';
import bigLogo from '../../images/logo_horiz_wide_trns.png';
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { useRefs } from '../../context/RefContext';

const ResponsiveNavbar = () =>
{
    const [menuOpen, setMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const menuRef = useRef(null);
    const navigate = useNavigate();
    const { indexRef, projectRef, howItWorksRef, contactRef, benefitsRef, platformRef, handleScrollTo } = useRefs();

    const handleMenuToggle = () =>
    {
        setMenuOpen(!menuOpen);
    };

    const handleLinkClick = (path, ref) =>
    {
        setMenuOpen(false);
        navigate(path);
        if (ref)
        {
            setTimeout(() =>
            {
                handleScrollTo(ref);
            }, 300); // espera un poco para que la navegación se complete
        }
    };

    const handleScroll = () =>
    {
        if (window.scrollY > 50)
        {
            setIsScrolled(true);
        } else
        {
            setIsScrolled(false);
        }
    };

    useEffect(() =>
    {
        window.addEventListener('scroll', handleScroll);
        return () =>
        {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <nav className={isScrolled ? 'scrolled' : ''}>
            <div className="nav_container">

                <Link to='/' onClick={() => handleLinkClick('/', indexRef)}>
                    <img src={bigLogo} alt="logo" className='logo' />
                </Link>
                <div className="menu" onClick={handleMenuToggle}>
                    <FontAwesomeIcon icon={faBars} />
                </div>
                <ul ref={menuRef} className={menuOpen ? "open open_sans" : ""}>
                    <li>
                        <Link
                            to="/"
                            className='open_sans'
                            onClick={() => handleLinkClick('/', projectRef)}
                        >
                            Proyecto
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/"
                            className='open_sans'
                            onClick={() => handleLinkClick('/', howItWorksRef)}
                        >
                            ¿Cómo funciona?
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/"
                            className='open_sans'
                            onClick={() => handleLinkClick('/', platformRef)}
                        >
                            Plataforma
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/"
                            className='open_sans'
                            onClick={() => handleLinkClick('/', benefitsRef)}
                        >
                            Beneficios
                        </Link>
                    </li>
                    <li>
                        <Link
                            to='/simulator'
                            className='open_sans'
                            onClick={() => handleLinkClick('/simulator', indexRef)}
                        >
                            Simulador
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/"
                            className='open_sans'
                            onClick={() => handleLinkClick('/', contactRef)}
                        >
                            Contacto
                        </Link>
                    </li>
                </ul>
            </div>

        </nav>
    );
};

export default ResponsiveNavbar;

