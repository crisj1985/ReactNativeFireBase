import React, { Component } from 'react'
import { Text, View, Button, Alert, TouchableHighlight, StyleSheet } from 'react-native'
import { eliminarElementoFB} from '../Servicios/ServiciosProducos'
import { NavigationContext } from '@react-navigation/native';
import { Avatar } from 'react-native-elements';

export class ItemCompra extends Component {

  OnSuccess = () => {
    Alert.alert('Producto Eliminado');
  };

  OnError = (error) => {
    Alert.alert('Error', error.message);
  };

    render() {
        const {productos,nav} = this.props 
        const {id,nombre,precio} = productos
        return (
          <TouchableHighlight
          underlayColor="white"
          onPress={()=>{
            nav.navigate("StackDetalleProducto", { producto: productos });
          }}
          >
            <View style={styles.fila}>
              <View style={styles.imagen}>
                <Avatar title={nombre.substring(0, 1)}> </Avatar>
              </View>
              <View style={styles.descripcion}>
                <Text style={styles.textoDescripcion}> {nombre} </Text>
              </View>
              <View style={styles.precio}>
                <Text style={styles.textoPrecio}> {precio} </Text>
              </View>
            </View>
          </TouchableHighlight>
          
        );
    }
}


const styles = StyleSheet.create({
  fila: {
    flex: 1,
    flexDirection: "row",//eje pricipal es el horizontal
    backgroundColor: "#33FF86",
    marginBottom:10,
    // alignItems: "stretch",//aplica al eje transversal
    // justifyContent: "center",//eje principal
    paddingVertical:10,
    // paddingTop: 10,
    borderRadius: 15
    
  },

  imagen:{
    // backgroundColor: "blue",
    flex:2,
    alignItems: "center"
  },
  descripcion: {
    flex: 5,
    // backgroundColor: "gray",
    justifyContent: "center",
    
  },
  precio: {
    flex: 2,
    // backgroundColor: "red",
    alignItems: "flex-end",
    justifyContent: "flex-end",
  },

  textoDescripcion:{
    fontSize:20,
    fontWeight:"bold"
  },
  textoPrecio: {
    fontSize: 15,
    fontWeight: "bold",
    paddingRight:10
  },
});