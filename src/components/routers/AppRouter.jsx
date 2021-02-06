import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Switch, Redirect } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { firebase } from '../../firebase/firebaseConfig';
import { login } from '../../actions/auth';
import { AuthRouter } from './AuthRouter';
import { ContentRouter } from './ContentRouter';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';

export const AppRouter = () => {

    const dispatch = useDispatch();

    const [checking, setChecking] = useState(true);
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        firebase.auth().onAuthStateChanged((user) => {

            if (user?.uid) {
                dispatch(login(user.uid, user.displayName));
                setIsLoggedIn(true);
            } else {
                setIsLoggedIn(false);
            }
            setChecking(false);
        });
    }, [dispatch, setChecking, setIsLoggedIn])

    // Pagina de espera antes de ser autenticado
    if (checking) {
        return (
            <h1>Espera...</h1>
        )
    }

    return (
        <Router>
            <div className="Routers">
                <Switch>
                    <PublicRoute
                        path="/auth"
                        isAuthenticated={isLoggedIn}
                        component={AuthRouter}
                    />

                    <PrivateRoute
                        isAuthenticated={isLoggedIn}
                        path="/Home"
                        component={ContentRouter}
                    />

                    <Redirect to="/auth" />
                </Switch>
            </div>
        </Router>
    )
}
