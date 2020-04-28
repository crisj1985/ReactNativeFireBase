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