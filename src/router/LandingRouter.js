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
    return (
        <div>
            <Header />
            <Project />
            <HowItWorks />
            <Platform />
            <Benefits />
            <Contact />
            <Suscribe />
        </div>
    )
}

export default LandingRouter
