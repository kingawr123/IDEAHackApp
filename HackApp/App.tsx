import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button, Image } from 'react-native-elements';
import { Actions } from 'react-native-router-flux';
import { Stack, Scene, Router } from 'react-native-router-flux';
import { RegisterJunior } from './components/RegisterJunior'
import { Home } from './components/Home'


export default class App extends React.Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <Router>
          <Stack key="root">
            <Scene key="home" component={Home} hideNavBar/>
            <Scene key="register" component={RegisterJunior} title="Register" />
          </Stack>
        </Router>
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
});


