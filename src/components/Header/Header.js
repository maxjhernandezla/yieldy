import { useRefs } from '../../context/RefContext';
import './Header.scss';
import { Link } from 'react-router-dom';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const Header = ({ title, description, button }) =>
{
    const { indexRef } = useRefs();

    useEffect(() =>
    {
        Aos.init({ duration: 1000, once: true });
    }, []);

    return (
        <div className='header' ref={indexRef}>
            <div className="header_container">
                <div className="header_text_container">
                    <div className="header_text" data-aos="fade-right">
                        <h1>{title}</h1>
                        {description && <p className='open_sans'>{description}</p>}
                        {button && <button className='open_sans'>                    <Link
                            to='/simulator'
                            className='open_sans'
                        >
                            {button}
                        </Link></button>}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;

