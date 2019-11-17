import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button, Image, Input } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Actions } from 'react-native-router-flux';

export class SignIn extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.highlight}>Zaloguj się</Text>
                <Input
                    placeholder='Adress e-mail'
                    leftIcon={
                        <Icon
                            name='address-card'
                            size={24}
                            color='gray'
                        />
                    }
                    leftIconContainerStyle={styles.icon}
                    containerStyle={{ marginBottom: 50 }}
                ></Input>
                <Input
                    placeholder='Hasło'
                    leftIcon={
                        <Icon
                            name='lock'
                            size={24}
                            color='gray'
                        />
                    }
                    leftIconContainerStyle={styles.icon}
                ></Input>
                <Text style={{ fontSize: 15, color:'black', marginTop: 5}}>Nie pamietasz hasła? Kliknij!</Text>
                <Button onPress={() => Actions.mainUserProfil()} buttonStyle={{ width: 100, height: 100, borderRadius: 50, backgroundColor: '#339900', marginTop: 30 }} icon={{name: 'check', size: 50, color: "white"}}
                ></Button>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },

    highlight: {
        fontSize: 35,
        fontFamily: 'monospace',
        color: '#339900',
        paddingBottom: 50
    },

    icon: {
        marginRight: 10
    }
})