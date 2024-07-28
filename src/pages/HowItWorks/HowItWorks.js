import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './HowItWorks.scss'
import { faChartColumn } from '@fortawesome/free-solid-svg-icons'
import { faRecycle } from '@fortawesome/free-solid-svg-icons'
import { faCodepen } from '@fortawesome/free-brands-svg-icons'
import { useRefs } from '../../context/RefContext'
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const HowItWorks = () =>
{
    useEffect(() =>
    {
        Aos.init({ duration: 1000, once: true, easing: 'ease-in-out' });
    }, [])

    const { howItWorksRef } = useRefs()
    return (
        <div ref={howItWorksRef} className='how'>
            <div className='how_container' >
                <div className="how_top">
                    <h2>¿Cómo funciona?</h2>
                    <p className='open_sans'>Utilizamos tecnología avanzada para predecir rendimientos agrícolas, ofrecer garantías y gestionar riesgos mediante datos satelitales y aprendizaje automático.</p>
                </div>
                <div className="how_bottom">
                    <div className="how_bottom_item">
                        <div className="icon" data-aos='fade-up'>
                            <FontAwesomeIcon icon={faChartColumn} />
                            {/* <img src={chart} alt="" /> */}
                        </div>
                        <div className="text_container">
                            <h4>
                                Recopilación de datos</h4>
                            <p className='open_sans'>Utilizamos datos georreferenciados obtenidos a través de sensores en campo y satélites. Estos datos incluyen información sobre la salud del cultivo, las condiciones del suelo, y las variables climáticas. Esta recopilación de datos en tiempo real permite una evaluación precisa y dinámica del estado de cada parcela.</p>
                        </div>
                    </div>
                    <div className="how_bottom_item">
                        <div className="icon" data-aos='fade-up'>
                            <FontAwesomeIcon icon={faCodepen} />
                            {/* <img src={cube} alt="" /> */}
                        </div>
                        <div className="text_container">
                            <h4>Predicciones con IA</h4>
                            <p className='open_sans'>Analizamos los datos recopilados para predecir con alta precisión el rendimiento de los cultivos. Utilizando técnicas de machine learning, Yieldy puede ajustar predicciones a medida que cambian las condiciones del campo, proporcionando así una evaluación continua y precisa del riesgo.</p>
                        </div>
                    </div>
                    <div className="how_bottom_item">
                        <div className="icon" data-aos='fade-up'>
                            <FontAwesomeIcon icon={faRecycle} />
                            {/* <svg src={recycle} alt="" /> */}
                        </div>
                        <div className="text_container">
                            <h4>Garantía</h4>
                            <p className='open_sans'>Ofrecemos una función personalizada que permite a los productores asegurar un rendimiento mínimo deseado. Basándonos en las predicciones de rendimiento, determinamos la probabilidad de alcanzar dicho rendimiento y calculamos una tasa de seguro específica para cada parcela.</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default HowItWorks

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import './HowItWorks.scss';
// import { faChartColumn, faRecycle } from '@fortawesome/free-solid-svg-icons';
// import { faCodepen } from '@fortawesome/free-brands-svg-icons';
// import { useRefs } from '../../context/RefContext';
// import Aos from 'aos';
// import 'aos/dist/aos.css';
// import { useEffect } from 'react';
// import { useInView } from 'react-intersection-observer';

// const HowItWorks = () =>
// {
//     useEffect(() =>
//     {
//         Aos.init({ duration: 2000, once: true, easing: 'ease-in-out' });
//     }, []);

//     const { howItWorksRef } = useRefs();
//     const { ref: item1Ref, inView: item1InView } = useInView({ triggerOnce: true });
//     const { ref: item2Ref, inView: item2InView } = useInView({ triggerOnce: true });
//     const { ref: item3Ref, inView: item3InView } = useInView({ triggerOnce: true });

//     return (
//         <div ref={howItWorksRef} className='how'>
//             <div className='how_container'>
//                 <div className="how_top">
//                     <h2>¿Cómo funciona?</h2>
//                     <p className='open_sans'>Utilizamos tecnología avanzada para predecir rendimientos agrícolas, ofrecer garantías y gestionar riesgos mediante datos satelitales y aprendizaje automático.</p>
//                 </div>
//                 <div className="how_bottom">
//                     <div className="how_bottom_item" >
//                         <div className="icon" ref={item1Ref} data-aos={item1InView ? 'fade-up' : ''}>
//                             <FontAwesomeIcon icon={faChartColumn} />
//                         </div>
//                         <div className="text_container">
//                             <h4>Recopilación de datos</h4>
//                             <p className='open_sans'>Utilizamos datos georreferenciados obtenidos a través de sensores en campo y satélites. Estos datos incluyen información sobre la salud del cultivo, las condiciones del suelo, y las variables climáticas. Esta recopilación de datos en tiempo real permite una evaluación precisa y dinámica del estado de cada parcela.</p>
//                         </div>
//                     </div>
//                     <div className="how_bottom_item" >
//                         <div className="icon" ref={item2Ref} data-aos={item2InView ? 'fade-up' : ''}>
//                             <FontAwesomeIcon icon={faCodepen} />
//                         </div>
//                         <div className="text_container">
//                             <h4>Predicciones con IA</h4>
//                             <p className='open_sans'>Analizamos los datos recopilados para predecir con alta precisión el rendimiento de los cultivos. Utilizando técnicas de machine learning, Yieldy puede ajustar predicciones a medida que cambian las condiciones del campo, proporcionando así una evaluación continua y precisa del riesgo.</p>
//                         </div>
//                     </div>
//                     <div className="how_bottom_item" >
//                         <div className="icon">
//                             <FontAwesomeIcon icon={faRecycle} ref={item3Ref} data-aos={item3InView ? 'fade-up' : ''} />
//                         </div>
//                         <div className="text_container">
//                             <h4>Garantía</h4>
//                             <p className='open_sans'>Ofrecemos una función personalizada que permite a los productores asegurar un rendimiento mínimo deseado. Basándonos en las predicciones de rendimiento, determinamos la probabilidad de alcanzar dicho rendimiento y calculamos una tasa de seguro específica para cada parcela.</p>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default HowItWorks;
