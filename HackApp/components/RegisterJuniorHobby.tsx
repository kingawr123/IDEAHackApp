import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button, Image, Input } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';


export class RegisterJuniorHobby extends React.Component {
    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text style={styles.textstyle2}>Zaznacz zainteresowania:</Text>
                <Button titleStyle={styles.title} buttonStyle={styles.btnJunior} title="sport" type="solid" ></Button>
                <Button titleStyle={styles.title} buttonStyle={styles.btnJunior} title="muzyka" type="solid" ></Button>
                <Button titleStyle={styles.title} buttonStyle={styles.btnJunior} title="filmy" type="solid" ></Button>
                <Button titleStyle={styles.title} buttonStyle={styles.btnJunior} title="książki" type="solid" ></Button>
                <Input placeholder='Inne' />
                <Button titleStyle={styles.title} buttonStyle={styles.btnJunior} title="Zakończ" type="solid" ></Button>
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
        fontSize: 20,
        fontFamily: 'monospace',
      }
  });
//006666