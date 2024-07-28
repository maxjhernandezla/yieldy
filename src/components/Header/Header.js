import { useRefs } from '../../context/RefContext';
import './Header.scss';
import { Link } from 'react-router-dom';

const Header = ({ title, description, button }) =>
{
    const { indexRef } = useRefs();

    return (
        <div className='header' ref={indexRef}>
            <div className="header_container">
                <div className="header_text_container">
                    <div className="header_text">
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

