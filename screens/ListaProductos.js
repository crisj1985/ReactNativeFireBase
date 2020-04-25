import React, { Component } from "react";
import { StyleSheet, Text, View, Button, Alert, FlatList } from "react-native";
import ActionButton from "react-native-action-button";
import Icon from "react-native-vector-icons/Ionicons";
import { ItemProducto } from "./itemProductos";
import {registrarListener} from '../Servicios/ServiciosProducos'

export class ListaProductos extends Component {

constructor(){
  super();
  this.state = {
    listaProductos : []
  }
  
}

pintar= (productos)=>{
  this.setState({
    listaProductos: productos,
  });

}

componentDidMount(){
registrarListener(this.pintar);
}

  render() {
    return (
      <View style={styles.container}>
        <Text>LISTA DE PRODUCTOS</Text>
       <FlatList
       data={this.state.listaProductos}
       renderItem = {({item})=>{
       return <ItemProducto nav={this.props.navigation} productos={item}/>
       }}
       keyExtractor = {item=>item.id + ''}
       />
        <ActionButton buttonColor="rgba(231,76,60,1)">
          <ActionButton.Item
            buttonColor="#9b59b6"
            title="Nuevo Producto"
            onPress={() => this.props.navigation.navigate("StackFormularioProducto")}
          >
            <Icon name="md-create" style={styles.actionButtonIcon} />
          </ActionButton.Item>
        </ActionButton>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
