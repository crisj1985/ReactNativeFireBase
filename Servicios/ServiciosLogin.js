import firebase from "firebase";
import { Alert } from "react-native";

export const fnCrearUsuarioFireBase = (email, pass, fnIrLogin) => {
    firebase
        .auth()
        .createUserWithEmailAndPassword(email, pass)
        .then((obj) => {
            Alert.alert("Info", "Usuario Registrado");
            fnIrLogin();
        })
        .catch((error) => {
            Alert.alert("Error! " + error.message);
        });

}


export const recuperarClave = (mail) => {
    firebase
        .auth()
        .sendPasswordResetEmail(mail)
        .then((obj) => {
            Alert.alert("Ingrese a su correo para restaurar la clave");
        })
        .catch((error) => {
            Alert.alert("Error! " + error.message);
        });
}


export const fnValidarIngreso = (email, pass) => {
    firebase
        .auth()
        .signInWithEmailAndPassword(email, pass)
        .then((obj) => {
            Alert.alert("Usuario registrado correctamente");

        })
        .catch((error) => {
            Alert.alert("Error! " + error.message);
        });

}

export const CerrarSesion = () => {
    firebase
        .auth()
        .signOut()
        .then((obj) => {

        })
        .catch(() => {
            Alert.alert("Error! " + error.message);
        })
}