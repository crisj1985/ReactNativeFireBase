import React, { Component } from "react";
import firebase from "firebase";
import { StyleSheet, Text, View, Button, Alert } from "react-native";
import { Input } from "react-native-elements";
import {fnCrearUsuarioFireBase} from '../Servicios/ServiciosLogin'


export class Registrar extends Component {

constructor(){
    super();
    this.state = {
        email:'',
        password:''
    }
}

irLogin = () => {this.props.navigation.goBack();}

  render() {

    const {cambiarEstado} = this.props
    return (
      <View style={styles.container}>
        <Input
          value={this.state.email}
          placeholder="E-mail"
          onChangeText={(txt) => {
            this.setState({ email: txt });
          }}
          leftIcon={{
            type: 'font-awesome', name: 'envelope-open-o' }}
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

        <Button title='Registrarse' onPress={()=>{
fnCrearUsuarioFireBase(this.state.email,this.state.password,this.irLogin)
        }}/>
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
