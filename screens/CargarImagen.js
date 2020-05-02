import React, { Component } from 'react'
import { StyleSheet, Text, View, Alert } from "react-native";
import { Input, Button, Avatar } from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome";
import * as ImagePicker from "expo-image-picker";
import * as Permissions from "expo-permissions";

export class CargarImagen extends Component {
         constructor() {
           super();
           this.state = {
             imagen: null,
           };
         }

         abrirImagen = async () => {
           let permissionResult;
           try {
             permissionResult = await ImagePicker.requestCameraRollPermissionsAsync();
           } catch (err) {
             Alert.alert("error");
           }
           if (permissionResult.granted === false) {
             Alert.alert("Permission to access camera roll is required!");
             return;
           }

           let pickerResult = await ImagePicker.launchImageLibraryAsync();
           if (!pickerResult.cancelled) {
             console.log("URI:", pickerResult.uri);
             this.setState({ imagen: pickerResult.uri });
           }
         };

         uriToBlob = (dataUrl, callback) => {
           let req = new XMLHttpRequest();
           req.open("GET", dataUrl, true);
           req.responseType = "blob";
           req.onload = () => {
             callback(req.response);
           };
           req.onerror = (error) => {
             console.log("error", error);
           };
           req.send(null);
         };

guardarStorage = ()=>{
this.uriToBlob(this.state.imagen, async(blob)=>{
    try {
            let nombreArchivo = new Date().getTime();
            let subir = await global.firestoreStorage
            .ref()
            .child("/imagenes/" + nombreArchivo)
            .put(blob);        
            this.urlDescarga(nombreArchivo);
            // console.log("imagen", subir);
    } catch (error) {
        console.log("error!",error)
    }

})
}

urlDescarga =  async (nombreArchivo) => {
    let urlDescarga = await global.firestoreStorage
      .refFromURL("gs://navegacion-ba78e.appspot.com/imagenes/" + nombreArchivo)
      .getDownloadURL();
      this.props.route.params.fnUrl(urlDescarga);
    }

         render() {
           return (
             <View>
               <Text> Cargar Imagen </Text>
               <Avatar
                 title="Imagen"
                 size="xlarge"
                 source={{ uri: this.state.imagen }}
               />
               <Button
                 title="Cargar"
                 onPress={() => {
                   this.abrirImagen();
                 }}
               />

               <Button
                 title="Guardar"
                 onPress={() => {
                   this.guardarStorage();
                 }}
               />
             </View>
           );
         }
       }
