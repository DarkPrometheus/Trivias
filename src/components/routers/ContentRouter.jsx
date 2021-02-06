import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import { HomePage } from './../Home/HomePage';
import { Categorias } from '../Categorias/Categorias';
import Categoria from './../Categorias/Categoria';
import { CategoriasPreguntas } from './../../services/Categorias';
import { Tablas } from './../TablaPuntuacion/Tablas';

export const ContentRouter = () => {
    return (
        <Switch>
            <Route
                exact
                path="/Home"
                component={HomePage}
            />

            <Route
                exact
                path="/Home2"
                component={HomePage}
            />

            <Route
                exact
                path={"/Home/Categorias"}
                component={Categorias}
            />

            <Route
                exact
                path={"/Home/TablasDePuntuacion"}
                component={Tablas}
            />

            {
                CategoriasPreguntas.map(a => {
                    return <Route key={"/Home/Categorias/" + a.Categoria} exact path={"/Home/Categorias/" + a.Categoria} component={Categoria} />
                })
            }

            <Redirect to="/Home" />
        </Switch>
    )
}
