import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './HowItWorks.scss'
import recycle from '../../images/triangular-arrows-sign-for-recycle.png'
import chart from '../../images/bar-chart.png'
import cube from '../../images/3d-cube.png'
const HowItWorks = () =>
{
    return (
        <div className='how'>
            <div className='how_container'>
                <div className="how_top">
                    <h2>¿Cómo funciona?</h2>
                    <p>Utilizamos tecnología avanzada para predecir rendimientos agrícolas, ofrecer garantías y gestionar riesgos mediante datos satelitales y aprendizaje automático.</p>
                </div>
                <div className="how_bottom">
                    <div className="how_bottom_item">
                        <div className="icon">
                            <img src={chart} alt="" />
                        </div>
                        <div className="text_container">
                            <h4>
                                Recopilación de datos</h4>
                            <p>Utilizamos datos georreferenciados obtenidos a través de sensores en campo y satélites. Estos datos incluyen información sobre la salud del cultivo, las condiciones del suelo, y las variables climáticas. Esta recopilación de datos en tiempo real permite una evaluación precisa y dinámica del estado de cada parcela.</p>
                        </div>
                    </div>
                    <div className="how_bottom_item">
                        <div className="icon">
                            <img src={cube} alt="" />
                        </div>
                        <div className="text_container">
                            <h4>Predicciones con IA</h4>
                            <p>Analizamos los datos recopilados para predecir con alta precisión el rendimiento de los cultivos. Utilizando técnicas de machine learning, Yieldy puede ajustar predicciones a medida que cambian las condiciones del campo, proporcionando así una evaluación continua y precisa del riesgo.</p>
                        </div>
                    </div>
                    <div className="how_bottom_item">
                        <div className="icon">
                            <img src={recycle} alt="" />
                        </div>
                        <div className="text_container">
                            <h4>Garantía</h4>
                            <p>Ofrecemos una función personalizada que permite a los productores asegurar un rendimiento mínimo deseado. Basándonos en las predicciones de rendimiento, determinamos la probabilidad de alcanzar dicho rendimiento y calculamos una tasa de seguro específica para cada parcela.</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default HowItWorks
