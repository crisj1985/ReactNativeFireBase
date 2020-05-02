import { Alert } from "react-native"

const crearProducto = async(producto, onSuccess, onError) => {

    try {
        let respuesta = await global.firestoreBD
            .collection("productos")
            .doc(producto.id).set(producto);
        console.log("respuesta!" + respuesta);
        onSuccess();
    } catch (error) {
        onError(error);
    }

    // global.firestoreBD
    //     .collection("productos")
    //     .doc(producto.id).set(producto)
    //     .then((obj) => {
    //         onSuccess();
    //     })
    //     .catch((error) => {
    //         onError(error);
    //     })
}
const buscarElemento = (elem, arreglo) => {

    for (i = 0; i < arreglo.length; i++) {
        if (arreglo[i].id == elem.id)
            return i
    }

    return -1;
}

const actualizarElemento = (elem, arreglo) => {
    let indice = buscarElemento(elem, arreglo)
    arreglo[indice].id = elem.id;
    arreglo[indice].nombre = elem.nombre;
    arreglo[indice].precio = elem.precio;
}

const eliminarElemento = (elem, arreglo) => {
    let indice = buscarElemento(elem, arreglo)
    if (indice != -1)
        arreglo.splice(indice, 1)

}

const eliminarElementoFB = (id, onSuccess, onError) => {
    global.firestoreBD
        .collection('productos')
        .doc(id)
        .delete()
        .then((obj) => { onSuccess() })
        .catch((error) => { onError(error) })


}

const updateElementoFB = (producto) => {
    global.firestoreBD
        .collection('productos')
        .doc(producto.id)
        .update({ nombre: producto.nombre, precio: producto.precio })
        .then((obj) => { onSuccess() })
        .catch((error) => { onError(error) })
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
                } else if ((itemCambio.type == "removed")) {
                    eliminarElemento(itemCambio.doc.data(), productos)
                } else if ((itemCambio.type == "modified")) {
                    actualizarElemento(itemCambio.doc.data(), productos)
                }

            }
            fnPintar(productos);
        })
}

export { crearProducto, registrarListener, eliminarElementoFB, updateElementoFB };