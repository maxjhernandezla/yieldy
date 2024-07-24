import React, { useState } from 'react';
import './Simulator.scss';
import { useResult } from '../../context/ResultContext';
import { useNavigate } from 'react-router-dom';

const Simulator = () =>
{
    const [cultivo, setCultivo] = useState('');
    const [tamañoLotes, setTamañoLotes] = useState('');
    const [rendimientoEsperado, setRendimientoEsperado] = useState('');
    const [rendimientoIndiferencia, setRendimientoIndiferencia] = useState('');
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
            rendimientoIndiferencia: !rendimientoIndiferencia ? 'Por favor, ingrese el rendimiento de indiferencia' : ''
        };

        setErrors(newErrors);

        // Si no hay errores, llama a la función simulate
        const hasErrors = Object.values(newErrors).some(error => error);
        if (!hasErrors)
        {
            generateSimulatorData(cultivo, tamañoLotes, rendimientoEsperado, rendimientoIndiferencia);
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
                        <select name="cultivo" id="cultivo" value={cultivo} onChange={(e) => setCultivo(e.target.value)}>
                            <option value="">Seleccione un cultivo</option>
                            <option value="soja">Soja</option>
                            <option value="trigo">Trigo</option>
                            <option value="maiz">Maíz</option>
                            <option value="otro">Otro</option>
                        </select>
                        {errors.cultivo && <span className="error">{errors.cultivo}</span>}
                    </div>
                    <div className="form_item">
                        <p>Tamaño de lotes</p>
                        <input type="number" placeholder='Ingrese área [ha]' value={tamañoLotes} onChange={(e) => setTamañoLotes(e.target.value)} />
                        {errors.tamañoLotes && <span className="error">{errors.tamañoLotes}</span>}
                    </div>
                    <div className="form_item">
                        <p>Rendimiento esperado</p>
                        <input type="number" placeholder='Ingrese cantidad [kg]' value={rendimientoEsperado} onChange={(e) => setRendimientoEsperado(e.target.value)} />
                        {errors.rendimientoEsperado && <span className="error">{errors.rendimientoEsperado}</span>}
                    </div>
                    <div className="form_item">
                        <p>Rendimiento de indiferencia</p>
                        <input type="number" placeholder='Ingrese cantidad [kg]' value={rendimientoIndiferencia} onChange={(e) => setRendimientoIndiferencia(e.target.value)} />
                        {errors.rendimientoIndiferencia && <span className="error">{errors.rendimientoIndiferencia}</span>}
                    </div>
                    <button type="submit">Simular</button>
                </form>
            </div>
        </div>
    );
};

export default Simulator;
