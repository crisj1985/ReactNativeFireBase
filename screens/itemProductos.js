import React, { Component } from 'react'
import { Text, View } from 'react-native'

export class ItemProducto extends Component {



    render() {
        const {productos} = this.props 
        const {id,nombre,precio} = productos
        return (
          <View>
            <Text> {id} {nombre} </Text>
            <Text> {precio} </Text>
          </View>
        );
    }
}
