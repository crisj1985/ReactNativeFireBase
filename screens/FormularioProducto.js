import React, { Component } from "react";
import { StyleSheet, Text, View, Alert } from "react-native";
import { Input,Button } from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome";
import { crearProducto, updateElementoFB} from '../Servicios/ServiciosProducos'

export class FormularioProducto extends Component {
         constructor(props) {
           super(props);

           if (this.props.route != null && this.props.route.params != null){
             let producto = this.props.route.params.producto;


             this.state = {
               id: ""+producto.id,
               nombre: producto.nombre,
               precio: "" +producto.precio,
               esNuevo:false
             };
           }
           else{
             this.state = {
               id: 0,
               nombre: "",
               precio: 0,
               esNuevo: true
             };
           }
             


          
         }

         OnSuccess = () => {
           this.fnLimpiar();  
         };

         OnError = (error ) => {
           Alert.alert('Error',error.message);
         };

         fnLimpiar = () => {
           this.setState({
             id: '',
             nombre: "",
             precio: '',
           });
         };

         render() {
           return (
             <View style={styles.container}>
               <Text>FORMULARIO DE PRODUCTO</Text>
               <Input
               disabled = {!this.state.esNuevo}
                 value={this.state.id}
                 placeholder="Id"
                 secureTextEntry={false}
                 onChangeText={(txt) => {
                   this.setState({ id: txt });
                 }}
                 leftIcon={{ type: "font-awesome", name: "key", color: "red" }}
               />
               <Input
                 value={this.state.nombre}
                 placeholder="Nombre"
                 secureTextEntry={false}
                 onChangeText={(txt) => {
                   this.setState({ nombre: txt });
                 }}
                 leftIcon={{
                   type: "font-awesome",
                   name: "shopping-cart",
                   color: "darkblue",
                 }}
               />
               <Input
                 value={this.state.precio}
                 placeholder="Precio"
                 secureTextEntry={false}
                 onChangeText={(txt) => {
                   this.setState({ precio: txt });
                 }}
                 leftIcon={{
                   type: "font-awesome",
                   name: "money",
                   color: "green",
                 }}
               />
               <Button
                 onPress={() => {

                   if (this.state.esNuevo){
                    crearProducto({
                      id: this.state.id,
                      nombre: this.state.nombre,
                      precio: parseFloat(this.state.precio),
                    }, this.OnSuccess, this.OnError)
                  }
                  else{
                    updateElementoFB({
                      id: this.state.id,
                      nombre: this.state.nombre,
                      precio: parseFloat(this.state.precio),
                    }, this.OnSuccess, this.OnError)
                  }
                   
                 }}
                 icon={
                   <Icon
                     name="save"
                     size={20}
                     color="white"
                     type="font-awesome"
                   />
                 }
                 style={{ alignItems: "stretch", justifyContent: "center" }}
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
