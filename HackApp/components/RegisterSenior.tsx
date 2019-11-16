import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button, Image, Input } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';


export class RegisterSenior extends React.Component {
    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
              <Input placeholder='login'/>
            </View>
        )
    }
}
