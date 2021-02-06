export const retornaDocumentos = (snapshot) => {
    const documentos = [];

    snapshot.forEach(snapHijo => {
        let tiempo = snapHijo.data().Tiempo;
        let min, seg;
        min = Math.trunc(tiempo / 60)
        seg = tiempo - (60 * min)
        tiempo = min + ":" + seg

        documentos.push({
            id: snapHijo.id,
            Usuario: snapHijo.data().Usuario,
            Tiempo: tiempo,
            Puntos: snapHijo.data().Puntos,
            Fecha: snapHijo.data().Fecha,
        });
    });

    return documentos;
}