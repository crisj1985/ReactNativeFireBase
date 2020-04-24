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

const registrarListener = (fnPintar) => {
    productos = [];
    global.firestoreBD
        .collection('productos')
        .onSnapshot((snapShotCambios) => {
            let cambios = snapShotCambios.docChanges();
            let itemCambio;
            for (let i = 0; i < cambios.length; i++) {
                itemCambio = cambios[i];
                if ((itemCambio.type == "added")) {
                    productos.push(itemCambio.doc.data())
                    Alert.alert("Cambio Added");
                } else if ((itemCambio.type == "removed")) {
                    Alert.alert("Cambio removed");
                } else if ((itemCambio.type == "modified")) {
                    Alert.alert("Cambio modified");
                }

            }
            fnPintar(productos);
        })
}

export { crearProducto, registrarListener };