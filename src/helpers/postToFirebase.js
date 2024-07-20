import { set, ref } from "firebase/database";
import { db } from "../firebase";
import { v4 as uuidv4 } from 'uuid';

const postToFirebase = (cultivo,
    tamañoLotes,
    rendimientoEsperado,
    rendimientoIndiferencia) =>
{
    const id = uuidv4();
    set(ref(db, `/${id}`), {
        id,
        cultivo,
        tamañoLotes,
        rendimientoEsperado,
        rendimientoIndiferencia
    })
        .then(() =>
        {
            console.log('Data saved successfully.');
        })
        .catch((error) =>
        {
            console.error('Error saving data:', error);
        });
}

export
{
    postToFirebase
}
