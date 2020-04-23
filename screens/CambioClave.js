import React, { Component } from "react";
import firebase from "firebase";
import { StyleSheet, Text, View, Button, Alert } from "react-native";
import { Input } from "react-native-elements";
import {  recuperarClave} from '../Servicios/ServiciosLogin'


export class CambioClave extends Component {

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

        <Button title='Recuperar Clave' onPress={()=>{
                recuperarClave(this.state.email)
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
