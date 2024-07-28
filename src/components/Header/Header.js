import React, { forwardRef } from 'react';
import './Header.scss';
import { Link } from 'react-router-dom';

const Header = forwardRef(({ title, description, button }, ref) =>
{
    return (
        <div className='header' ref={ref}>
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
});

export default Header;

