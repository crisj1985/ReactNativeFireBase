import { Alert } from "react-native"

export const crearDireccion = async(direccion, onSuccess, onError) => {

    try {
        let respuesta = await global.firestoreBD
            .collection("direcciones")
            .doc(global.mailUsuario)
            .collection("puntos")
            .add(direccion);
        console.log("respuesta!" + respuesta);
        onSuccess();
    } catch (error) {
        onError(error);
    }
}