import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button, Image } from 'react-native-elements';
import { Actions } from 'react-native-router-flux';

export class Home extends React.Component {
    render() {
      return (
        <View style={styles.container}>
          <Image source={require('../assets/logo1.jpg')} style={styles.img} />
          <View style={styles.btnContainer}>
            <Button 
            titleStyle={styles.title} 
            buttonStyle={styles.btnSerior} 
            title="Zaloguj" 
            type="solid" 
            onPress={() => Actions.registerJunior()}
            ></Button>
            <Button 
            titleStyle={styles.title} 
            buttonStyle={styles.btnJunior} 
            title="Zarejestruj" 
            type="solid"
            onPress={()=> Actions.chooseGeneration()}></Button>
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
      alignItems: 'center',
      backgroundColor: '#fff'
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
      height: 100,
      borderRadius: 20,
      backgroundColor: '#00695c',
      marginBottom: 50
    },
  
    btnJunior: {
      width: 300,
      height: 100,
      borderRadius: 20,
      backgroundColor: '#339900',
    },
  
    title: {
      fontSize: 35,
      fontFamily: 'monospace'
    }
  });
  
  