import { Alert } from "react-native"

const crearProducto = (producto, onSuccess, onError) => {
    global.firestoreBD
        .collection("productos")
        .doc(producto.id).set(producto)
        .then((obj) => {
            onSuccess();
        })
        .catch((error) => {
            onError(error);
        })
}

const registrarListener = () => {
    global.firestoreBD
        .collection('productos')
        .onSnapshot(() => {
            Alert.alert('cambio sobre productos');
        })
}

export { crearProducto, registrarListener };