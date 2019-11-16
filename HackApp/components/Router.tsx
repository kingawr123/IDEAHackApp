import React from 'react';
import { Stack, Scene, Actions } from 'react-native-router-flux';
import { StyleSheet, Text, View } from 'react-native';
import { RegisterJunior } from './RegisterJunior';
import { Home } from '../components/Home'

class Router extends React.Component {
    render() {
        return (
            <View style={{flex: 1}}>
                <Router>
                    <Stack key="root">
                        <Scene key="register" component={RegisterJunior} title="Register" />
                        <Scene key="home" component={Home} />
                    </Stack>
                </Router>
            </View>
        );
    }
}


export default Router; 