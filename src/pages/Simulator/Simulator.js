import React, { useState } from 'react';
import './Simulator.scss';
import Modal from '../../components/Modal/Modal';
import { useModal } from '../../context/ModalContext';
import { postToFirebase } from '../../helpers/postToFirebase';

const Simulator = () =>
{
    const [cultivo, setCultivo] = useState('');
    const [tamañoLotes, setTamañoLotes] = useState('');
    const [rendimientoEsperado, setRendimientoEsperado] = useState('');
    const [rendimientoIndiferencia, setRendimientoIndiferencia] = useState('');
    const { openModal } = useModal();

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
            const text = `De haber adquirido esta garantía, usted tendría garantizado un rinde de 1000 kg por hectárea. 
A usted le habría costado un porcentaje de 5% sobre el rinde, es decir:
125 kg por hectárea, de alcanzar el rendimiento esperado
Equivalentemente, 625 toneladas, a 450$/t, el precio total de la garantía equivaldría a $281,000.
`;
            openModal(text);
            postToFirebase(cultivo,
                tamañoLotes,
                rendimientoEsperado,
                rendimientoIndiferencia)
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
            <Modal />
        </div>
    );
};

export default Simulator;
