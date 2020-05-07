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

export const consultarTodos = async(fnPintar) => {
    try {
        let resultado = await global.firestoreBD
            .collection("direcciones")
            .doc(global.mailUsuario)
            .collection("puntos")
            // .doc()
            .get();
        console.log(resultado)
        await fnPintar(resultado.docs);
        // resultado.docs[0].data()

    } catch (error) {
        Alert.alert("Error", error.message)
    }

}