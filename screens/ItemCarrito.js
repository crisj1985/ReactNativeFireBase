import React, { Component } from 'react'
import { Text, View, Button } from 'react-native'

export class ItemCarrito extends Component {



    render() {
        const { itemCarrito} = this.props;
        const {id,nombre,cantidad,precio} = itemCarrito;

        return (
            <View>
                <View><Text>{cantidad} {nombre} </Text>
                      <Text> {precio} </Text>
                </View>
                <Button
                    title='Eliminar'
                    onPress={() => {
                        // eliminarElementoFB(id, this.OnSuccess, this.OnError);
                    }}
                ></Button>
            </View>
        )
    }
}
