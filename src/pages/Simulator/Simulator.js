import React, { useState } from 'react';
import './Simulator.scss';
import { useResult } from '../../context/ResultContext';
import { useNavigate } from 'react-router-dom';

const Simulator = ({ refs, handleScrollTo }) =>
{
    const [cultivo, setCultivo] = useState('');
    const [tamañoLotes, setTamañoLotes] = useState('');
    const [rendimientoEsperado, setRendimientoEsperado] = useState('');
    const [rendimientoAGarantizar, setRendimientoAGarantizar] = useState('');
    const { generateSimulatorData } = useResult();
    const navigate = useNavigate()
    const [errors, setErrors] = useState({
        cultivo: '',
        tamañoLotes: '',
        rendimientoEsperado: '',
        rendimientoIndiferencia: ''
    });

    const handleSubmit = (e) =>
    {
        e.preventDefault();
        const newErrors = {
            cultivo: !cultivo ? 'Por favor, seleccione un cultivo' : '',
            tamañoLotes: !tamañoLotes ? 'Por favor, ingrese el tamaño de los lotes' : '',
            rendimientoEsperado: !rendimientoEsperado ? 'Por favor, ingrese el rendimiento esperado' : '',
            rendimientoAGarantizar: !rendimientoAGarantizar ? 'Por favor, ingrese el rendimiento de indiferencia' : ''
        };

        setErrors(newErrors);

        // Si no hay errores, llama a la función simulate
        const hasErrors = Object.values(newErrors).some(error => error);
        if (!hasErrors)
        {
            generateSimulatorData(cultivo, tamañoLotes, rendimientoEsperado, rendimientoAGarantizar);
            navigate('/survey')
        }
    };

    return (
        <div className='simulator'>
            <div className="simulator_container">
                <h4>Complete el siguiente formulario para hacer una simulación de la garantía de rinde.</h4>
                <form onSubmit={handleSubmit}>
                    <div className="form_item">
                        <p>Cultivo</p>
                        <select className='open_sans' name="cultivo" id="cultivo" value={cultivo} onChange={(e) => setCultivo(e.target.value)}>
                            <option className='open_sans' value="">Seleccione un cultivo</option>
                            <option className='open_sans' value="soja">Soja</option>
                            <option className='open_sans' value="trigo">Trigo</option>
                            <option className='open_sans' value="maiz">Maíz</option>
                            <option className='open_sans' value="otro">Otro</option>
                        </select>
                        {errors.cultivo && <span className="error">{errors.cultivo}</span>}
                    </div>
                    <div className="form_item">
                        <p >Tamaño de lotes</p>
                        <input className='open_sans' type="number" placeholder='Ingrese área [ha]' value={tamañoLotes} onChange={(e) => setTamañoLotes(e.target.value)} />
                        {errors.tamañoLotes && <span className="error open_sans">{errors.tamañoLotes}</span>}
                    </div>
                    <div className="form_item">
                        <p>Rendimiento esperado</p>
                        <input className='open_sans' type="number" placeholder='Ingrese cantidad [kg]' value={rendimientoEsperado} onChange={(e) => setRendimientoEsperado(e.target.value)} />
                        {errors.rendimientoEsperado && <span className="error open_sans">{errors.rendimientoEsperado}</span>}
                    </div>
                    <div className="form_item">
                        <p>¿Cuánto querés garantizar?</p>
                        <input className='open_sans' type="number" placeholder='Ingrese cantidad [kg]' value={rendimientoAGarantizar} onChange={(e) => setRendimientoAGarantizar(e.target.value)} />
                        {errors.rendimientoAGarantizar && <span className="error open_sans">{errors.rendimientoAGarantizar}</span>}
                    </div>
                    <button className='open_sans' type="submit">Simular</button>
                </form>
            </div>
        </div>
    );
};

export default Simulator;
