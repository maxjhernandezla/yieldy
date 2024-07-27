import { set, ref } from 'firebase/database';
import { db } from '../firebase';
import { v4 as uuidv4 } from 'uuid';

const postToFirebase = (
    cultivo,
    tamañoLotes,
    rendimientoEsperado,
    rendimientoIndiferencia,
    adquiere,
    comentarios,
    primaResult,
    porque,
    otroMotivo
) =>
{
    const id = uuidv4();
    const date = new Date().toISOString();
    return set(ref(db, `/${id}`), {
        id,
        cultivo,
        tamañoLotes,
        rendimientoEsperado,
        rendimientoIndiferencia,
        adquiere,
        comentarios,
        date,
        primaResult,
        porque,
        otroMotivo,
    })
        .then(() =>
        {
            return 'success'; // Return the status
        })
        .catch((error) =>
        {
            return 'error'; // Return the status
        });
};

export { postToFirebase };
