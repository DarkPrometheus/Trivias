import React, { useState } from 'react'
import { NavBar } from '../NavBar/NavBar';
import { CategoriasPreguntas } from './../../services/Categorias';
import { useFetch } from './../../hooks/useFetch';

let Categorias = [];
let p = 0;
CategoriasPreguntas.forEach(a => {
    Categorias.push(a.Categoria);
})

export const Tablas = () => {
    const [Categoria, setCategoria] = useState(Categorias[0]);
    const [num, setNum] = useState(0)

    const { loading, data, vacio } = useFetch(Categoria);

    const handleCategoriaChange = change => {
        if (p === 0 && change === -1) {
            p = Categorias.length - 1;
        } else if (p === Categorias.length - 1 && change === 1) {
            p = 0;
        } else {
            p = p + change;
        }
        setCategoria(Categorias[p])
    }

    let temp = num;
    return (
        <div className="Tablas__main">
            <NavBar />
            <div className="Tablas__title">
                <i className="fas fa-chevron-circle-left" onClick={() => handleCategoriaChange(-1)}></i>
                <h1>{Categoria}</h1>
                <i className="fas fa-chevron-circle-right" onClick={() => handleCategoriaChange(1)}></i>
            </div>
            <div className="Tablas__content">
                <table>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Usuario</th>
                            <th>Puntos</th>
                            <th>Tiempo</th>
                            <th>Fecha</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            loading
                                ?
                                (
                                    <tr>
                                        <td>Cargando...</td>
                                        <td>Cargando...</td>
                                        <td>Cargando...</td>
                                        <td>Cargando...</td>
                                        <td>Cargando...</td>
                                    </tr>
                                )
                                :
                                (
                                    data.map(a => {
                                        temp++
                                        return (
                                            <tr key={a.Usuario}>
                                                <td>{temp}</td>
                                                <td>{a.Usuario}</td>
                                                <td>{a.Puntos}</td>
                                                <td>{a.Tiempo}</td>
                                                <td>{a.Fecha}</td>
                                            </tr>
                                        )
                                    })
                                )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}
