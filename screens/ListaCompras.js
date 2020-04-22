import React, { Component } from "react";
import { StyleSheet, Text, View, Button } from "react-native";


// function TabCompra() {
//   return (

//     <navStack.Navigator initialRouteName='DetalleCompraScreen'>
//       <navStack.Screen options={{ title: 'Detalle Compra' }} name="DetalleCompraScreen" component={DetalleCompra} />
//     </navStack.Navigator>

//   );
// }

export class ListaCompras extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>LISTA DE COMPRAS</Text>
        <Button 
          title='Detalle' 
          onPress={() => { this.props.navigation.navigate("StackDetalleCompra");}}
        >
        </Button>

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
