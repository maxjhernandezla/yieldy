import React from 'react'
import Simulator from '../pages/Simulator/Simulator'
import Suscribe from '../pages/Suscribe/Suscribe'
import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'


const SimulatorRouter = () =>
{
    const title = 'Simule su campo'
    const description = 'A continuación, describa las principales características de su campo, para hacer una estimación del funcionamiento de nuestra garantía de rinde.'
    return (
        <div>
            <Header title={title} description={description} />
            <Simulator />
        </div>
    )
}

export default SimulatorRouter
