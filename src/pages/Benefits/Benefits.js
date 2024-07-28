import { useRefs } from '../../context/RefContext'
import './Benefits.scss'

const Benefits = () =>
{
    const { benefitsRef } = useRefs()

    return (
        <div ref={benefitsRef} className='benefits'>
            <div className='benefits_container'>
                <h2>Beneficios</h2>
                <div className="cards_container">
                    <div className="card">
                        <div className="card_title">
                            <h4>Seguridad Financiera</h4>
                        </div>
                        <div className="card_bottom">
                            <div className="text_container" >
                                <span className='open_sans'><b className='open_sans'>20%</b>disminución de volatilidad de ingresos</span>
                                <p className='open_sans'>Garantizamos un rendimiento mínimo, protegiendo tus ingresos contra las variaciones climáticas y otros factores imprevisibles</p>
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card_title">
                            <h4>Costos Eficientes</h4>
                        </div>
                        <div className="card_bottom">
                            <div className="text_container">
                                <span className='open_sans'><b className='open_sans'>20%</b>de reducción de costos totales</span>
                                <p className='open_sans'>Reducción de costos mediante evaluaciones de riesgo basadas en datos precisos. Al utilizar tecnología avanzada, eliminamos intermediarios y reducimos los costos operativos</p>
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card_title">
                            <h4>Tecnología Avanzada</h4>
                        </div>
                        <div className="card_bottom">
                            <div className="text_container">
                                <span className='open_sans'><b className='open_sans'>40%</b>de aumento de precisión en predicciones</span>
                                <p className='open_sans'>Tecnología satelital y aprendizaje automático para ofrecer predicciones precisas y en tiempo real</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Benefits
