import React, { Component } from "react";
import firebase from "firebase";
import { StyleSheet, Text, View, Button, Alert } from "react-native";
import { Input } from "react-native-elements";
import { fnCrearUsuarioFireBase, CerrarSesion} from '../Servicios/ServiciosLogin'


export class SingOut extends Component {

constructor(){
    super();
    this.state = {
        email:'',
        password:''
    }
}

  render() {

    const {cambiarEstado} = this.props
    return (
      <View style={styles.container}>
<Text>Seguro que desea salir??</Text>
        <Button title='Cerrar sesion' onPress={()=>{
                CerrarSesion();
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
