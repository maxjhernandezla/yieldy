import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './Suscribe.scss'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'

const Suscribe = () =>
{
    return (
        <div className='suscribe'>
            <div className="suscribe_cover">
                <div className="suscribe_container">
                    <div className="icon">
                        <FontAwesomeIcon icon={faEnvelope} />
                    </div>
                    <p>¡Suscribite para recibir información actualizada del proyecto!</p>
                    <div className="input">
                        <input type="text" className="input" placeholder='Tu email...' />
                        <button>SUBSCRIBE</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Suscribe
