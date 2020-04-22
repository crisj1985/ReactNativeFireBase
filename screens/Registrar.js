import React, { Component } from "react";
import firebase from "firebase";
import { StyleSheet, Text, View, Button, Alert } from "react-native";
import { Input } from "react-native-elements";

export class Registrar extends Component {

constructor(){
    super();
    this.state = {
        email:'',
        password:''
    }
}

fnCrearUsuarioFireBase = (email, pass) => {
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, pass)
      .then((obj) => {
        Alert.alert("Info", "Usuario Registrado");
      })
      .catch((error) => {
        Alert.alert("Error! " + error.message);
      });
}

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
        />
        <Input
          value={this.state.password}
          placeholder="Password"
          secureTextEntry={true}
          onChangeText={(txt) => {
            this.setState({ password: txt });
          }}
        />

        <Button title='Registrarse' onPress={()=>{
this.fnCrearUsuarioFireBase(this.state.email,this.state.password)
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
