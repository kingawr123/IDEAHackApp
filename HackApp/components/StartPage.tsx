import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button, Image } from 'react-native-elements';


export class StartPage extends React.Component {
    render() {
        return (
            <View style={styles.btnContainer}>
                <Image source={require('../assets/logo1.jpg')} />
                <View style={styles.btnContainer}>
                    <Button titleStyle={styles.title} buttonStyle={styles.btnSerior} title="SENIOR" type="solid"></Button>
                    <Button titleStyle={styles.title} buttonStyle={styles.btnJunior} title="MŁODY"></Button>
                </View>
            </View>

        )
    }
}


const styles = StyleSheet.create({
    img: {
        height:100,
        width: 100,
    },

    btnContainer: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 0,

    },

    btnSerior: {
        width: 300,
        height: 150,
        borderRadius: 30,
        backgroundColor: '#00695C',
    },

    btnJunior: {
        width: 300,
        height: 150,
        borderRadius: 30,
        backgroundColor: '#339900'
    },

    title: {
        fontSize: 30,
        fontFamily: 'sans-serif-condensed'
    }
});