import firebase from "firebase";
import { Alert } from "react-native";

export const fnCrearUsuarioFireBase = async(email, pass, fnIrLogin) => {
    try {
        let respuesta = await firebase
            .auth()
            .createUserWithEmailAndPassword(email, pass)
        console.log("respuesta! " + respuesta);
    } catch (error) {
        Alert.alert("Error! " + error.message);
        console.log("Error! " + error.message);
    }


    // firebase
    //     .auth()
    //     .createUserWithEmailAndPassword(email, pass)
    //     .then((obj) => {
    //         console.log("objeto:", obj.user)
    //         Alert.alert("Info", "Usuario Registrado");
    //         fnIrLogin();
    //     })
    //     .catch((error) => {
    //         Alert.alert("Error! " + error.message);
    //     });

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