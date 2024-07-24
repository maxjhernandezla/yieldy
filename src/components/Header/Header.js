import React from 'react'
import './Header.scss'
const Header = ({ title, description, button }) =>
{
    return (
        <div className='header'>
            <div className="header_container">
                <div className="header_text_container">
                    <div className="header_text">
                        <h1>{title}</h1>
                        {
                            description &&
                            <p>{description}</p>
                        }
                        {
                            button &&
                            <button>{button}</button>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header
