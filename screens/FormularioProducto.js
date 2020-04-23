import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Input,Button } from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome";

export class FormularioProducto extends Component {

constructor(){
  super();
  this.state={
id:0,
nombre:"",
precio:0
  }
}

  render() {
    return (
      <View style={styles.container}>
        <Text>FORMULARIO DE PRODUCTO</Text>
        <Input
          value={this.state.Id}
          placeholder="Id"
          secureTextEntry={false}
          onChangeText={(txt) => {
            this.setState({ id: txt });
          }}
          leftIcon={{ type: "font-awesome", name: "key", color:'red' }}
        />
        <Input
          value={this.state.Id}
          placeholder="Nombre"
          secureTextEntry={false}
          onChangeText={(txt) => {
            this.setState({ nombre: txt });
          }}
          leftIcon={{ type: "font-awesome", name: "shopping-cart" , color:'darkblue'}}
        />
        <Input
          value={this.state.Id}
          placeholder="Precio"
          secureTextEntry={false}
          onChangeText={(txt) => {
            this.setState({ precio: txt });
          }}
          leftIcon={{ type: "font-awesome", name: "money", color:'green' }}
        />
        <Button
          onPress={() => {
            
          }}
          icon={<Icon name="save" size={20} color="white" type='font-awesome'/>}
          style={{alignItems:'stretch', justifyContent: "center"}}
        ></Button>
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
