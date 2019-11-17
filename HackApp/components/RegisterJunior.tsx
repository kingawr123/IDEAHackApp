import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button, Image, Input } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Actions } from 'react-native-router-flux';


export class RegisterJunior extends React.Component {
    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text style={styles.textstyle1}>Zarejestruj się</Text>
                <Text style={styles.textstyle2}>Podaj swoje dane:</Text>
                <Input containerStyle={{ marginBottom: 30 }} placeholder='login' />
                <Input containerStyle={{ marginBottom: 30 }} placeholder='hasło' />
                <Input containerStyle={{ marginBottom: 30 }} placeholder='Imię' />
                <Input containerStyle={{ marginBottom: 30 }} placeholder='Nazwisko' />
                <Input containerStyle={{ marginBottom: 30 }} placeholder='Data Urodzenia' />
                <Button onPress={() => Actions.JuniorFreeTime()} buttonStyle={{ width: 100, height: 100, borderRadius: 50, backgroundColor: '#339900'}} icon={{name: 'check', size: 50, color: "white"}}
                ></Button>
            </View>

            
        )
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#fff'
    },
  

    btnJunior: {
      width: 200,
      height: 50,
      borderRadius: 20,
      backgroundColor: '#339900',
      marginBottom: 20
    },
  
    title: {
      fontSize: 20,
      fontFamily: 'monospace'
    },

    textstyle1: {
        fontSize: 35,
        fontFamily: 'monospace',
        color: "green"
      },

      textstyle2: {
        fontSize: 20,
        fontFamily: 'monospace',
      }
  });
//006666