import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import validator from 'validator';
import Swal from 'sweetalert2';

import { useForm } from './../../hooks/useForm';
import { setError, removeError } from '../../actions/ui';
import { startRegisterWithEmailPasswordName } from '../../actions/auth';

export const RegisterScreen = () => {

    const dispatch = useDispatch();

    // Extraer informacion del state en redux
    // const { msgError } = useSelector(state => state.ui);

    const [formValues, handleInputChange] = useForm({
        name: "Prueba",
        email: "Borrar@gmail.com",
        password: "123456",
        password2: "123456"
    })

    const { name, email, password, password2 } = formValues;

    const handleRegister = (e) => {
        e.preventDefault();

        if (isFormValue()) {
            dispatch(startRegisterWithEmailPasswordName(email, password, name))
        }
    }

    let ErrorMessage;
    const isFormValue = () => {
        if (name.trim().length === 0) {
            ErrorMessage = "El nombre es requerido";
            dispatch(setError(ErrorMessage))
            Swal.fire("Error", ErrorMessage, "error")
            return false;
        }
        else if (!validator.isEmail(email)) {
            ErrorMessage = "El correo no es valido";
            dispatch(setError(ErrorMessage))
            Swal.fire("Error", ErrorMessage, "error")
            return false;
        }
        else if (password.trim().lengh < 6) {
            ErrorMessage = "La contraseña debe tener al menos 6 caracteres";
            dispatch(setError(ErrorMessage))
            Swal.fire("Error", ErrorMessage, "error")
            return false;
        }
        else if (password !== password2) {
            ErrorMessage = "Las contraseñas no coinciden";
            dispatch(setError(ErrorMessage))
            Swal.fire("Error", ErrorMessage, "error")
            return false;
        }

        dispatch(removeError());
        return true;
    }

    return (
        <>
            <h3 className="auth__title">Registro</h3>

            <form onSubmit={handleRegister}>

                <input
                    type="text"
                    placeholder="Nombre"
                    name="name"
                    className="auth__input"
                    autoComplete="off"
                    value={name}
                    onChange={handleInputChange}
                />

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

                <input
                    type="password"
                    placeholder="Confirmar contraseña"
                    name="password2"
                    className="auth__input"
                    value={password2}
                    onChange={handleInputChange}
                />

                <button
                    type="submit"
                    className="btn btn-primary btn-block mb-5"
                >
                    Registrarse
                </button>

                <Link
                    to="/auth/login"
                    className="link"
                >
                    ¿Ya tienes cuenta?
                </Link>
            </form>
        </>
    )
}
