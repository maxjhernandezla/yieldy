import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './Suscribe.scss'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
const Suscribe = () =>
{
    useEffect(() =>
    {
        Aos.init({ duration: 1000, once: true, easing: 'ease-in-out' });
    }, [])
    const form = useRef();
    const sendEmail = (e) =>
    {
        e.preventDefault();

        emailjs.sendForm('service_h5kye5d', 'template_53y0yrx', form.current, 'l4UTZT7PI2rAUXwsR')
            .then((result) =>
            {
                form.current.reset(); // Reset the form fields
                Swal.fire({
                    title: 'Te has suscrito!',
                    text: 'Tu suscripción ha sido enviada con éxito!',
                    icon: 'success',
                    confirmButtonText: 'OK',
                    timer: 1500
                });
            }, (error) =>
            {
                console.log(error.text);
            });
    };
    return (
        <div className='suscribe'>
            <div className="suscribe_cover">
                <div className="suscribe_container">
                    <div className="icon">
                        <FontAwesomeIcon icon={faEnvelope} />
                    </div>
                    <p className='open_sans'>¡Suscribite para recibir información actualizada del proyecto!</p>
                    <form data-aos='fade-up' ref={form} action='submit' className="input" onSubmit={sendEmail}>
                        <input type="text" className="input open_sans" placeholder='Tu email...' name='user_email' />
                        <button className='open_sans'>SUBSCRIBE</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Suscribe
