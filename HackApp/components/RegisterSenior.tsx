import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button, Image, Input } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Actions } from 'react-native-router-flux';


export class RegisterSenior extends React.Component {
    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text style={styles.textstyle1}>Podaj swoje dane:</Text>
                <Text style={styles.textstyle2}>Login:</Text>
                <Input containerStyle={{ marginBottom: 20 }} placeholder='miejsce do wpisania' />
                <Text style={styles.textstyle2}>Hasło:</Text>
                <Input containerStyle={{ marginBottom: 20 }} placeholder='miejsce do wpisania' />
                <Text style={styles.textstyle2}>Imię:</Text>
                <Input containerStyle={{ marginBottom: 20 }} placeholder='miejsce do wpisania' />
                <Text style={styles.textstyle2}>Nazwisko:</Text>
                <Input containerStyle={{ marginBottom: 20 }} placeholder='miejsce do wpisania' />
                <Text style={styles.textstyle2}>Datę urodzenia (dzień, miesiąc, rok):</Text>
                <Input containerStyle={{ marginBottom: 20 }} placeholder='miejsce do wpisania' />
                <Button onPress={() => Actions.SeniorFreeTime()} buttonStyle={{ width: 100, height: 100, borderRadius: 50, backgroundColor: '#339900'}} icon={{name: 'check', size: 50, color: "white"}}
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
      marginBottom: 15
    },
  
    title: {
      fontSize: 20,
      fontFamily: 'monospace'
    },

    textstyle1: {
        fontSize: 30,
        fontFamily: 'monospace',
        color: "#339900"
      },

      textstyle2: {
        fontSize: 23,
        fontFamily: 'monospace',
      }
  });
//006666