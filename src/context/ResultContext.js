import React, { createContext, useState, useContext } from 'react';
import prima from '../helpers/calcPrima';
import { post } from '../helpers/post';
import { v4 as uuidv4 } from 'uuid';
import { update } from '../helpers/update';

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
    const [sid, setSid] = useState(null);

    const generateSimulatorData = async (cultivo, tamañoLotes, rendimientoEsperado, rendimientoAGarantizar) =>
    {
        setSimulatorData({ cultivo, tamañoLotes, rendimientoEsperado, rendimientoAGarantizar });
        setSimulatorDone(true);
        const primaResult = prima(rendimientoEsperado, rendimientoAGarantizar);
        setPrimaResult(primaResult);
        const sid = uuidv4();
        setSid(sid);
        await post(cultivo, tamañoLotes, rendimientoEsperado, rendimientoAGarantizar, sid, primaResult)
    };

    const generateSurveyData = async (adquiere, comentarios, porque, otroMotivo) =>
    {
        setSurveyData({ adquiere, comentarios, porque, otroMotivo });
        await updateData(sid, adquiere, comentarios, porque, otroMotivo);
    };

    const updateData = async (sid, adquiere, comentarios, porque, otroMotivo) =>
    {
        try
        {
            const result = await update(sid, adquiere, comentarios, porque, otroMotivo);
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
        <ResultContext.Provider value={{ simulatorData, generateSimulatorData, surveyData, generateSurveyData, dbResult, simulatorDone, restartData, primaResult, sid }}>
            {children}
        </ResultContext.Provider>
    );
};

export const useResult = () => useContext(ResultContext);
