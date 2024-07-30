import { update as firebaseUpdate, ref } from 'firebase/database';
import { db } from '../firebase';

const update = (sid, adquiere, comentarios, porque, otroMotivo) =>
{
    return firebaseUpdate(ref(db, `/${sid}`), {
        adquiere,
        comentarios,
        porque,
        otroMotivo
    })
        .then(() =>
        {
            return 'success'; // Return the status
        })
        .catch((error) =>
        {
            console.error('Error updating document: ', error);
            return 'error'; // Return the status
        });
};

export { update };