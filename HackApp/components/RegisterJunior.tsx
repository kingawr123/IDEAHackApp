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
                <Input placeholder='login' />
                <Input placeholder='hasło' />
                <Input placeholder='Imię' />
                <Input placeholder='Nazwisko' />
                <Input placeholder='Data Urodzenia' />
                <Button onPress={() => Actions.JuniorFreeTime()} titleStyle={styles.title} buttonStyle={styles.btnJunior} title="Dalej" type="solid" ></Button>
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