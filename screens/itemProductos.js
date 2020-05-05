import React, { Component } from 'react'
import { Text, View, Button, Alert,TouchableHighlight } from 'react-native'
import { eliminarElementoFB, eliminarProductoRest, recuperarTodos} from '../Servicios/ServiciosProducos'
import { NavigationContext } from '@react-navigation/native';

export class ItemProducto extends Component {

  OnSuccess = () => {
    Alert.alert('Producto Eliminado');
  };

  OnError = (error) => {
    Alert.alert('Error', error.message);
  };

    render() {
      const { productos, nav, fnRepintar} = this.props 
        const {id,nombre,precio} = productos
        return (
          <View>
            <TouchableHighlight
            onPress={()=>{
                nav.navigate("StackFormularioProducto",{producto:productos});
            }}
            >
              <View><Text> {id} {nombre} </Text>
                <Text> {precio} </Text>
                </View>
              
            </TouchableHighlight>
            
            <Button
            title='Eliminar'
            onPress={()=>{
              // eliminarElementoFB(id, this.OnSuccess, this.OnError);
              eliminarProductoRest({id:id})
              recuperarTodos(fnRepintar);
            }}
            ></Button>
          </View>
        );
    }
}
