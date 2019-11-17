import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button, Image } from 'react-native-elements';
import { Stack, Scene, Router } from 'react-native-router-flux';
import { RegisterJunior } from './components/RegisterJunior';
import { RegisterSenior } from './components/RegisterSenior';
import { Home } from './components/Home'
import { ChooseGeneration } from './components/ChooseGeneration';
import { RegisterJuniorHobby } from './components/RegisterJuniorHobby';
import { RegisterJuniorFreeTime } from './components/RegisterJuniorFreeTime';
import { SignIn } from './components/SignIn';
import { RegisterSeniorHobby } from './components/RegisterSeniorHobby';
import { RegisterSeniorFreeTime } from './components/RegisterSeniorFreeTime';
import { FirstChoicePeople } from './components/FirstChoicePeople';
import { SelectTrustPlaces } from './components/SelectTrustPlaces';
import { MainUserProfil } from './components/MainUserProfil';


export default class App extends React.Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <Router>
          <Stack key="root">
            <Scene key="home" component={Home} hideNavBar/>
            <Scene key="registerJunior" component={RegisterJunior} title="Register Junior" hideNavBar/>
            <Scene key="registerSenior" component={RegisterSenior} title="Register Senior" hideNavBar/>
            <Scene key="chooseGeneration" component={ChooseGeneration} hideNavBar/>
            <Scene key="JuniorHobby" component={RegisterJuniorHobby} hideNavBar/>
            <Scene key="JuniorFreeTime" component={RegisterJuniorFreeTime} hideNavBar/>
            <Scene key="SeniorFreeTime" component={RegisterSeniorFreeTime} hideNavBar/>
            <Scene key="SeniorHobby" component={RegisterSeniorHobby} hideNavBar/>
            <Scene key="signIn" component={SignIn} hideNavBar/>
            <Scene key="firstPeople" component={FirstChoicePeople} hideNavBar/>
            <Scene key="selectPlaces" component={SelectTrustPlaces} hideNavBar/>
            <Scene key="mainUserProfil" component={MainUserProfil} hideNavBar/>
          </Stack>
        </Router>
      </View>
    )
  }
}



