import React, { useState } from 'react';
import { useResult } from '../../context/ResultContext';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import './Survey.scss';

const Survey = () =>
{
    const { generateSurveyData, simulatorData, primaResult } = useResult();
    const [adquiere, setAdquiere] = useState('');
    const [porque, setPorque] = useState('');
    const [comentarios, setComentarios] = useState('');
    const [errors, setErrors] = useState({ adquiere: '', comentarios: '', porque: '', otroMotivo: '' });
    const [otroMotivo, setOtroMotivo] = useState('');

    const navigate = useNavigate();

    const handleSubmit = async (e) =>
    {
        e.preventDefault();
        const newErrors = {
            adquiere: !adquiere ? 'Por favor, seleccione una opción' : '',
            comentarios: !comentarios ? 'Por favor, ingrese sus comentarios' : '',
            porque: (adquiere === 'no' || adquiere === 'quizas') && !porque ? 'Por favor, seleccione una opción' : '',
            otroMotivo: porque === 'otro' && !otroMotivo ? 'Por favor, especifique' : ''
        };
        setErrors(newErrors);

        const hasErrors = Object.values(newErrors).some(error => error);
        if (!hasErrors)
        {
            try
            {
                await generateSurveyData(adquiere, comentarios, porque, otroMotivo);
                Swal.fire({
                    icon: 'success',
                    title: 'Gracias por usar nuestro simulador!',
                    showConfirmButton: true,
                    confirmButtonText: 'Volver al simulador',
                    timer: 1500
                }).then(() =>
                {
                    navigate('/simulator');
                });
            } catch
            {
                Swal.fire({
                    icon: 'error',
                    title: 'Hubo un error, por favor intente de nuevo.',
                    showConfirmButton: false,
                });
            }
        }
    };

    return (
        <div className='survey'>
            <div className="survey_container">
                <div className="subtitle">
                    <h4>Conozca el impacto de nuestra garantía en su producción agrícola.</h4>
                    <h4>Gracias por usar nuestro simulador de garantía de rendimiento!</h4>
                </div>
                <div className="text_container">
                    <div className="results">
                        <h4>Resultados</h4>
                        <ul>
                            <li className='open_sans'>Rendimiento Garantizado: {simulatorData.rendimientoAGarantizar} kg/ha</li>
                            <li className='open_sans'>Cantidad de hectareas: {simulatorData.tamañoLotes}</li>
                            <li className='open_sans'>Rendimiento Esperado: {simulatorData.rendimientoEsperado} kg/ha</li>
                            <li className='open_sans'>Tasa de la Garantía: {(primaResult * 100).toFixed(2)}%</li>
                            <li className='open_sans'>Precio por hectárea: {(simulatorData.rendimientoEsperado * primaResult).toFixed(2)} kg/ha</li>
                        </ul>
                    </div>
                </div>
                <form onSubmit={handleSubmit}>
                    <div className="form_item">
                        <p>¿Adquirirías este producto?</p>
                        <select className='open_sans' name="adquirir" id="adquirir" value={adquiere} onChange={(e) => setAdquiere(e.target.value)}>
                            <option className='open_sans' value="">Seleccione una opción</option>
                            <option className='open_sans' value="si">Si</option>
                            <option className='open_sans' value="no">No</option>
                            <option className='open_sans' value="quizas">Quizás</option>
                        </select>
                        {errors.adquiere && <span className="error open_sans">{errors.adquiere}</span>}
                    </div>
                    {
                        (adquiere === 'no' || adquiere === 'quizas') && (
                            <div className="form_item">
                                <p>Si respondió "No" o "Quizás", por favor indíquenos qué factores influyen en su decisión:</p>
                                <select className='open_sans' name="porque" id="porque" value={porque} onChange={(e) => setPorque(e.target.value)}>
                                    <option className='open_sans' value="">Seleccione una opción</option>
                                    <option className='open_sans' value="costoAlto">El costo es demasiado alto</option>
                                    <option className='open_sans' value="noEntiendo">No entiendo completamente cómo funciona</option>
                                    <option className='open_sans' value="noNecesito">No creo que necesite este tipo de garantía</option>
                                    <option className='open_sans' value="otrasFormasDePago">Prefiero otras formas de gestionar el riesgo</option>
                                    <option className='open_sans' value="otro">Otro</option>
                                </select>
                                {errors.porque && <span className="error open_sans">{errors.porque}</span>}
                                {
                                    porque === 'otro' && (
                                        <input className='open_sans'
                                            type="text"
                                            name="otro"
                                            id="otro"
                                            value={otroMotivo}
                                            onChange={(e) => setOtroMotivo(e.target.value)}
                                            placeholder="Por favor especifique..."
                                        />
                                    )
                                }
                                {errors.otro && <span className="error open_sans">{errors.otroMotivo}</span>}
                            </div>
                        )
                    }
                    <div className="form_item">
                        <p>Comentarios</p>
                        <textarea className='open_sans' rows="10" placeholder='¿Tiene algún comentario o sugerencia adicional?' value={comentarios} onChange={(e) => setComentarios(e.target.value)} />
                        {errors.comentarios && <span className="error open_sans">{errors.comentarios}</span>}
                    </div>
                    <button type="submit" className='open_sans'>Enviar Encuesta</button>
                    {/* <button type="button" onClick={() => navigate('/simulator')}>Volver al Simulador</button> */}
                </form>
            </div>
        </div>
    );
};

export default Survey;

