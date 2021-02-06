import Swal from 'sweetalert2';
import { firebase, googleAuthProvider } from '../firebase/firebaseConfig';

import { types } from '../types/types';
import { finishLoading, startLoading } from './ui';

export const startLoginEmailPass = (email, password) => {
    return (dispatch) => {
        dispatch(startLoading());

        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(({ user }) => {
                dispatch(login(user.uid, user.displayName));

                dispatch(finishLoading());
            })
            .catch(e => {
                console.log(e);
                dispatch(finishLoading());
                if (e.code === "auth/user-not-found" || e.code === "auth/wrong-password") {
                    e.message = "El correo no la contraseña no son correctos";
                }
                Swal.fire('Error', e.message, 'error');
            })
    }
}

export const startRegisterWithEmailPasswordName = (email, password, name) => {
    return (dispatch) => {
        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then(async ({ user }) => {
                await user.updateProfile({ displayName: name })
                dispatch(login(user.uid, user.displayName));
            })
            .catch(e => {
                if (e.code === "auth/weak-password") {
                    e.message = "La contraseña debe tener al menos 6 caracteres";
                }
                Swal.fire('Error', e.message, 'error');
            })
    }
}

export const startGoogleLogin = () => {
    return (dispatch) => {

        firebase.auth().signInWithPopup(googleAuthProvider)
            .then(({ user }) => {
                dispatch(
                    login(user.uid, user.displayName)
                )
            });

    }
}

export const login = (uid, displayName) => {
    return {
        type: types.login,
        payload: {
            uid,
            displayName
        }
    }
}

export const startLogout = () => {
    return async (dispatch) => {
        await firebase.auth().signOut();

        dispatch(logout());
    }
}


export const logout = () => ({
    type: types.logout
})
