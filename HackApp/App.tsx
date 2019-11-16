import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button, Image } from 'react-native-elements';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { Register } from './components/RegisterJunior'


export class HomePage extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Image source={require('./assets/logo1.jpg')} style={styles.img} />
        <View style={styles.btnContainer}>
          <Button titleStyle={styles.title} buttonStyle={styles.btnSerior} title="SENIOR" type="solid"></Button>
          <Button titleStyle={styles.title} buttonStyle={styles.btnJunior} title="MŁODY" type="solid"></Button>
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

const StackNavigator = createStackNavigator({
    Home: {
      screen: HomePage
    },
    RegisterJunior: {
      screen: Register
    }
    
  })

const AppContainer = createAppContainer(StackNavigator);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}