import React from 'react';
import { StyleSheet, Text, View, TouchableHighlight } from 'react-native';
import { Button, Image, Input, Card } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Actions } from 'react-native-router-flux';
import Carousel from 'react-native-snap-carousel';

export class SelectTrustPlaces extends React.Component {

    _renderItem({ item, index }) {
        return (
            <Card key={index} titleStyle={{ fontSize: 25, fontFamily: 'monospace', color: '#339900', alignItems: 'center', justifyContent: 'center' }} title={item.name} containerStyle={styles.cardCon}>

                <View style={{ height: 180, width: 180, backgroundColor: "#339900", borderRadius: 10, marginRight: 10, justifyContent: 'flex-start' }}></View>

                <Text style={{ marginTop: 15, marginBottom: 10, fontSize: 18, color: 'black' }}>
                    ADRESS: {item.adress} {"\n"}
                    TELEFON: {item.phone}
                </Text>

                <Button buttonStyle={{ width: 150, height: 60, borderRadius: 10, backgroundColor: '#339900', marginTop: 20, marginLeft: 85 }} icon={{ name: 'check', size: 50, color: "white" }}
                ></Button>
            </Card>
        );
    }

    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text style={styles.highlight}>Wybierz zaufane miejsca!</Text>
                <Carousel
                    data={youngUsers}
                    renderItem={this._renderItem.bind(this)}
                    sliderWidth={400}
                    itemWidth={380}
                    layout={'default'}
                    firstItem={0}
                    style={{ marginTop: 50, flex: 1 }}>
                </Carousel>
                <Button onPress={() => Actions.mainUserProfil()} buttonStyle={{ width: 80, height: 80, borderRadius: 40, backgroundColor: '#339900', marginLeft: 240, marginBottom: 25 }} icon={{ name: 'check', size: 50, color: "white" }}
                ></Button>
            </View>
        )
    }
}

const youngUsers = [
    {
        name: 'Kino Fenomen',
        adress: "ul.Księdza Piotra Ściegiennego 2",
        phone: '41 365 5148'
    },
    {
        name: 'Filharmonia Świętokrzyska',
        adress: "ul. Stefana Żeromskiego 12",
        phone: '41 368 11 40'
    },
    {
        name: 'Wojewódzka Biblioteka Publiczna',
        adress: 'ul.Księdza Piotra Ściegiennego 13',
        phone: '41 361 53 51'
    },
    {
        name: 'Restauracja ThaiKha',
        adress: "Ignacego Paderewskiego 42",
        phone: '608 773 771'
    },
]

const styles = StyleSheet.create({
    highlight: {
        fontSize: 26,
        fontFamily: 'monospace',
        color: '#339900',
        marginTop: 120,
        marginBottom: 30
    },

    cardCon: {
        margin: 0,
        padding: 0,
        height: 480,
        width: 380,
        alignItems: 'center',
        justifyContent: 'center'
    }
})