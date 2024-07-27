// import React, { forwardRef } from 'react'
// import './Header.scss'
// const Header = forwardRef({ title, description, button }) =>
// {
//     return (
//         <div className='header'>
//             <div className="header_container">
//                 <div className="header_text_container">
//                     <div className="header_text">
//                         <h1>{title}</h1>
//                         {
//                             description &&
//                             <p>{description}</p>
//                         }
//                         {
//                             button &&
//                             <button>{button}</button>
//                         }
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default Header
import React, { forwardRef } from 'react';
import './Header.scss';

const Header = forwardRef(({ title, description, button }, ref) =>
{
    return (
        <div className='header' ref={ref}>
            <div className="header_container">
                <div className="header_text_container">
                    <div className="header_text">
                        <h1>{title}</h1>
                        {description && <p className='open_sans'>{description}</p>}
                        {button && <button className='open_sans'>{button}</button>}
                    </div>
                </div>
            </div>
        </div>
    );
});

export default Header;

