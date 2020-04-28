import React, { Component } from 'react'
import { Text, View ,StyleSheet, Button} from 'react-native'
import { agregarItem} from '../Servicios/ServicioCarrito'
import { Avatar } from 'react-native-elements';

export class DetalleProducto extends Component {
constructor(props){
super(props);
    
}

    render() {
        let producto = this.props.route.params.producto;
        
        return (
            <View style={styles.container}>
                <Text>DETALLE DE COMPRA</Text>
                {console.log(producto)}
                <View style={styles.imagen}>
                    <Avatar title={producto.nombre.substring(0,2)} size={200}></Avatar>
                </View>
                <View style={styles.texto}>
                    <Text>Id: {producto.id}</Text>
                    <Text>Precio: {producto.precio}</Text>
                </View>
                <View style={styles.botones}>
                    <Button title="Agregar al Carrito"
                    onPress= {()=>{
                        agregarItem(global.mailUsuario, {cantidad:1, 
                                         id: producto.id, 
                                         nombre:producto.nombre, 
                                         precio:producto.precio });
                    }}
                    />
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        backgroundColor: "#fff",
        alignItems: "stretch",
        justifyContent: "flex-start",
    },
    imagen: {
        flex: 5,
        // backgroundColor: "red",
        alignItems: "center",
        justifyContent: "center",

    },
    texto: {
        flex: 3,
        // backgroundColor: "blue",
        alignItems: "center",
    },
    botones: {
        flex: 2,
        // backgroundColor: "gray",

    },
});
