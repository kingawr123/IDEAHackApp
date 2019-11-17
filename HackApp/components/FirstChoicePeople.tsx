import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button, Image, Input, Card, Icon } from 'react-native-elements';
import { Actions } from 'react-native-router-flux';
import Carousel from 'react-native-snap-carousel';

export class FirstChoicePeople extends React.Component {
    _renderItem({ item, index }) {
        return (
            <Card key={index} titleStyle={{ fontSize: 25, fontFamily: 'monospace', color: '#339900', alignItems:'center', justifyContent: 'center'}} title={item.name} containerStyle={styles.cardCon}>
                <View style={{ flexDirection: 'row', alignItems: 'baseline', justifyContent: 'space-between' }}>
                    <View style={{ height: 180, width: 180, backgroundColor: "#339900", borderRadius: 10, marginRight: 10, justifyContent: 'flex-start' }}></View>
                    <Icon size={80} color={item.color} name="star" />
                </View>
                <Text style={{ marginTop: 15, marginBottom: 10, fontSize: 18, color: 'black' }}>
                    HOBBY: {item.hobbies} {"\n"}
                    MIEJSCOWOŚĆ: {item.city}
                </Text>

                <Button buttonStyle={{ width: 150, height: 60, borderRadius: 10, backgroundColor: '#339900', marginTop: 20, marginLeft: 85}} icon={{ name: 'check', size: 50, color: "white" }}
                ></Button>
            </Card>
        );
    }
    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
                <Text style={styles.highlight}>Twórz pierwsze znajomości!</Text>
                <Carousel
                    data={oldUsers}
                    renderItem={this._renderItem.bind(this)}
                    sliderWidth={400}
                    itemWidth={380}
                    layout={'default'}
                    firstItem={0}
                    style={{ marginTop: 50, flex: 1 }}>
                </Carousel>
                <Button onPress={() => Actions.selectPlaces()} buttonStyle={{ width: 80, height: 80, borderRadius: 40, backgroundColor: '#339900', marginLeft: 230, marginBottom: 20 }} icon={{ name: 'check', size: 50, color: "white" }}
                ></Button>
            </View>
        )
    }
}


const oldUsers = [
    {
        name: 'Małgorzata Kowalska',
        hobbies: "Muzyka, teatr, literatura",
        city: 'Kostomłoty Pierwsze',
        color: '#00695c'
    },
    {
        name: 'Izabela Koniusz',
        hobbies: "Sport, ksiązki, ",
        city: 'Kostomłoty Pierwsze',
        color: '#f6da63'
    },
    {
        name: 'Stanisław Osoła',
        hobbies: "Muzyka, teatr, literatura",
        city: 'Kostomłoty Pierwsze',
        color: '#96ceb4'
    },
    {
        name: 'Igor Pietrzałek',
        hobbies: "Muzyka, teatr, literatura",
        city: 'Kostomłoty Pierwsze',
        color: '#9d0b0b'
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
        height: 450,
        width: 380,
        alignItems: 'center',
        justifyContent: 'center'
    }
})