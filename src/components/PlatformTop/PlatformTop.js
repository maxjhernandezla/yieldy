import './PlatformTop.scss'
import img from '../../images/featured-app.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import { faShieldHalved } from '@fortawesome/free-solid-svg-icons'
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons'
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
const PlatformTop = () =>
{
    useEffect(() =>
    {
        Aos.init({ duration: 2000, once: true, easing: 'ease-in-out' });
    }, []);
    return (
        <div className='platform_top'>
            <div className='platform_container'>
                <div className="left" data-aos='fade-left'>
                    <h2>La plataforma</h2>
                    <div className="platform_item">
                        <div className="icon">
                            <FontAwesomeIcon icon={faCheck} />
                        </div>
                        <div className="text_container">
                            <h4>Fácil de usar</h4>
                            <p className='open_sans'>Interfaz intuitiva y accesible para que puedas gestionar sus cultivos de manera eficiente. Desde la recopilación de datos hasta la predicción de rendimientos, todo está diseñado para ser sencillo y directo</p>
                        </div>
                    </div>
                    <div className="platform_item">
                        <div className="icon">
                            <FontAwesomeIcon icon={faShieldHalved} />
                        </div>
                        <div className="text_container">
                            <h4>Segura</h4>
                            <p className='open_sans'>Tus datos están protegidos con los más altos estándares de seguridad. Utilizamos encriptación avanzada y protocolos de seguridad para garantizar que tu información esté siempre segura y privada.</p>
                        </div>
                    </div>
                    <div className="platform_item">
                        <div className="icon">
                            <FontAwesomeIcon icon={faThumbsUp} />
                        </div>
                        <div className="text_container">
                            <h4>Confiable</h4>
                            <p className='open_sans'>Nuestra tecnología combina datos georreferenciados, inteligencia artificial y monitoreo satelital para ofrecerte la mejor evaluación de riesgos.</p>
                        </div>
                    </div>
                </div>
                <div className="right" data-aos='fade-right'>
                    <img src={img} alt="img" />
                </div>
            </div>
        </div>
    )
}

export default PlatformTop
