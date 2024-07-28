import React from 'react'
import Simulator from '../pages/Simulator/Simulator'
import Header from '../components/Header/Header'


const SimulatorRouter = ({ refs, handleScrollTo }) =>
{

    const title = 'Simule su campo'
    const description = 'A continuación, describa las principales características de su campo, para hacer una estimación del funcionamiento de nuestra garantía de rinde.'
    return (
        <div>
            <Header title={title} description={description} />
            <Simulator refs={refs} handleScrollTo={handleScrollTo} />
        </div>
    )
}

export default SimulatorRouter
