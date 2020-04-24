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

export { crearProducto }