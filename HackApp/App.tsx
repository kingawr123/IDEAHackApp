import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { StartPage } from './components/StartPage'

export default function App() {
  return (
    <View style={styles.container}>
      <StartPage/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
});
