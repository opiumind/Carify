import React, { Component } from 'react';
import {StyleSheet, ImageBackground, Text} from 'react-native';
import { Actions } from 'react-native-router-flux';
import { WideButton } from './components/WideButton';


class InitialPage extends Component {
  render() {
    return (
        <ImageBackground
          source={require('../static/images/umbrella-background.jpg')}
          style={styles.backgroundImage}
        >
             <WideButton
              whenPressed={() => Actions.settings()}
            >
              Settings
            </WideButton>
          <Text style={styles.Title}>Carify</Text>
          <Text style={styles.Logo}>keep you children safe</Text>
          <WideButton
                whenPressed={() => Actions.setDistance()}
          >
            Set Distance
          </WideButton>
          <Text></Text>
          <WideButton
            //     whenPressed={() => Actions.myaccount()}
          >
            Set Dangerous Zones
          </WideButton>
        </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    width: null,
    height: null
  },

  Title: {
    fontSize: 66,
    fontWeight: '500',
    paddingTop: 60,
    textAlign: 'center',
    color: 'rgba(130, 175, 37, 1)',
    textShadowColor: 'rgba(21, 48, 0, .8)',
    textShadowOffset: {width: -1, height: 1},
    textShadowRadius: 30
  },

  Logo: {
    textAlign: 'center',
    color: 'white',
    paddingBottom: 60,
    textShadowColor: 'rgba(21, 48, 0, .9)',
    textShadowOffset: {width: 0, height: 1},
    textShadowRadius: 20,
    // backgroundColor: 'rgba(255,255,255,1)',
    fontSize: 22
  },

  text: {
    textAlign: 'center',
    color: 'white',
    backgroundColor: 'rgba(0,0,0,0)',
    fontSize: 32
  }
});

export { InitialPage };
