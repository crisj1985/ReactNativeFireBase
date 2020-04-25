import React, { Component } from "react";
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator} from '@react-navigation/stack'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import { Icon } from 'react-native-elements'
import { ListaCompras} from './screens/ListaCompras'
import { ListaProductos } from './screens/ListaProductos'
import { FormularioProducto } from './screens/FormularioProducto'
import { DetalleCompra } from "./screens/DetalleCompra";
import { Informacion } from "./screens/Informacion";
import { Login } from "./screens/Login";
import { Registrar } from "./screens/Registrar";
import { CambioClave } from "./screens/CambioClave";
import {cargarConfiguracion} from './Servicios/firebaseConfig'
import {createDrawerNavigator} from '@react-navigation/drawer'
import firebase from "firebase";
import { SingOut}  from './screens/SingOut';
import { YellowBox } from "react-native";
import { decode, encode } from "base-64";

let navStack = createStackNavigator();
let NavTab = createBottomTabNavigator();
let NavDrawer = createDrawerNavigator();

function Home() {
  return (

    <navStack.Navigator initialRouteName='TabHome'>
      <navStack.Screen options={{ title: 'Home' }} name="TabHome" component={TabHome} />
      <navStack.Screen options={{ title: 'Formulario Productos' }} name="StackFormularioProducto" component={FormularioProducto} />
      <navStack.Screen options={{ title: 'Detalle Compras' }} name="StackDetalleCompra" component={DetalleCompra} />
    </navStack.Navigator>

  );
}

function TabHome() {
  return (
    <NavTab.Navigator initialRouteName="TabListaCompras">
      <NavTab.Screen
        options={{
          tabBarLabel: "Compras",
          tabBarIcon: () => {
            return (
              <Icon
                reverse
                name="shopping-cart"
                type="font-awesome"
                color="#517fa4"
                size={16}
              />
            );
          },
        }}
        name="TabListaCompras"
        component={ListaCompras}
      />
      <NavTab.Screen
        options={{
          tabBarLabel: "Productos",
          tabBarIcon: () => {
            return (
              <Icon
                reverse
                name="truck"
                type="font-awesome"
                color="#517fa4"
                size={16}
              />
            );
          },
        }}
        name="TabListaProductos"
        component={ListaProductos}
      />
    </NavTab.Navigator>
  );
}

export default class App extends Component {

constructor(){
  super();
  this.state = {
    login:false
  }
  // console.disableYellowBox = true;
  YellowBox.ignoreWarnings([
    "Warning: componentWillReceiveProps",
    "Setting a timer",
  ]);
  if (!global.estaConfigurado) cargarConfiguracion();

  firebase.auth().onAuthStateChanged((usuario) => {
    if (usuario)
      this.setState({ login: true })
    else
      this.setState({ login: false })

  })

if (!global.btoa) {
  global.btoa = encode;
}

if (!global.atob) {
  global.atob = decode;
}

}

fnCambiarEstado = () =>{
  this.setState({login:true})
}

  render(){
    return (
      <NavigationContainer>
        {this.state.login ? (
          <NavDrawer.Navigator>
            <NavDrawer.Screen
              name="Home"
              component={Home}
            ></NavDrawer.Screen>
            <NavDrawer.Screen
              name="Informacion"
              component={Informacion}
            ></NavDrawer.Screen>
            <NavDrawer.Screen
              name="CerrarSesion"
              component={SingOut}
            ></NavDrawer.Screen>
          </NavDrawer.Navigator>
        ) : (
          <navStack.Navigator>
              <navStack.Screen 
              name="login" 
              component={Login}>
            </navStack.Screen>
            <navStack.Screen
              name="Registro"
              component={Registrar}
            ></navStack.Screen>
              <navStack.Screen
                name="Recuperar"
                component={CambioClave}
              ></navStack.Screen>
          </navStack.Navigator>
        )}
      </NavigationContainer>
    );
  }
    
}