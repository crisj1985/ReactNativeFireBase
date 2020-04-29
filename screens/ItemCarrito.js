import React, { Component } from 'react'
import { Text, View, StyleSheet} from 'react-native'
import { Button } from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome";
import {eliminarElementoFB} from "../Servicios/ServicioCarrito"

export class ItemCarrito extends Component {



    render() {
        const { itemCarrito} = this.props;
        const {id,nombre,cantidad,precio} = itemCarrito;

        return (
            <View style={styles.fila}>
                <View style={styles.cantidad}>
                    <Text style={styles.textoDescripcion}> {cantidad} </Text>
                </View>
                <View style={styles.producto}>
                    <Text style={styles.textoDescripcion}> {nombre} </Text>
                </View>
                <View style={styles.precio}>
                    <Text style={styles.textoDescripcion}> {precio} </Text>
                </View>
                <View style={styles.boton}>
                    <Button
                    type="clear"
                    onPress={() => {
                        eliminarElementoFB(global.mailUsuario, id, this.OnSuccess, this.OnError);
                    }}

                    icon={
                        <Icon
                            name="trash"
                            size={20}
                            color="white"
                            type="font-awesome"
                        />
                    }
                    />
                </View>
                
            </View>
        )
    }
}

const styles = StyleSheet.create({
    fila: {
        flex: 1,
        flexDirection: "row",//eje pricipal es el horizontal
        backgroundColor: "#E633FF",
        marginBottom: 10,
        paddingVertical: 10,
        borderRadius: 15

    },

    producto: {
        flex: 3,
        alignItems: "center"
    },
    cantidad: {
        flex: 1,
        justifyContent: "flex-start",
        alignItems:"center"

    },
    precio: {
        flex: 1,
        alignItems: "center",
        justifyContent: "flex-start",
    },
    boton: {
        flex: 2,
        alignItems: "center",
        paddingHorizontal: 10,
    },

    textoDescripcion: {
        fontSize: 18,
        fontWeight: "bold",
        color:"white"
    },
    textoPrecio: {
        fontSize: 15,
        fontWeight: "bold",
        paddingRight: 10,
    },
});
