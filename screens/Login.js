import React, { Component } from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { NavigationContext } from "@react-navigation/native";
import { fnValidarIngreso} from '../Servicios/ServiciosLogin'
import { Input } from "react-native-elements";
import { Icon } from 'react-native-vector-icons'

export class Login extends Component {
         static contextType = NavigationContext;

         constructor(){
           super();
           this.state = {
             email:'',
             password: '',
           }
         }
         

         render() {
           const { cambiarEstado } = this.props;
           const navigation = this.context;
           return (
             <View style={styles.container}>
               <Text>Login</Text>
               <Input
                 value={this.state.email}
                 placeholder="E-mail"
                 onChangeText={(txt) => {
                   this.setState({ email: txt });
                 }}
                 leftIcon={{ type: 'font-awesome', name: 'envelope-open-o' }}
               />
               <Input
                 value={this.state.password}
                 placeholder="Password"
                 secureTextEntry={true}
                 onChangeText={(txt) => {
                   this.setState({ password: txt });
                 }}
                 leftIcon={{ type: 'font-awesome', name: 'key' }}
               />
               <Button
                 title="Ingresar"
                 onPress={() => {
                  //  cambiarEstado();
                   fnValidarIngreso(this.state.email, this.state.password);
                 }}
               />
               <Button title="Registrar" onPress={() => {navigation.navigate(
                                                           "Registro"
                                                         );}} />
               <Button title="Recuperar Clave" onPress={() => {
                 navigation.navigate(
                   "Recuperar"
                 );
               }} />
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
