import React from 'react'
import Simulator from '../pages/Simulator/Simulator'
import Suscribe from '../pages/Suscribe/Suscribe'
import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'


const SimulatorRouter = () =>
{
    const title = 'Simule su campo'
    return (
        <div>
            <Header title={title} />
            <Simulator />
        </div>
    )
}

export default SimulatorRouter
