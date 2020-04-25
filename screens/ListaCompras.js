import React, { Component } from "react";
import { StyleSheet, Text, View, Button, FlatList } from "react-native";
import { registrarListener } from '../Servicios/ServiciosProducos'
import { ItemCompra } from "./itemCompras";

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
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>LISTA DE COMPRAS</Text>
        <FlatList
          data={this.state.lstCompras}
          renderItem={({ item }) => {
            return <ItemCompra  productos={item} />
          }}
          keyExtractor={item => item.id + ''}
        />

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
