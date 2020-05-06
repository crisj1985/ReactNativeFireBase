import React, { Component } from 'react'
import { Text, View, StyleSheet, Dimensions,Alert } from "react-native";
import MapView, { Marker } from "react-native-maps";
import Geocoder from "react-native-geocoding";
import * as Location from "expo-location";
import { Button } from 'react-native-elements';
import {crearDireccion} from "../Servicios/ServiciosMapa"

export class Mapa extends Component {
         constructor() {
           super();
           Geocoder.init("AIzaSyDV3n0OpdjTix2gFgReRLmnyfbyrurwSKY");
           this.state = {
             coordenadasMarcador: {
               latitude: -0.2107778,
               longitude: -78.5092874,
             },
             direccion: "",
             initialLongitude: 0,
             initialLatitude: 0,
           };
         }

         obtenerPosicion = async () => {
           let { status } = await Location.requestPermissionsAsync();
           if (status !== "granted") {
             setErrorMsg("Error al otorgar el permiso");
           }

           let location = await Location.getCurrentPositionAsync({});
           console.log("lcoation", location);
           if (location) {
             this.setState({
               // initialLongitude: location.coords.longitude,
               // initialLatitude: location.coords.latitude,
               coordenadasMarcador: {
                 latitude: location.coords.latitude,
                 longitude: location.coords.longitude,
               },
               region: {
                 latitude: location.coords.latitude,
                 longitude: location.coords.longitude,
                 latitudeDelta: 0.01,
                 longitudeDelta: 0.01,
               },
             });
           }
         };

         componentDidMount() {
           this.obtenerPosicion();
         }

         OnSuccess = () => {
           Alert.alert("Direccion Creada!");
         };

         OnError = (error) => {
           Alert.alert("Error", error.message);
         };

         render() {
           const { direccion, initialLongitude, initialLatitude, region, coordenadasMarcador} = this.state;
           const { latitude, longitude} = coordenadasMarcador;
           return (
             <View style={styles.container}>
               {/* <Text>{direccion}</Text> */}
               <MapView
                 style={styles.mapStyle}
                 initialRegion={region}
                 onRegionChange={(region) => {
                   console.log("Geocoder", region);
                   this.setState({
                     coordenadasMarcador: {
                       latitude: region.latitude,
                       longitude: region.longitude,
                     },
                   });
                 }}
                 onRegionChangeComplete={async (region) => {
                   const direccion = await Geocoder.from(
                     region.latitude,
                     region.longitude
                   );
                   console.log(
                     "direccion es",
                     direccion.results[0].formatted_address
                   );
                   this.setState({
                     direccion: direccion.results[0].formatted_address,
                   });
                 }}
               >
                 <Marker coordinate={this.state.coordenadasMarcador}></Marker>
               </MapView>
               <Button style= {{flex:1} } title="Guardar" onPress={() => {
                   crearDireccion({dirección: direccion,
                                   latitud: latitude,
                                   longitud:longitude,
                                   estado: "V" }, this.OnSuccess, this.OnError)
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
  mapStyle: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
    flex:6
  },
});

