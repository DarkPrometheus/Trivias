import firebase from 'firebase/app';
import "firebase/firestore";
import "firebase/auth";

var firebaseConfig = {
    apiKey: "AIzaSyBOCevG_BCf5F4hlKRQ3qBgB0a4Z0cBERk",
    authDomain: "react-app-plataforma.firebaseapp.com",
    projectId: "react-app-plataforma",
    storageBucket: "react-app-plataforma.appspot.com",
    messagingSenderId: "758540809747",
    appId: "1:758540809747:web:77e69f91e5fa310c3d71e6"
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export {
    db,
    googleAuthProvider,
    firebase
}