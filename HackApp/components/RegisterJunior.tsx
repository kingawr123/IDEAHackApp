import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button, Image } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import { InputJunior } from './InputJunior';
import { withNavigation } from 'react-navigation';


export class Register extends React.Component {
    render() {
        return (
            <View style={styles.Container}>
                
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

export default withNavigation(Register);

//006666