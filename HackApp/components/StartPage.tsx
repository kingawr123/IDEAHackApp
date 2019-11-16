import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button, Image } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';


export class StartPage extends React.Component {
    render() {
        return (
            <View style={styles.Container}>
                <Image source={require('../assets/logo1.jpg')} style={styles.img} />
                <View style={styles.btnContainer}>
                    <Button titleStyle={styles.title} buttonStyle={styles.btnSerior} title="SENIOR" type="solid"></Button>
                    <Button titleStyle={styles.title} buttonStyle={styles.btnJunior} title="MŁODY" type="solid"></Button>
                </View>
            </View>

        )
    }
}


const styles = StyleSheet.create({
    Container:{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },

    img: {
        height:200,
        width: 200,
        marginBottom: 100
    },

    btnContainer: {
        justifyContent:'space-between'
    },

    btnSerior: {
        width: 300,
        height: 100,
        borderRadius: 30,
        backgroundColor: '#00695c',
        marginBottom: 50
    },

    btnJunior: {
        width: 300,
        height: 100,
        borderRadius: 30,
        backgroundColor: '#339900',
    },

    title: {
        fontSize: 35,
        fontFamily: 'sans-serif-condensed'
    }
});

//006666