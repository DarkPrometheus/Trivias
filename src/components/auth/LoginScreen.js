import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Swal from 'sweetalert2';

import { useForm } from './../../hooks/useForm';
import { startGoogleLogin, startLoginEmailPass } from './../../actions/auth';
import { setError, removeError } from '../../actions/ui';
import validator from 'validator';

export const LoginScreen = () => {

    const dispatch = useDispatch();
    const { loading } = useSelector(state => state.ui)

    const [formValues, handleInputChange] = useForm({
        email: "Borrar@gmail.com",
        password: "123456"
    })

    const { email, password } = formValues;

    const handleLogin = (e) => {
        e.preventDefault();

        if (isFormValue()) {
            dispatch(startLoginEmailPass(email, password));
        }
    }

    let ErrorMessage
    const isFormValue = () => {

        if (email.trim().length === 0) {
            ErrorMessage = "El correo es requerido";
            dispatch(setError(ErrorMessage));
            Swal.fire("Error", ErrorMessage, "error");
            return false;
        }
        else if (!validator.isEmail(email)) {
            ErrorMessage = "El correo no es valido";
            dispatch(setError(ErrorMessage))
            Swal.fire("Error", ErrorMessage, "error")
            return false;
        }
        else if (password.trim().length === 0) {
            ErrorMessage = "La contraseña es requerida";
            dispatch(setError(ErrorMessage));
            Swal.fire("Error", ErrorMessage, "error");
            return false;
        }
        else if (password.trim().length < 6) {
            ErrorMessage = "A contraseña le faltan caracteres";
            dispatch(setError(ErrorMessage));
            Swal.fire("Error", ErrorMessage, "error");
            return false;
        }

        dispatch(removeError());
        return true;
    }

    const handleGoogleLogin = () => {
        dispatch(startGoogleLogin());
    }

    return (
        <>
            <h3 className="auth__title">Login</h3>

            <form onSubmit={handleLogin}>

                <input
                    type="text"
                    placeholder="Correo"
                    name="email"
                    className="auth__input"
                    autoComplete="off"
                    value={email}
                    onChange={handleInputChange}
                />

                <input
                    type="password"
                    placeholder="Contraseña"
                    name="password"
                    className="auth__input"
                    value={password}
                    onChange={handleInputChange}
                />

                <button
                    type="submit"
                    className="btn btn-primary btn-block"
                    disabled={loading}
                >
                    Iniciar sesion
                </button>


                <div className="auth__social-networks">
                    <p>Iniciar sesion con redes sociales</p>

                    <div
                        className="google-btn"
                        onClick={handleGoogleLogin}
                    >
                        <div className="google-icon-wrapper">
                            <img className="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="google button" />
                        </div>
                        <p className="btn-text">
                            <b>Iniciar sesion con google</b>
                        </p>
                    </div>
                </div>

                <Link
                    to="/auth/register"
                    className="link"
                >
                    Crear cuenta
                </Link>

            </form>
        </>
    )
}
