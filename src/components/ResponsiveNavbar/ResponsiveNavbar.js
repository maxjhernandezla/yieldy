// import './ResponsiveNavbar.scss';
// import { useEffect, useRef, useState } from 'react';
// import bigLogo from '../../images/logo_horiz_wide_trns.png';
// import { Link } from 'react-router-dom';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faBars } from '@fortawesome/free-solid-svg-icons';

// const ResponsiveNavbar = ({ refs, handleScrollTo }) =>
// {
//     const [menuOpen, setMenuOpen] = useState(false);
//     const menuRef = useRef(null);

//     const handleMenuToggle = () =>
//     {
//         setMenuOpen(!menuOpen);
//     };

//     const handleLinkClick = () =>
//     {
//         setMenuOpen(false);
//     };
//     console.log(menuOpen);
//     return (
//         <nav>
//             <Link to='/'>
//                 <img src={bigLogo} alt="logo" className='logo' />
//             </Link>
//             <div className="menu" onClick={handleMenuToggle}>
//                 <FontAwesomeIcon icon={faBars} />
//             </div>
//             <ul ref={menuRef} className={menuOpen ? "open" : ""}>
//                 <li onClick={handleLinkClick}><Link to='/'>Proyecto</Link></li>
//                 <li onClick={handleLinkClick}><Link to='/'>¿Cómo funciona?</Link></li>
//                 <li onClick={handleLinkClick}><Link to='/'>Plataforma</Link></li>
//                 <li onClick={handleLinkClick}><Link to='/'>Beneficios</Link></li>
//                 <li onClick={handleLinkClick}><Link to='/'>Nosotros</Link></li>
//                 <li onClick={handleLinkClick}><Link to='/simulator'>Simulador</Link></li>
//                 <li onClick={handleLinkClick}><Link to='/'>Contacto</Link></li>
//             </ul>
//         </nav>
//     );
// };

// export default ResponsiveNavbar;


// import './ResponsiveNavbar.scss';
// import { useRef, useState } from 'react';
// import bigLogo from '../../images/logo_horiz_wide_trns.png';
// import { Link } from 'react-router-dom';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faBars } from '@fortawesome/free-solid-svg-icons';

// const ResponsiveNavbar = ({ refs, handleScrollTo }) =>
// {
//     const [menuOpen, setMenuOpen] = useState(false);
//     const menuRef = useRef(null);

//     const handleMenuToggle = () =>
//     {
//         setMenuOpen(!menuOpen);
//     };

//     const handleLinkClick = (ref) =>
//     {
//         setMenuOpen(false);
//         handleScrollTo(ref);
//     };

//     return (
//         <nav>
//             <Link to='/'>
//                 <img src={bigLogo} alt="logo" className='logo' />
//             </Link>
//             <div className="menu" onClick={handleMenuToggle}>
//                 <FontAwesomeIcon icon={faBars} />
//             </div>
//             <ul ref={menuRef} className={menuOpen ? "open" : ""}>
//                 <li onClick={() => handleLinkClick(refs.projectRef)}>Proyecto</li>
//                 <li onClick={() => handleLinkClick(refs.howItWorksRef)}>¿Cómo funciona?</li>
//                 <li onClick={() => handleLinkClick(refs.platformRef)}>Plataforma</li>
//                 <li onClick={() => handleLinkClick(refs.benefitsRef)}>Beneficios</li>
//                 <li onClick={() => handleLinkClick(refs.contactRef)}>Nosotros</li>
//                 <li><Link to='/simulator'>Simulador</Link></li>
//                 <li onClick={() => handleLinkClick(refs.suscribeRef)}>Contacto</li>
//             </ul>
//         </nav>
//     );
// };

// export default ResponsiveNavbar;

import './ResponsiveNavbar.scss';
import { useRef, useState } from 'react';
import bigLogo from '../../images/logo_horiz_wide_trns.png';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const ResponsiveNavbar = ({ refs, handleScrollTo }) =>
{
    const [menuOpen, setMenuOpen] = useState(false);
    const menuRef = useRef(null);

    const handleMenuToggle = () =>
    {
        setMenuOpen(!menuOpen);
    };

    const handleLinkClick = (ref) =>
    {
        setMenuOpen(false);
        handleScrollTo(ref);
    };

    return (
        <nav>
            <Link to='/'>
                <img src={bigLogo} alt="logo" className='logo' />
            </Link>
            <div className="menu" onClick={handleMenuToggle}>
                <FontAwesomeIcon icon={faBars} />
            </div>
            <ul ref={menuRef} className={menuOpen ? "open open_sans" : ""}>
                <li className='open_sans' onClick={() => handleLinkClick(refs.projectRef)}>Proyecto</li>
                <li className='open_sans' onClick={() => handleLinkClick(refs.howItWorksRef)}>¿Cómo funciona?</li>
                <li className='open_sans' onClick={() => handleLinkClick(refs.platformRef)}>Plataforma</li>
                <li className='open_sans' onClick={() => handleLinkClick(refs.benefitsRef)}>Beneficios</li>
                <li  ><Link className='open_sans' to='/simulator'>Simulador</Link></li>
                <li className='open_sans' onClick={() => handleLinkClick(refs.contactRef)}>Contacto</li>
            </ul>
        </nav>
    );
};

export default ResponsiveNavbar;

