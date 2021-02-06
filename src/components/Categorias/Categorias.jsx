import React from 'react';
import { Link } from "react-router-dom";
import { useSelector } from 'react-redux';

import { NavBar } from '../NavBar/NavBar';
import { CategoriasPreguntas } from './../../services/Categorias';
import { Footer } from './../Footer/Footer';

export const Categorias = () => {
    const { name } = useSelector(state => state.auth);

    return (
        <div className="Categorias__main">
            <NavBar />
            <div className="Categorias__content">
                <h1>Selecciona una categoria</h1>
                <div className="Categorias__buttons">
                    {
                        CategoriasPreguntas.map(a => {
                            return (
                                <Link
                                    key={a.Categoria}
                                    to={{
                                        pathname: "/Home/Categorias/" + a.Categoria,
                                        state: {
                                            preguntas: a.preguntas,
                                            Categoria: a.Categoria,
                                            user: name,
                                            preguntasGeneradas: false
                                        }
                                    }}
                                    className="Border"
                                >{a.Categoria}</Link>
                            )
                        })
                    }
                </div>
            </div>
            <Footer />
        </div>
    )
}
