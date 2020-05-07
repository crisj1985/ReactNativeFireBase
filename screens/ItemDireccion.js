import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { Button } from 'react-native-elements'

export class ItemDireccion extends Component {

    render() {
        const { direccion } =this.props
        const { dirección} = direccion
        return (
            <View style={styles.fila}>
                <View style={styles.direccion}>
                    <Text style={styles.textoDireccion} > {dirección} </Text>
                </View>
                <View style={styles.boton}>
                    <Button
                    title="Eliminar"
                    onPress = {()=>{

                    }}
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
        backgroundColor: "#33FF86",
        marginBottom: 5,
        paddingVertical: 5,
        paddingHorizontal: 25,
        borderRadius: 5

    },
    direccion: {
        // flex: 4,
        // backgroundColor: "blue",
        alignItems: "center",
        justifyContent: "center",
    },
    boton: {
        // flex: 2,
        // alignItems: "center",
        // backgroundColor: "red",
        paddingHorizontal: 10, 
        paddingVertical: 10, 
        justifyContent: "flex-end",
        alignItems: "center",
    },
    textoDireccion: {
        fontSize: 14,
        fontWeight: "bold"
    },

})
