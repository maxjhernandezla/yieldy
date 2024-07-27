// // ResultContext.js
// import React, { createContext, useState, useContext, useEffect } from 'react';
// import { postToFirebase } from '../helpers/postToFirebase';
// import prima from '../helpers/calcPrima'
// const ResultContext = createContext();

// export const ResultProvider = ({ children }) =>
// {
//     const [simulatorData, setSimulatorData] = useState({
//         cultivo: '',
//         tamañoLotes: '',
//         rendimientoEsperado: '',
//         rendimientoIndiferencia: ''
//     });

//     const [simulatorDone, setSimulatorDone] = useState(false);
//     const [surveyData, setSurveyData] = useState({ adquiere: '', comentarios: '', porque: '', otroMotivo: '' });
//     const [dbResult, setDbResult] = useState(null);
//     const [primaResult, setPrimaResult] = useState(null)

//     const generateSimulatorData = (cultivo, tamañoLotes, rendimientoEsperado, rendimientoIndiferencia) =>
//     {
//         setSimulatorData({ cultivo, tamañoLotes, rendimientoEsperado, rendimientoIndiferencia });
//         setSimulatorDone(true);
//         const primaResult = prima(rendimientoEsperado, rendimientoIndiferencia)
//         setPrimaResult(primaResult)

//     };

//     const generateSurveyData = (adquiere, comentarios, porque, otroMotivo) =>
//     {
//         setSurveyData({ adquiere, comentarios, porque, otroMotivo });
//     };

//     const submitToDb = async () =>
//     {
//         if (surveyData.adquiere && surveyData.comentarios)
//         {
//             await postToDB();
//         }
//     };

//     const postToDB = async () =>
//     {
//         const { cultivo, tamañoLotes, rendimientoEsperado, rendimientoIndiferencia } = simulatorData;
//         const { adquiere, comentarios, porque, otroMotivo } = surveyData;
//         try
//         {
//             const result = await postToFirebase(cultivo, tamañoLotes, rendimientoEsperado, rendimientoIndiferencia, adquiere, comentarios, primaResult, porque, otroMotivo);
//             setDbResult(result);
//             return result;
//         } catch (error)
//         {
//             console.error('Error saving data:', error);
//             setDbResult('error');
//             throw error;
//         }
//     };

//     const restartData = () =>
//     {
//         setSimulatorData({
//             cultivo: '',
//             tamañoLotes: '',
//             rendimientoEsperado: '',
//             rendimientoIndiferencia: ''
//         });
//         setSurveyData({
//             adquiere: '',
//             comentarios: '',
//             porque: '',
//             otroMotivo: ''
//         });
//         setSimulatorDone(false);
//     };
//     console.log(simulatorData);
//     console.log(simulatorDone);
//     console.log(surveyData);
//     console.log(primaResult);

//     return (
//         <ResultContext.Provider value={{ simulatorData, generateSimulatorData, surveyData, generateSurveyData, dbResult, simulatorDone, restartData, submitToDb }}>
//             {children}
//         </ResultContext.Provider>
//     );
// };

// export const useResult = () => useContext(ResultContext);

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
        rendimientoIndiferencia: ''
    });

    const [simulatorDone, setSimulatorDone] = useState(false);
    const [surveyData, setSurveyData] = useState({ adquiere: '', comentarios: '', porque: '', otroMotivo: '' });
    const [dbResult, setDbResult] = useState(null);
    const [primaResult, setPrimaResult] = useState(null);

    const generateSimulatorData = (cultivo, tamañoLotes, rendimientoEsperado, rendimientoIndiferencia) =>
    {
        setSimulatorData({ cultivo, tamañoLotes, rendimientoEsperado, rendimientoIndiferencia });
        setSimulatorDone(true);
        const primaResult = prima(rendimientoEsperado, rendimientoIndiferencia);
        setPrimaResult(primaResult);
    };

    const generateSurveyData = async (adquiere, comentarios, porque, otroMotivo) =>
    {
        setSurveyData({ adquiere, comentarios, porque, otroMotivo });
        await postToDB(adquiere, comentarios, porque, otroMotivo);
    };

    const postToDB = async (adquiere, comentarios, porque, otroMotivo) =>
    {
        const { cultivo, tamañoLotes, rendimientoEsperado, rendimientoIndiferencia } = simulatorData;
        try
        {
            const result = await postToFirebase(cultivo, tamañoLotes, rendimientoEsperado, rendimientoIndiferencia, adquiere, comentarios, primaResult, porque, otroMotivo);
            restartData()
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
            rendimientoIndiferencia: ''
        });
        setSurveyData({
            adquiere: '',
            comentarios: '',
            porque: '',
            otroMotivo: ''
        });
        setSimulatorDone(false);
    };
    console.log(simulatorData);
    console.log(simulatorDone);
    console.log(surveyData);
    console.log(primaResult);


    return (
        <ResultContext.Provider value={{ simulatorData, generateSimulatorData, surveyData, generateSurveyData, dbResult, simulatorDone, restartData, primaResult }}>
            {children}
        </ResultContext.Provider>
    );
};

export const useResult = () => useContext(ResultContext);
