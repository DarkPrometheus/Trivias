import React from 'react'

export const GenerarTH = data => {
    const tds = [];
    let No = 1;
    data.then(
        a => {
            Object.entries(a).forEach(b => {
                tds.push(plantilla(No, b[1].Usuario, b[1].Puntos, b[1].Tiempo, b[1].Fecha))
                No++;
            })
        }
    )
    return tds;
}

const plantilla = (No, usuario, puntos, tiempo, fecha) => {
    return (
        <tr key={usuario}>
            <td>{No}</td>
            <td>{usuario}</td>
            <td>{puntos}</td>
            <td>{tiempo}</td>
            <td>{fecha}</td>
        </tr>
    )
}