import React from 'react'
import { Navbar } from 'react-bootstrap'
import Project from '../pages/Project/Project'
import HowItWorks from '../pages/HowItWorks/HowItWorks'
import Platform from '../pages/Platform/Platform'
import Benefits from '../pages/Benefits/Benefits'
import Contact from '../pages/Contact/Contact'
import Suscribe from '../pages/Suscribe/Suscribe'
import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'

const LandingRouter = () =>
{
    const title = 'Garantía de Rendimiento';
    const description = 'Enfoque innovador que combina datos georreferenciados, aprendizaje automático e imágenes satelitales para brindarte la precisión y seguridad que necesitas en cada temporada agrícola. Con Yieldy, maximiza tus rendimientos y minimiza los riesgos.';
    const button = 'Comenzar simulación'
    return (
        <div>
            <Header title={title} description={description} button={button} />
            <Project />
            <HowItWorks />
            <Platform />
            {/* <Benefits /> */}
            {/* <Contact />
            <Suscribe /> */}
        </div>
    )
}

export default LandingRouter
