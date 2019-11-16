import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button, Image, Input } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Actions } from 'react-native-router-flux';


export class ChooseGeneration extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.btnContainer}>
                    <Button titleStyle={styles.title} buttonStyle={styles.btnSerior} title="Senior" type="solid" onPress={() => Actions.registerSenior()}></Button>
                    <Button titleStyle={styles.title} buttonStyle={styles.btnJunior} title="Junior" type="solid" onPress={() => Actions.registerJunior()}></Button>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center'
    },
  
    
    img: {
      height: 200,
      width: 200,
      marginBottom: 100
    },
  
    btnContainer: {
      justifyContent: 'space-between'
    },
  
    btnSerior: {
      width: 300,
      height: 150,
      borderRadius: 20,
      backgroundColor: '#00695c',
      marginBottom: 50
    },
  
    btnJunior: {
      width: 300,
      height: 150,
      borderRadius: 20,
      backgroundColor: '#339900',
    },
  
    title: {
      fontSize: 50,
      fontFamily: 'monospace'
    }
  });