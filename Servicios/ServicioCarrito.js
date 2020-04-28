import { Alert } from "react-native";

export const agregarItem = (mail, itemCompra) => {
    global.firestoreBD
        .collection("carritos")
        .doc(mail).collection("items")
        .doc(itemCompra.id)
        .set(itemCompra)
        .then((obj) => {
            Alert.alert("Agregado al Carrito");
        })
        .catch((error) => {
            Alert.alert(error);
        })
}

export const actualizarElemento = (elem, arreglo) => {
    let indice = buscarElemento(elem, arreglo)
    arreglo[indice].id = elem.id;
    arreglo[indice].nombre = elem.nombre;
    arreglo[indice].precio = elem.precio;
}

export const eliminarElemento = (elem, arreglo) => {
    let indice = buscarElemento(elem, arreglo)
    if (indice != -1)
        arreglo.splice(indice, 1)

}

export const registrarListener = (mail, fnPintar) => {
    items = [];
    global.firestoreBD
        .collection('carritos')
        .doc(mail)
        .collection("items")
        .onSnapshot((snapShotCambios) => {
            let cambios = snapShotCambios.docChanges();
            let itemCambio;
            for (let i = 0; i < cambios.length; i++) {
                itemCambio = cambios[i];
                if ((itemCambio.type == "added")) {
                    items.push(itemCambio.doc.data())
                }
                // else if ((itemCambio.type == "removed")) {
                //     eliminarElemento(itemCambio.doc.data(), items)
                // } else if ((itemCambio.type == "modified")) {
                //     actualizarElemento(itemCambio.doc.data(), items)
                // }

            }
            fnPintar(items);
        })
}