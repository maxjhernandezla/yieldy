import React, { useState } from 'react';
import { useResult } from '../../context/ResultContext';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import './Survey.scss';

const Survey = () =>
{
    let { generateSurveyData, text } = useResult();
    const [adquiere, setAdquiere] = useState('');
    const [porque, setPorque] = useState('');
    const [comentarios, setComentarios] = useState('');
    const [errors, setErrors] = useState({ adquiere: '', comentarios: '', porque: '', otro: '' });
    const [otro, setOtro] = useState('');
    const [otroMotivo, setOtroMotivo] = useState('');

    const navigate = useNavigate();

    const handleSubmit = async (e) =>
    {
        e.preventDefault();
        const newErrors = {
            adquiere: !adquiere ? 'Por favor, seleccione una opción' : '',
            comentarios: !comentarios ? 'Por favor, ingrese sus comentarios' : '',
            porque: (adquiere === 'no' || adquiere === 'quizas') && !porque ? 'Por favor, seleccione una opción' : '',
            otro: porque === 'otro' && !otro ? 'Por favor, especifique' : ''
        };
        setErrors(newErrors);

        const hasErrors = Object.values(newErrors).some(error => error);
        if (!hasErrors)
        {
            try
            {
                generateSurveyData(adquiere, comentarios, porque, otroMotivo || otro);
                Swal.fire({
                    icon: 'success',
                    title: 'Gracias por usar nuestro simulador!',
                    showConfirmButton: true,
                    confirmButtonText: 'Volver al simulador',
                    timer: 8000
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

    text = `
            Rendimiento Garantizado: \n
            Cantidad de Has.: \n
            Rendimiento Esperado: \n
            Tasa de la Garantía: \n
            Prima Total:
    `;

    return (
        <div className='survey'>
            <div className="survey_container">
                <div className="subtitle">
                    <p>Conozca el impacto de nuestra garantía en su producción agrícola.</p>
                    <p>Gracias por usar nuestro simulador de garantía de rendimiento!</p>
                </div>
                <div className="text_container">
                    <p>{text}</p>
                </div>
                <form onSubmit={handleSubmit}>
                    <div className="form_item">
                        <p>¿Adquirirías este producto?</p>
                        <select name="adquirir" id="adquirir" value={adquiere} onChange={(e) => setAdquiere(e.target.value)}>
                            <option value="">Seleccione una opción</option>
                            <option value="si">Si</option>
                            <option value="no">No</option>
                            <option value="quizas">Quizás</option>
                        </select>
                        {errors.adquiere && <span className="error">{errors.adquiere}</span>}
                    </div>
                    {
                        (adquiere === 'no' || adquiere === 'quizas') && (
                            <div className="form_item">
                                <p>Si respondió "No" o "Quizás", por favor indíquenos qué factores influyen en su decisión:</p>
                                <select name="porque" id="porque" value={porque} onChange={(e) => setPorque(e.target.value)}>
                                    <option value="">Seleccione una opción</option>
                                    <option value="costoAlto">El costo es demasiado alto</option>
                                    <option value="noEntiendo">No entiendo completamente cómo funciona</option>
                                    <option value="noNecesito">No creo que necesite este tipo de garantía</option>
                                    <option value="otrasFormasDePago">Prefiero otras formas de gestionar el riesgo</option>
                                    <option value="otro">Otro</option>
                                </select>
                                {errors.porque && <span className="error">{errors.porque}</span>}
                                {
                                    porque === 'otro' && (
                                        <input
                                            type="text"
                                            name="otro"
                                            id="otro"
                                            value={otro}
                                            onChange={(e) => setOtro(e.target.value)}
                                            placeholder="Por favor especifique..."
                                        />
                                    )
                                }
                                {errors.otro && <span className="error">{errors.otro}</span>}
                            </div>
                        )
                    }
                    <div className="form_item">
                        <p>Comentarios</p>
                        <textarea rows="10" placeholder='¿Tiene algún comentario o sugerencia adicional?' value={comentarios} onChange={(e) => setComentarios(e.target.value)} />
                        {errors.comentarios && <span className="error">{errors.comentarios}</span>}
                    </div>
                    <button type="submit">Enviar Encuesta</button>
                    {/* <button type="button" onClick={() => navigate('/simulator')}>Volver al Simulador</button> */}
                </form>
            </div>
        </div>
    );
};

export default Survey;
