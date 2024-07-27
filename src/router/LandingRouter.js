// import React from 'react'
// import Project from '../pages/Project/Project'
// import HowItWorks from '../pages/HowItWorks/HowItWorks'
// import Platform from '../pages/Platform/Platform'
// import Benefits from '../pages/Benefits/Benefits'
// import Contact from '../pages/Contact/Contact'
// import Suscribe from '../pages/Suscribe/Suscribe'
// import Header from '../components/Header/Header'

// const LandingRouter = ({ refs }) =>
// {
//     const title = 'Garantía de Rendimiento';
//     const description = 'Enfoque innovador que combina datos georreferenciados, aprendizaje automático e imágenes satelitales para brindarte la precisión y seguridad que necesitas en cada temporada agrícola. Con Yieldy, maximiza tus rendimientos y minimiza los riesgos.';
//     const button = 'Comenzar simulación'
//     return (
//         <div>
//             <Header title={title} description={description} button={button} />
//             <Project ref={refs.projectRef} />
//             <HowItWorks ref={refs.howItWorksRef} />
//             <Platform ref={refs.platformRef} />
//             <Benefits ref={refs.benefitsRef} />
//             <Contact ref={refs.contactRef} />
//             <Suscribe ref={refs.suscribeRef} />
//         </div>
//     )
// }

// export default LandingRouter

import React from 'react';
import Project from '../pages/Project/Project';
import HowItWorks from '../pages/HowItWorks/HowItWorks';
import Platform from '../pages/Platform/Platform';
import Benefits from '../pages/Benefits/Benefits';
import Contact from '../pages/Contact/Contact';
import Suscribe from '../pages/Suscribe/Suscribe';
import Header from '../components/Header/Header';

const LandingRouter = ({ refs }) =>
{
    const title = 'Garantía de Rendimiento';
    const description = 'Enfoque innovador que combina datos georreferenciados, aprendizaje automático e imágenes satelitales para brindarte la precisión y seguridad que necesitas en cada temporada agrícola. Con Yieldy, maximiza tus rendimientos y minimiza los riesgos.';
    const button = 'Comenzar simulación';

    return (
        <div>
            <Header title={title} description={description} button={button} />
            <div ref={refs.projectRef}>
                <Project />
            </div>
            <div ref={refs.howItWorksRef}>
                <HowItWorks />
            </div>
            <div ref={refs.platformRef}>
                <Platform />
            </div>
            <div ref={refs.benefitsRef}>
                <Benefits />
            </div>
            <div ref={refs.contactRef}>
                <Contact />
            </div>
            <div ref={refs.suscribeRef}>
                <Suscribe />
            </div>
        </div>
    );
};

export default LandingRouter;

