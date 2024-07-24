import React from 'react'
import Header from '../components/Header/Header'
import Survey from '../pages/Survey/Survey'

const SurveyRouter = () =>
{
    return (
        <div>
            <Header title={'Resultados de la Simulación de Garantía de Rendimiento'} />
            <Survey />
        </div>
    )
}

export default SurveyRouter
