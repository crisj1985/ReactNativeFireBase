import React from "react";
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator} from '@react-navigation/stack'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import { Icon } from 'react-native-elements'
import { ListaCompras} from './screens/ListaCompras'
import { ListaProductos } from './screens/ListaProductos'
import { FormularioProducto } from './screens/FormularioProducto'
import { DetalleCompra } from "./screens/DetalleCompra";

let navStack = createStackNavigator();
let NavTab = createBottomTabNavigator();

function TabCompra (){
  return(
      
    <navStack.Navigator initialRouteName='CompraScreen'>
      <navStack.Screen options={{ title: 'Compra' }} name="CompraScreen" component={ListaCompras} />
            <navStack.Screen options={{ title: 'Detalle Compra' }} name="DetalleCompraScreen" component={DetalleCompra} />
          </navStack.Navigator>
      
  );
}

function TabProducto() {
  return (

    <navStack.Navigator initialRouteName='StackListaProducto'>
      <navStack.Screen options={{ title: 'Productos' }} name="StackListaProducto" component={ListaProductos} />
      <navStack.Screen options={{ title: 'Detalle Productos' }} name="StackFormularioProducto" component={FormularioProducto} />
    </navStack.Navigator>

  );
}

export default function App() {
    return (
    

      <NavigationContainer>
        <NavTab.Navigator initialRouteName="TabListaCompras">
          <NavTab.Screen
            options={{ tabBarLabel: "Compras", tabBarIcon : ()=>{return <Icon
                                                                       reverse
                                                                       name="gift"
                                                                       type="font-awesome"
                                                                       color="#517fa4"
                                                                       size={16}
                                                                     />} }}
            name="TabListaCompras"
            component={TabCompra}
          />
          <NavTab.Screen
            options={{ tabBarLabel: "Productos", tabBarIcon : ()=>{return (
                                                                     <Icon
                                                                       reverse
                                                                       name="truck"
                                                                       type="font-awesome"
                                                                       color="#517fa4"
                                                                       size={16}
                                                                     />
                                                                   );}}}
            name="TabListaProductos"
            component={TabProducto}
          />
          {/* <NavTab.Screen
            options={
              {
                tabBarLabel: "Tab Compra",
                tabBarIcon: () => {
                  return (
                    <Icon
                      reverse
                      name="gift"
                      type="font-awesome"
                      color="#517fa4"
                      size={16}
                    />
                  );
                }
              }}
            name="TabCompraScreen"
            component={TabCompra}
          /> */}
          
        </NavTab.Navigator>
      </NavigationContainer>
    );
}