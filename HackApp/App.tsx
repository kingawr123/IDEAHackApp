import React from 'react';
import { StyleSheet, Text, View} from 'react-native';
import { StartPage } from './components/StartPage'
import { Header } from 'react-native-elements';

export default function App() {
  return (
    <View style={styles.container}>
      {/* <Header 
        backgroundColor='#006666'
        leftComponent={{ icon: 'menu', color: '#fff' }}
        centerComponent={{ text: 'MY TITLE', style: { color: '#fff' } }}
        rightComponent={{ icon: 'home', color: '#fff' }} /> */}
      <StartPage />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center'
  },
});
