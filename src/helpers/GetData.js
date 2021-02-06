import { db } from '../firebase/firebaseConfig';
import { retornaDocumentos } from "./retornaDocimentos";

export const GetData = async (categoria) => {
    const document = db.collection("Puntuaciones" + categoria);
    let respuesta;
    await document.orderBy("Puntos", "desc").get().then(snap => respuesta = retornaDocumentos(snap));

    if (respuesta.length === 0) {
        respuesta = []
        respuesta.push(
            {
                id: "Sin datos",
                Usuario: "Sin datos",
                Tiempo: "Sin datos",
                Puntos: "Sin datos",
                Fecha: "Sin datos",
            }
        )
    }

    return respuesta;
}

export const GetDataWhereUser = async (categoria, usuario) => {
    const document = db.collection("Puntuaciones" + categoria).where("Usuario", "==", usuario);
    let respuesta;

    await document.get().then(snap => respuesta = retornaDocumentos(snap));

    return respuesta;
}
