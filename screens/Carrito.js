import React, { Component } from 'react'
import { Text, View, FlatList } from 'react-native'
import {registrarListener} from '../Servicios/ServicioCarrito'
import {ItemCarrito} from './ItemCarrito'

export class CarritoCompras extends Component {

    constructor() {
        super();
        this.state = {
            lstItems: [],
            total:0
        }
    }

    pintar = (items) => {
        let totalitems = 0;
        items.forEach(element => {
            totalitems += element.subtotal;
        });
        this.setState({
            lstItems: items,
            total: totalitems
        });

    }

    componentDidMount() {
        registrarListener(global.mailUsuario, this.pintar);
    }

    render() {
        return (
            <View>
                <Text>{this.state.total}</Text>
                <FlatList
                    data={this.state.lstItems}
                    renderItem={({ item }) => <ItemCarrito itemCarrito = {item} />
                    }
                    keyExtractor = {item=>item.id}
                />
            </View>
        )
    }
}
