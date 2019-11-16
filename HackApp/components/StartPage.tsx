import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native-elements';


export class StartPage extends React.Component {
    render() {
        return (
            <View style={styles.btnContainer}>
                <Button buttonStyle={styles.btnSerior} title="Senior"></Button>
                <Button buttonStyle={styles.btnJunior} title="Młody"></Button>
            </View>
        )
    }
}


const styles = StyleSheet.create({
    btnContainer: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        padding: 0,
        height: 200
    },

    btnSerior:{
        width: 250,
        height: 100,
        borderRadius: 20,
        backgroundColor: '#38B78B'
    },

    btnJunior: {
        width: 250,
        height: 100,
        borderRadius: 20,
    }
});