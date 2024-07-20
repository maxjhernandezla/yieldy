import React from 'react'
import './Header.scss'
const Header = () =>
{
    return (
        <div className='header'>
            <div className="header_container">
                <div className="header_text_container">
                    <div className="header_text">
                        <h1>Garantía de Rendimiento</h1>
                        <p>Enfoque innovador que combina datos georreferenciados, aprendizaje automático e imágenes satelitales para brindarte la precisión y seguridad que necesitas en cada temporada agrícola. Con Yieldy, maximiza tus rendimientos y minimiza los riesgos.</p>
                        <button>Comenzar simulación</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header
