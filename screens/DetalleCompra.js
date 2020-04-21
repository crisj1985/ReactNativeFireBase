import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
export class DetalleCompra extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>DETALLE DE COMPRA</Text>
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
