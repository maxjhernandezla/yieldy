import React from 'react'
import image from '../../images/feature2-image.jpg'
import './Project.scss'
import { useRefs } from '../../context/RefContext'
import { Link } from 'react-router-dom'
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const Project = () =>
{
    useEffect(() =>
    {
        Aos.init({ duration: 1000, once: true, easing: 'ease-in-out' });
    }, []);

    const { projectRef } = useRefs()

    return (
        <div ref={projectRef} className='project'>
            <div className="project_container">
                <div className="left">
                    <img src={image} alt="img" data-aos='fade-right' />
                </div>
                <div className="right" data-aos='fade-left'>
                    <h2>Transformando el Riesgo Agrícola con Tecnología Innovadora</h2>
                    <p className='open_sans'>Yieldy es una plataforma innovadora que transforma la gestión del riesgo agrícola. Utilizando datos georreferenciados, aprendizaje automático e imágenes satelitales, Yieldy ofrece precisión y seguridad para maximizar rendimientos y minimizar riesgos. Garantiza un rendimiento de indiferencia, brindando tranquilidad y estabilidad económica a los agricultores.</p>
                    <button className='open_sans'>
                        <Link
                            to='/simulator'
                            className='open_sans'
                        >
                            Comenzar simulación
                        </Link>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Project
