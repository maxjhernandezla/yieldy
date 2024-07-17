import './Benefits.scss'

const Benefits = () =>
{
    return (
        <div className='benefits'>
            <div className='benefits_container'>
                <h2>Beneficios</h2>
                <div className="cards_container">
                    <div className="card">
                        <div className="card_title">
                            <h4>Seguridad Financiera</h4>
                        </div>
                        <div className="card_bottom">
                            <div className="text_container">
                                <b>20%</b><span>disminución de volatilidad de ingresos</span>
                                <p>Garantizamos un rendimiento mínimo, protegiendo tus ingresos contra las variaciones climáticas y otros factores imprevisibles</p>
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card_title">
                            <h4>Costos Eficientes</h4>
                        </div>
                        <div className="card_bottom">
                            <div className="text_container">
                                <span><b>20%</b>de reducción de costos totales</span>
                                <p>Reducción de costos mediante evaluaciones de riesgo basadas en datos precisos. Al utilizar tecnología avanzada, eliminamos intermediarios y reducimos los costos operativos</p>
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card_title">
                            <h4>Tecnología Avanzada</h4>
                        </div>
                        <div className="card_bottom">
                            <div className="text_container">
                                <span><b>40%</b>de aumento de precisión en predicciones</span>
                                <p>Tecnología satelital y aprendizaje automático para ofrecer predicciones precisas y en tiempo real</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Benefits
