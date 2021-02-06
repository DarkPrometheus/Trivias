import React from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import { Link } from "react-router-dom";
import { startLogout } from './../../actions/auth';

export const NavBar = () => {
    const { name } = useSelector(state => state.auth);

    const dispatch = useDispatch();

    const handleLogout = () => {
        dispatch(startLogout());
    }

    return (
        <nav>
            <ul>
                <Link to="/Home"><i className="fas fa-home"></i>Inicio</Link>
                <Link to="/Home/Categorias"><i className="fas fa-book-open"></i>Categorias</Link>
                <Link to="/Home/TablasDePuntuacion"><i className="fas fa-table"></i>Tabla de puntuacion</Link>
            </ul>
            <section></section>
            <section className="Perfil">
                <i className="fas fa-sign-out-alt" onClick={handleLogout}></i>
                <Link to="/Home/Perfil">{name}</Link>
            </section>
        </nav>
    )
}
