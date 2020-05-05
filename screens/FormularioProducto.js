import React, { Component } from "react";
import { StyleSheet, Text, View, Alert } from "react-native";
import { Input,Button, Avatar } from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome";
import { crearProducto, updateElementoFB, crearProductoRest, actualizarProductoRest, recuperarTodos} from '../Servicios/ServiciosProducos'

export class FormularioProducto extends Component {
         constructor(props) {
           super(props);

           if (this.props.route != null && this.props.route.params != null){
             let producto = this.props.route.params.producto;


             this.state = {
               id: ""+producto.id,
               nombre: producto.nombre,
               precio: "" +producto.precio,
               esNuevo:false,
               url:producto.url
             };
           }
           else{
             this.state = {
               id: 0,
               nombre: "",
               precio: 0,
               esNuevo: true,
               url: null
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

         recibirUrl = (urlDescarga) => {
           console.log("urldes", urlDescarga);
           this.setState({
             url:urlDescarga
           })
         }

         render() {
           let {nombre,url} = this.state;
           return (
             <View style={styles.container}>
               <Text>FORMULARIO DE PRODUCTO</Text>
                 <Avatar
                   title={nombre.substring(0, 2)}
                   size="xlarge"
                   source={url ? { uri: url } : null}
                   icon={url ? null : { name: "user", type: "font-awesome" }}
                 />
               <Button
                 title="Editar imagen"
                 onPress={() => {
                   this.props.navigation.navigate("StackCargarImagen", {
                     fnUrl: this.recibirUrl,
                   });
                 }}
               />

               <Input
                 disabled={!this.state.esNuevo}
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
                   if (this.state.esNuevo) {
                    //  crearProducto(
                    //    {
                    //      id: this.state.id,
                    //      nombre: this.state.nombre,
                    //      precio: parseFloat(this.state.precio),
                    //      url: this.state.url,
                    //    },
                    //    this.OnSuccess,
                    //    this.OnError
                    //  );
                     crearProductoRest({
                         nombre: this.state.nombre,
                         precio: parseFloat(this.state.precio),
                         url: this.state.url,})
                     recuperarTodos();
                   } else {
                     actualizarProductoRest({
                       id: this.state.id,
                         nombre: this.state.nombre,
                         precio: parseFloat(this.state.precio),
                         url: this.state.url,})

                    //  updateElementoFB(
                    //    {
                    //      id: this.state.id,
                    //      nombre: this.state.nombre,
                    //      precio: parseFloat(this.state.precio),
                    //      url: this.state.url,
                    //    },
                    //    this.OnSuccess,
                    //    this.OnError
                    //  );
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
