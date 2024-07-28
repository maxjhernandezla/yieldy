import { useRefs } from '../../context/RefContext'
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.scss'
import Swal from 'sweetalert2';

const Contact = () =>
{
    const form = useRef();

    const sendEmail = (e) =>
    {
        e.preventDefault();

        emailjs.sendForm('service_h5kye5d', 'template_v1386md', form.current, 'l4UTZT7PI2rAUXwsR')
            .then((result) =>
            {
                form.current.reset(); // Reset the form fields
                Swal.fire({
                    title: 'Mensaje Enviado',
                    text: 'Tu mensaje ha sido enviado con éxito!',
                    icon: 'success',
                    confirmButtonText: 'OK', timer: 1500
                });
            }, (error) =>
            {
                console.log(error.text);
            });
    };

    const { contactRef } = useRefs()
    return (
        <div ref={contactRef} className='contact'>
            <div className="contact_container">
                <div className="left">
                    <form ref={form} action="submit" onSubmit={sendEmail}>
                        <input type="text" className="input open_sans" placeholder='Nombre' name='user_name' />
                        <input type="text" className="input open_sans" placeholder='Email' name='user_email' />
                        <textarea name="message" className='open_sans' placeholder='Mensaje' ></textarea>
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

