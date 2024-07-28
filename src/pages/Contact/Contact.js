import { useRefs } from '../../context/RefContext'
import './Contact.scss'

const Contact = () =>
{
    const { contactRef } = useRefs()
    return (
        <div ref={contactRef} className='contact'>
            <div className="contact_container">
                <div className="left">
                    <form action="submit">
                        <input type="text" className="input open_sans" placeholder='Nombre' />
                        <input type="text" className="input open_sans" placeholder='Email' />
                        <textarea name="" id="" className='open_sans' placeholder='Mensaje'></textarea>
                        <button>Enviar</button>
                    </form>
                </div>
                <div className="right">
                    <div className="text_container">
                        <h2>Contactanos!</h2>
                        <span className='open_sans'>Blanco Encalada 197, San Isidro, Buenos Aires, Argentina</span>
                        <p className='open_sans'>info@yieldy.ai</p>
                        <p className='open_sans'>https://yieldy.ai</p>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Contact

