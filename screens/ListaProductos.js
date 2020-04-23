import React, { Component } from "react";
import { StyleSheet, Text, View, Button, Alert } from "react-native";
import ActionButton from "react-native-action-button";
import Icon from "react-native-vector-icons/Ionicons";

export class ListaProductos extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>LISTA DE PRODUCTOS</Text>
        <Button
          title="Formulario Productos"
          onPress={() => {
            this.props.navigation.navigate("StackFormularioProducto");
          }}
        ></Button>
        <ActionButton buttonColor="rgba(231,76,60,1)">
          <ActionButton.Item
            buttonColor="#9b59b6"
            title="New Task"
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
