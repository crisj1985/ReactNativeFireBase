import { Alert } from "react-native";

// export const agregarItem = (mail, itemCompra, value) => {

//     global.firestoreBD
//         .collection("carritos")
//         .doc(mail).collection("items")
//         .doc(itemCompra.id)
//         .get()
//         .then((obj) => {
//             console.log('Objeto', obj.exists)
//             if (obj.exists) {
//                 let cantidadItem = obj.data().cantidad;
//                 let itemPrecio = obj.data().precio;
//                 global.firestoreBD
//                     .collection("carritos")
//                     .doc(mail).collection("items")
//                     .doc(itemCompra.id)
//                     .update({
//                         cantidad: cantidadItem + value,
//                         subtotal: (cantidadItem + value) * itemPrecio
//                     })
//             } else {
//                 itemCompra.subtotal = itemCompra.precio;
//                 global.firestoreBD
//                     .collection("carritos")
//                     .doc(mail).collection("items")
//                     .doc(itemCompra.id)
//                     .set(itemCompra)
//                     .then((obj) => {
//                         Alert.alert("Agregado al Carrito");
//                     })
//                     .catch((error) => {
//                         Alert.alert(error);
//                     })
//             }

//         })
//         .catch((error) => {

//         })

// }

export const agregarItem = async(mail, itemCompra, value) => {

    try {
        let obj = await global.firestoreBD
            .collection("carritos")
            .doc(mail).collection("items")
            .doc(itemCompra.id)
            .get();
        console.log('Objeto', obj.exists)
        if (obj.exists) {
            let cantidadItem = obj.data().cantidad;
            let itemPrecio = obj.data().precio;
            let actualiza = await global.firestoreBD
                .collection("carritos")
                .doc(mail).collection("items")
                .doc(itemCompra.id)
                .update({
                    cantidad: cantidadItem + value,
                    subtotal: (cantidadItem + value) * itemPrecio
                })
            console.log("Actualiza cantidad")
        } else {
            itemCompra.subtotal = itemCompra.precio;
            let agrega = await global.firestoreBD
                .collection("carritos")
                .doc(mail).collection("items")
                .doc(itemCompra.id)
                .set(itemCompra)
            console.log("Agregado al carrito")

        }

    } catch (error) {
        console.log("error!", error)
    }



}

export const buscarElemento = (elem, arreglo) => {

    for (i = 0; i < arreglo.length; i++) {
        if (arreglo[i].id == elem.id)
            return i
    }

    return -1;
}

export const actualizarElemento = (elem, arreglo) => {
    let indice = buscarElemento(elem, arreglo)
    arreglo[indice] = elem;
}

export const eliminarElemento = (elem, arreglo) => {
    let indice = buscarElemento(elem, arreglo)
    if (indice != -1)
        arreglo.splice(indice, 1)

}

export const eliminarElementoFB = (mail, id, onError) => {
    global.firestoreBD
        .collection('carritos')
        .doc(mail)
        .collection("items")
        .doc(id)
        .delete()
        .then((obj) => { Alert.alert("Item Eliminado") })
        .catch((error) => { Alert.alert("Error", error.message) })


}

export const VaciarCarrito = (lstItems, mail) => {
    lstItems.forEach(element => {
        global.firestoreBD
            .collection('carritos')
            .doc(mail)
            .collection("items")
            .doc(element.id)
            .delete()
            .then((obj) => {})
            .catch((error) => { Alert.alert("Error", error.message) })
    });

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
                } else if ((itemCambio.type == "removed")) {
                    eliminarElemento(itemCambio.doc.data(), items)
                } else if ((itemCambio.type == "modified")) {
                    actualizarElemento(itemCambio.doc.data(), items)
                }

            }
            fnPintar(items);
        })
}