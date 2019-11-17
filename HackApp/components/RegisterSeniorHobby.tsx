import React from 'react';
import { StyleSheet, Text, View, TouchableHighlight} from 'react-native';
import { Button, Image, Input } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';


export class RegisterSeniorHobby extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text style={styles.textstyle1}>Zainteresowania:</Text>
        <Text style={styles.textstyle2}>Zaznaczone przyciski mają kolor zielony</Text>
        <Button titleStyle={styles.title} buttonStyle={styles.btnJunior} title="sport" type="solid" ></Button>
        <Button titleStyle={styles.title} buttonStyle={styles.btnJunior} title="muzyka" type="solid" ></Button>
        <Button titleStyle={styles.title} buttonStyle={styles.btnJunior} title="filmy" type="solid" ></Button>
        <Button titleStyle={styles.title} buttonStyle={styles.btnJunior} title="książki" type="solid" ></Button>
        <Input placeholder='Inne (napisz zainteresowania)' />
        <Button buttonStyle={{ width: 100, height: 100, borderRadius: 50, backgroundColor: '#339900', marginTop: 20 }} icon={{ name: 'check', size: 50, color: "white" }}
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
    marginBottom: 20,
    marginTop: 5
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