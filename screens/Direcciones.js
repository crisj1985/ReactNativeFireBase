import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import ActionButton from 'react-native-action-button'
import Icon from "react-native-vector-icons/Ionicons";

export class Direcciones extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>Direcciones</Text>
                <ActionButton buttonColor="rgba(231,76,60,1)">
                    <ActionButton.Item
                        buttonColor="#9b59b6"
                        title="Nuevo Producto"
                        onPress={() => this.props.navigation.navigate("StackFormularioProducto")}
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



