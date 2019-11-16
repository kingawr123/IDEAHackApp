import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button, Image, Input } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

export class InputJunior extends React.Component {
    render() {
        return (
            <View style={styles.Container}>
                <Input placeholder='login'/>
            </View>

        )
    }
}


const styles = StyleSheet.create({
    Container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
});
