import React, { Component } from 'react'
import { Text, View, StyleSheet, FlatList } from 'react-native'
import ActionButton from 'react-native-action-button'
import Icon from "react-native-vector-icons/Ionicons";
import { consultarTodos, consultarVigentes} from '../Servicios/ServiciosMapa'
import { ItemDireccion} from './ItemDireccion'
import { Button } from 'react-native-elements';

export class Direcciones extends Component {

constructor(){
    super();
    this.state= {
        lstDirecciones : []    
    }
}

fnPintar = (direcciones)=>{
    this.setState({
        lstDirecciones: direcciones
    })
}

componentDidMount (){
    consultarTodos(this.fnPintar);
}

    render() {
        const { lstDirecciones} = this.state;
        return (
            <View style={styles.container}>
                <Text>Direcciones</Text>
                <FlatList
                    data={lstDirecciones}
                    renderItem={({ item }) => <ItemDireccion id = {item.id} direccion = {item.data()}/>}
                    keyExtractor={item=>item.id}
                />
                <Button 
                    title="Listar" 
                    onPress={() => consultarTodos(this.fnPintar) }
                />
                <Button
                    title="Listar Solo Vigentes"
                    onPress={() => consultarVigentes(this.fnPintar)}
                />
                <ActionButton buttonColor="rgba(231,76,60,1)">
                    <ActionButton.Item
                        buttonColor="#9b59b6"
                        title="Ir Mapa"
                        onPress={() => this.props.navigation.navigate("StackMapa")}
                    >
                        <Icon name="md-create" />
                    </ActionButton.Item>
                </ActionButton>
            </View>
        )
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



