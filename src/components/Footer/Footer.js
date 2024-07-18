import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import './Footer.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Footer = () =>
{
    return (
        <div className='footer'>
            <div className="footer_container">
                <div className="icon">
                    <FontAwesomeIcon icon={faLinkedinIn} />
                </div>
                <div className="text_container">
                    <p>Copyright 2024 - Yieldy &reg;</p>
                    <span>yieldy.ai</span>
                </div>
            </div>
        </div>
    )
}

export default Footer
