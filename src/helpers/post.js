import { set, ref } from 'firebase/database';
import { db } from '../firebase';

const post = (
    cultivo,
    tamañoLotes,
    rendimientoEsperado,
    rendimientoAGarantizar,
    sid,
    primaResult
) =>
{
    const date = new Date().toISOString();
    return set(ref(db, `/${sid}`), {
        sid,
        cultivo,
        tamañoLotes,
        rendimientoEsperado,
        rendimientoAGarantizar,
        primaResult, date
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

export { post };
