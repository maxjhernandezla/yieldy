// ResultContext.js
import React, { createContext, useState, useContext, useEffect } from 'react';
import { postToFirebase } from '../helpers/postToFirebase';
import prima from '../helpers/calcPrima'
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
    const [surveyData, setSurveyData] = useState({ adquiere: '', comentarios: '' });
    const [dbResult, setDbResult] = useState(null);
    const [text, setText] = useState('');
    const [primaResult, setPrimaResult] = useState(null)

    const generateSimulatorData = (cultivo, tamañoLotes, rendimientoEsperado, rendimientoIndiferencia) =>
    {
        setSimulatorData({ cultivo, tamañoLotes, rendimientoEsperado, rendimientoIndiferencia });
        setSimulatorDone(true);
        const primaResult = prima(rendimientoEsperado, rendimientoIndiferencia)
        setPrimaResult(primaResult)
        generateText(primaResult, cultivo, tamañoLotes, rendimientoEsperado, rendimientoIndiferencia)

    };

    const generateSurveyData = (adquiere, comentarios) =>
    {
        setSurveyData({ adquiere, comentarios });
    };

    const generateText = (primaResult, cultivo, tamañoLotes, rendimientoEsperado, rendimientoIndiferencia) =>
    {
        const text = `De haber adquirido esta garantía, usted tendría garantizado un rendimiento de 1000 kg por hectárea. 
        A usted le habría costado un porcentaje de 5% sobre el rinde, es decir:
        125 kg por hectárea, de alcanzar el rendimiento esperado
        Equivalentemente, 625 toneladas, a 450$/t, el precio total de la garantía equivaldría a $281,000.
        Resultado: ${primaResult}, cultivo: ${cultivo}, tamaño de lotes: ${tamañoLotes}, rendimiento esperado: ${rendimientoEsperado}, rendimiento de indiferencia: ${rendimientoIndiferencia}
        `
        setText(text)
    }

    useEffect(() =>
    {
        if (surveyData.adquiere && surveyData.comentarios && primaResult)
        {
            // Solo llamar postToDB cuando surveyData ha sido establecido
            postToDB();
        }
    }, [surveyData, primaResult]);

    const postToDB = async () =>
    {
        const { cultivo, tamañoLotes, rendimientoEsperado, rendimientoIndiferencia } = simulatorData;
        const { adquiere, comentarios } = surveyData;
        try
        {
            const result = await postToFirebase(cultivo, tamañoLotes, rendimientoEsperado, rendimientoIndiferencia, adquiere, comentarios, primaResult);
            setDbResult(result);
            return result;
        } catch (error)
        {
            console.error('Error saving data:', error);
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
            comentarios: ''
        });
        setSimulatorDone(false);
    };

    return (
        <ResultContext.Provider value={{ simulatorData, generateSimulatorData, surveyData, generateSurveyData, dbResult, simulatorDone, restartData, text }}>
            {children}
        </ResultContext.Provider>
    );
};

export const useResult = () => useContext(ResultContext);



// import React, { createContext, useState, useContext } from 'react';
// import { postToFirebase } from '../helpers/postToFirebase';

// const ResultContext = createContext();

// export const ResultProvider = ({ children }) =>
// {
//     const [simulatorData, setSimulatorData] = useState({
//         cultivo: '',
//         tamañoLotes: '',
//         rendimientoEsperado: '',
//         rendimientoIndiferencia: ''
//     });

//     const [simulatorDone, setSimulatorDone] = useState(false)

//     const [dbResult, setDbResult] = useState(null);
//     const [text, setText] = useState('De haber adquirido esta garantía, usted tendría garantizado un rinde de 1000 kg por hectárea. A usted le habría costado un porcentaje de 5% sobre el rinde, es decir: 125 kg por hectárea, de alcanzar el rendimiento esperado Equivalentemente, 625 toneladas, a 450$/t, el precio total de la garantía equivaldría a $281,000.')

//     const generateSimulatorData = (cultivo,
//         tamañoLotes,
//         rendimientoEsperado,
//         rendimientoIndiferencia) =>
//     {
//         setSimulatorData({ cultivo, tamañoLotes, rendimientoEsperado, rendimientoIndiferencia });
//         setSimulatorDone(true)
//         console.log(simulatorDone);
//     }

//     const [surveyData, setSurveyData] = useState(
//         {
//             adquiere: '',
//             comentarios: ''
//         }
//     )
//     const generateSurveyData = (adquiere, comentarios) =>
//     {
//         setSurveyData({ adquiere, comentarios });
//     };


//     const postToDB = async () =>
//     {
//         // console.log(simulatorData, surveyData);
//         const result = await postToFirebase(simulatorData.cultivo, simulatorData.tamañoLotes,
//             simulatorData.rendimientoEsperado,
//             simulatorData.rendimientoIndiferencia,
//             surveyData.adquiere,
//             surveyData.comentarios);
//         restartData()
//         console.log(result);
//         return result;
//     }

//     const restartData = () =>
//     {
//         setSimulatorData({
//             cultivo: '',
//             tamañoLotes: '',
//             rendimientoEsperado: '',
//             rendimientoIndiferencia: ''
//         })
//         setSurveyData({
//             adquiere: '',
//             comentarios: ''
//         })
//         setSimulatorDone(false)
//     }

//     return (
//         <ResultContext.Provider value={{ text, simulatorData, generateSimulatorData, generateSurveyData, surveyData, postToDB, dbResult }}>
//             {children}
//         </ResultContext.Provider>
//     );
// };

// export const useResult = () => useContext(ResultContext);
