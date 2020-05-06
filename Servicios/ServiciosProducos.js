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

const updateElementoFB = (producto, onSuccess, onError) => {
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

export const recuperarTodos = async(fnPintar) => {
    console.log("ingreso");

    try {
        const response = await fetch('http://192.168.1.3:1337/productos');
        const json = await response.json();
        let productos = [];
        if (response.ok) {
            productos = json;
            console.log("producto", productos);
            await fnPintar(productos);
        } else {
            console.log("error:", json.message);
        }

        // console.log(json);
    } catch (error) {
        Alert.alert("error al consumir WS", error.message)
    }
    // return productos


}

export const crearProductoRest = async(producto) => {
    try {
        let hs = new Headers();
        hs.append("Content-Type", 'application/json');
        let options = {
            method: 'POST',
            headers: hs,
            body: JSON.stringify(producto)
        }
        const response = await fetch('http://192.168.1.3:1337/productos', options);
        const json = await response.json();
        if (response.ok) {
            let producto = json;
            Alert.alert("Exito: Producto creado desde Rest");
        } else {
            console.log("error:", json.message);
        }
    } catch (error) {
        Alert.alert("error al consumir WS", error.message)
    }
}


export const eliminarProductoRest = async(producto) => {
    try {
        let hs = new Headers();
        hs.append("Content-Type", 'application/json');
        let options = {
            method: 'DELETE',
            headers: hs,
            body: JSON.stringify(producto)
        }
        const response = await fetch('http://192.168.1.3:1337/productos/' + producto.id, options);
        const json = await response.json();
        if (response.ok) {
            let producto = json;
            Alert.alert("Producto Eliminado");
        } else {
            console.log("error:", json.message);
        }
    } catch (error) {
        Alert.alert("error al consumir WS", error.message)
    }
}

export const actualizarProductoRest = async(producto) => {
    try {
        let hs = new Headers();
        hs.append("Content-Type", 'application/json');
        let options = {
            method: 'PUT',
            headers: hs,
            body: JSON.stringify(producto)
        }
        const response = await fetch('http://192.168.1.3:1337/productos/' + producto.id, options);
        const json = await response.json();
        if (response.ok) {
            let producto = json;
            Alert.alert("Producto Actualizado");
        } else {
            console.log("error:", json.message);
        }
    } catch (error) {
        Alert.alert("error al consumir WS", error.message)
    }
}
export { crearProducto, registrarListener, eliminarElementoFB, updateElementoFB };