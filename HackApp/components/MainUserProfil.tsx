import React from 'react';
import { StyleSheet, Text, View, TouchableHighlight } from 'react-native';
import { Button, Image, Input, Header } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Actions } from 'react-native-router-flux';

export class MainUserProfil extends React.Component {
    render() {
        return (
            <View style={{
                flex: 1, alignItems: 'center', justifyContent: 'center', borderBottomColor: 'black', borderBottomWidth: 1
            }}>
                {/* Profil */}
                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', flexDirection: 'row' }}>
                    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                        <Text style={{ fontSize: 26, fontFamily: 'monospace', color: '#339900', marginBottom: 5 }}>Profil</Text>
                        <View style={{ height: 120, width: 120, backgroundColor: "#339900", borderRadius: 10 }}></View>
                    </View >
                    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', marginRight: 20 }}>
                        <Text style={{ fontSize: 21, fontFamily: 'monospace', color: '#339900', marginBottom: 15 }} >Bogusława Malik</Text>
                        <Text style={{
                            fontSize: 18, fontFamily: 'monospace', color: 'black'
                        }}>DATA URODZENIA: 27.05.1952r.{"\n"}
                            LOGIN: Sława52{"\n"}
                            MIEJSCOWOŚĆ: Kielce{"\n"}
                        </Text>
                    </View>
                </View>
                {/* Znajomi */}
                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                    <Text style={{ fontSize: 26, fontFamily: 'monospace', color: '#339900', marginBottom: 5 }}>Poznani</Text>
                    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', flexDirection: 'row', alignSelf: 'baseline' }}>
                        <View style={{ width: 50, height: 50, borderRadius: 25, backgroundColor: '#339900', justifyContent: 'space-between' }}></View>
                        <Text style={{ fontSize: 25, fontFamily: 'monospace', marginLeft: 15 }}>Natalia Wysocka</Text>
                        <Icon name='comment' size={40} color='gray' />
                    </View>
                    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', flexDirection: 'row', alignSelf: 'baseline' }}>
                        <View style={{ width: 50, height: 50, borderRadius: 25, backgroundColor: '#339900', justifyContent: 'space-between' }}></View>
                        <Text style={{ fontSize: 25, fontFamily: 'monospace', marginLeft: 15, marginRight: 25 }}>Michał Kubiak</Text>
                        <Icon name='comment' size={40} color='gray' />
                    </View>
                    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', flexDirection: 'row', alignSelf: 'baseline' }}>
                        <View style={{ width: 50, height: 50, borderRadius: 25, backgroundColor: '#339900', justifyContent: 'space-between' }}></View>
                        <Text style={{ fontSize: 25, fontFamily: 'monospace', marginLeft: 15, marginRight: 20 }}>Milena Ochocka</Text>
                        <Icon name='comment' size={40} color='gray' />
                    </View>
                </View>
                {/* Miejsca */}
                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                    <Text style={{ fontSize: 26, fontFamily: 'monospace', color: '#339900', marginTop: 30 }}>Przyjazne Miejsca</Text>
                    <View style={{ flex: 1, alignItems: 'baseline', justifyContent: 'space-between', flexDirection: 'row', marginTop: 50 }}>
                        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                            <View style={{ width: 80, height: 80, borderRadius: 40, backgroundColor: '#339900', justifyContent: 'space-between' }}></View>
                            <Text style={{ fontSize: 20, fontFamily: 'monospace', marginLeft: 15, marginRight: 15, textAlign: 'center' }}>Filharmonia Świętokrzyska</Text>
                        </View>
                        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                            <View style={{ width: 80, height: 80, borderRadius: 40, backgroundColor: '#339900', justifyContent: 'space-between', alignItems: 'baseline' }}></View>
                            <Text style={{ fontSize: 20, fontFamily: 'monospace', marginLeft: 15, marginRight: 15, flex: 1, textAlign: 'center' }}>Restauracja TaiKha</Text>
                        </View>
                    </View>
                </View>
            </View>
        )
    }
}