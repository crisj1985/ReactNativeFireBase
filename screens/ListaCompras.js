import React, { Component } from "react";
import { StyleSheet, Text, View, Button, FlatList, Alert } from "react-native";
import { registrarListener, recuperarTodos } from '../Servicios/ServiciosProducos'
import { ItemCompra } from "./itemCompras";
import ActionButton from "react-native-action-button";
import Icon from "react-native-vector-icons/FontAwesome";

export class ListaCompras extends Component {
constructor(){
  super();
  this.state = {
    lstCompras : []
  }
}

  pintar = (compras) => {
    this.setState({
      lstCompras: compras,
    });

  }

  componentDidMount() {
    registrarListener(this.pintar);
    // recuperarTodos(this.pintar) ;
  }

  render() {
    // recuperarTodos(this.pintar);
    return (
      <View style={styles.container}>
        <Text>LISTA DE COMPRAS</Text>
        <FlatList
          data={this.state.lstCompras}
          renderItem={({ item }) => {
            return <ItemCompra productos={item} nav={this.props.navigation} />
          }}
          keyExtractor={item => item.id + ''}
        />
        <ActionButton 
          buttonColor="#E633FF" 
          onPress={() => { this.props.navigation.navigate("StackCarrito")}}
          renderIcon={active =>  (<Icon name="shopping-cart"
            size={32}
            color="white"
            type="font-awesome" style={styles.actionButtonIcon} />) }
        />
      
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "stretch",//aplica al eje transversal
    justifyContent: "center",//eje principal
    flexDirection : "column",//eje pricipal es el vertical
  },
});
