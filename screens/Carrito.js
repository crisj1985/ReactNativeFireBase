import React, { Component } from 'react'
import { Text, View, FlatList } from 'react-native'
import {registrarListener} from '../Servicios/ServicioCarrito'
import {ItemCarrito} from './ItemCarrito'

export class CarritoCompras extends Component {

    constructor() {
        super();
        this.state = {
            lstItems: []
        }
    }

    pintar = (items) => {
        this.setState({
            lstItems: items,
        });

    }

    componentDidMount() {
        registrarListener(global.mailUsuario, this.pintar);
    }

    render() {
        return (
            <View>
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
