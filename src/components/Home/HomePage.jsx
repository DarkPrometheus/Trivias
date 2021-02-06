import React from 'react';
import { Link } from "react-router-dom";
import { NavBar } from '../NavBar/NavBar';
import { Footer } from './../Footer/Footer';

export const HomePage = () => {
    return (
        <div className="Home__main">
            <NavBar />
            <div className="Home__content">
                <h1>Bienvenido a Trivias</h1>
                <p>Prueba tus conocimientos con 20 preguntas en ciencia, historia, geografia y entretenimiento. Compite con tus amigos y puntua entre los mejores en la tabla de puntos</p>
                <Link className="Jugar" to="/Home/Categorias">¡A jugar!</Link>
            </div>
            <Footer />
        </div>
    )
}
