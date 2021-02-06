import { db } from '../firebase/firebaseConfig';
import { GetDataWhereUser } from './GetData';

export const SaveData = async (user, puntos, tiempo, categoria) => {
    let today = new Date();
    let date = today.getDate() + '/' + (today.getMonth() + 1) + '/' + today.getFullYear()

    const data = {
        Usuario: user,
        Puntos: puntos,
        Tiempo: tiempo,
        Fecha: date
    }

    await VerificarDatos(categoria, data)
}

export const VerificarDatos = async (categoria, datos) => {
    await GetDataWhereUser(categoria, datos.Usuario).then(respuesta => {
        if (respuesta.length === 0) {
            db.collection("Puntuaciones" + categoria).add(datos)
        }
        else {
            if (respuesta[0].Puntos >= datos.Puntos) {
                console.log("Puntos mayores")
                if (respuesta[0].Tiempo <= datos.Tiempo) {
                    console.log("Tiempo mayor")
                }
            }
            else {
                db.collection("Puntuaciones" + categoria).doc(respuesta[0].id).update(datos)
            }
        }
    })
}