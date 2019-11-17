import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button, Image, Input } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Actions } from 'react-native-router-flux';


export class RegisterJuniorFreeTime extends React.Component {

  ChangeColor = () => {
    
  }
    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text style={styles.textstyle2}>Ulubione miejsca:</Text>
                <Button titleStyle={styles.title} buttonStyle={styles.btnJunior} title="kawiarnia" ></Button>
                <Button titleStyle={styles.title} buttonStyle={styles.btnJunior} title="biblioteka" ></Button>
                <Button titleStyle={styles.title} buttonStyle={styles.btnJunior} title="kino" ></Button>
                <Button titleStyle={styles.title} buttonStyle={styles.btnJunior} title="filharmonia" ></Button>
                <Input placeholder='Inne' />
                <Button onPress={() => Actions.JuniorHobby()} buttonStyle={{ width: 100, height: 100, borderRadius: 50, backgroundColor: '#339900', marginTop: 20}} icon={{name: 'check', size: 50, color: "white"}}
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

      textstyle2: {
        fontSize: 32,
        fontFamily: 'monospace',
        color:'#339900',
        marginBottom: 50
      }
  });
//006666