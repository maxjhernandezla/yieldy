import './Contact.scss'

const Contact = () =>
{
    return (
        <div className='contact'>
            <div className="contact_container">
                <div className="left">
                    <form action="submit">
                        <input type="text" className="input" placeholder='Nombre' />
                        <input type="text" className="input" placeholder='Email' />
                        <textarea name="" id="" placeholder='Mensaje'></textarea>
                        <button>Enviar</button>
                    </form>
                </div>
                <div className="right">
                    <div className="text_container">
                        <h2>Contactanos!</h2>
                        <span>Blanco Encalada 197, San Isidro, Buenos Aires, Argentina</span>
                        <p>info@yieldy.ai</p>
                        <p>https://yieldy.ai</p>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Contact

