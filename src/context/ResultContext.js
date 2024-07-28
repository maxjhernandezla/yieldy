import React, { createContext, useState, useContext } from 'react';
import { postToFirebase } from '../helpers/postToFirebase';
import prima from '../helpers/calcPrima';

const ResultContext = createContext();

export const ResultProvider = ({ children }) =>
{
    const [simulatorData, setSimulatorData] = useState({
        cultivo: '',
        tamañoLotes: '',
        rendimientoEsperado: '',
        rendimientoAGarantizar: ''
    });

    const [simulatorDone, setSimulatorDone] = useState(false);
    const [surveyData, setSurveyData] = useState({ adquiere: '', comentarios: '', porque: '', otroMotivo: '' });
    const [dbResult, setDbResult] = useState(null);
    const [primaResult, setPrimaResult] = useState(null);

    const generateSimulatorData = (cultivo, tamañoLotes, rendimientoEsperado, rendimientoAGarantizar) =>
    {
        setSimulatorData({ cultivo, tamañoLotes, rendimientoEsperado, rendimientoAGarantizar });
        setSimulatorDone(true);
        const primaResult = prima(rendimientoEsperado, rendimientoAGarantizar);
        setPrimaResult(primaResult);
    };

    const generateSurveyData = async (adquiere, comentarios, porque, otroMotivo) =>
    {
        setSurveyData({ adquiere, comentarios, porque, otroMotivo });
        await postToDB(adquiere, comentarios, porque, otroMotivo);
    };

    const postToDB = async (adquiere, comentarios, porque, otroMotivo) =>
    {
        const { cultivo, tamañoLotes, rendimientoEsperado, rendimientoAGarantizar } = simulatorData;
        try
        {
            const result = await postToFirebase(cultivo, tamañoLotes, rendimientoEsperado, rendimientoAGarantizar, adquiere, comentarios, primaResult, porque, otroMotivo);
            setTimeout(() =>
            {
                restartData()
            }, 1500);
            setDbResult(result);
            return result;
        } catch (error)
        {
            console.error('Error saving data:', error);
            restartData()
            setDbResult('error');
            throw error;
        }
    };

    const restartData = () =>
    {
        setSimulatorData({
            cultivo: '',
            tamañoLotes: '',
            rendimientoEsperado: '',
            rendimientoAGarantizar: ''
        });
        setSurveyData({
            adquiere: '',
            comentarios: '',
            porque: '',
            otroMotivo: ''
        });
        setSimulatorDone(false);
    };

    return (
        <ResultContext.Provider value={{ simulatorData, generateSimulatorData, surveyData, generateSurveyData, dbResult, simulatorDone, restartData, primaResult }}>
            {children}
        </ResultContext.Provider>
    );
};

export const useResult = () => useContext(ResultContext);
