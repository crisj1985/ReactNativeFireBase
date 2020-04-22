import React, { Component } from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { NavigationContext } from "@react-navigation/native";

export class Login extends Component {
         static contextType = NavigationContext;
         

         render() {
           const { cambiarEstado } = this.props;
           const navigation = this.context;
           return (
             <View style={styles.container}>
               <Text>Login</Text>
               <Button
                 title="Ingresar"
                 onPress={() => {
                   cambiarEstado();
                 }}
               />
               <Button title="Registrar" onPress={() => {navigation.navigate(
                                                           "Registro"
                                                         );}} />
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
