import React, { Component } from 'react';
import {AppRegistry, StyleSheet, FlatList, TextInput, View, ImageBackground, Text, TouchableOpacity, ScrollView} from 'react-native';
import { Actions } from 'react-native-router-flux';
import { WideButton } from './components/WideButton';
// import { RadioButtons } from './components/RadioButtons';
// import { FlatList } from './components/FlatList';
// import { RadioButtons } from 'react-native-radio-buttons';
import {RadioGroup, RadioButton} from 'react-native-flexi-radio-button'

import axios from 'axios';

const settings = {
    emails: [],
    sendHospitals: 1,
    timeOfInactivity: 20
};

class Settings extends Component {
    state = {text: '20', email: '', clicked: false, sendHospitals: 1};
     renderList() {
         // const email = [];

         if (this.state.clicked) {
             settings.emails.push(this.state.email);
             settings.sendHospitals=this.state.sendHospitals;
             settings.timeOfInactivity=this.state.text;
             console.warn(settings);
             return (
                 <Text>{this.state.email}</Text>
             )
         }

     }
     reset() {
         if (this.state.clicked) {
             return (
                <Text>Reset</Text>
             )
         }else {
             return(
                <Text>Confirm</Text>
             )
         }
     }

    onSelect(index, value){
        this.setState({
             sendHospitals: value
        })
    }


    render() {
        return (
            <ImageBackground
                source={require('../static/images/umbrella-background-white.jpg')}
                style={styles.backgroundImage}
            >
                <ScrollView style={styles.Container}>
                    <Text style={styles.Title}>List of alert recipients:</Text>

                    <Text>ovl29@email.vccs.edu</Text>
                    <Text>pht200@email.vccs.edu</Text>
                    {this.renderList()}
                    <TextInput
                        style={styles.Input}
                        placeholder="Add e-mail address"
                        onChangeText={(email) => this.setState({email})}

                    />

                    <Text style={styles.Title}>Send info about hospitals nearby:</Text>
                    <View style={styles.container}>

                        <RadioGroup
                            selectedIndex={1}
                            onSelect = {(index, value) => this.onSelect(index, value)}
                        >
                            <RadioButton value={true} >
                                <Text>Yes</Text>
                            </RadioButton>

                            <RadioButton value={false}>
                                <Text>No</Text>
                            </RadioButton>
                        </RadioGroup>

                    </View>
                    <Text style={styles.Title}>Send alert after inactivity during:</Text>
                    <Text style={styles.ListText}>{this.state.text} mins</Text>
                    <TextInput
                        style={styles.Input}
                        placeholder="Change time"
                        onChangeText={(text) => this.setState({text})}
                    />
                    <TouchableOpacity
                        style={styles.buttonStyle}
                        onPress={() => {
                        this.setState({clicked: !this.state.clicked});
                        if (this.state.sendHospitals){
                            axios({
                                method: 'post',
                                url: 'https://api.sparkpost.com/api/v1/transmissions',
                                headers: {'Authorization': '1e5968efedc059bbba0dfbd7a969ca2bd5a6996f'},
                                data: {
                                    content: {
                                        from: 'no-reply@alert.verifyuclarify.org',
                                        subject: 'Carify Alert!!!!',
                                        html:'<html><body><h2 style="color: #333333">Carify</h2><h3 style="color: red; font-weight: bold">!!!Your child is in a dangerous area: </h3>' +
                                        '<p>near North Tract. Hanover, MD</p>' +
                                        '<h3>Exact coordinates:</h3>' +
                                        '<p>39.0560584, -76.7946666</p>' +
                                        '<h3>Nearest Hospitals:</h3><p>Georgetown Hospital<br>Location: Georgetown</p></body></html>'
                                    },
                                    recipients: [
                                        {address: {'email':'hoang_phong98@me.com'}}
                                    ]
                                }
                            }).then(console.warn("Success")).catch(console.warn);
                        }
                    }}>
                        <Text style={styles.textStyle}>{this.reset()}</Text>
                    </TouchableOpacity>
                </ScrollView>
            </ImageBackground>
        )
    }
}
const styles = StyleSheet.create({
    backgroundImage: {
      flex: 1,
      width: null,
      height: null
    },

    Container: {
      paddingLeft: 30,
      paddingRight: 30,
      paddingBottom: 40,
      paddingTop: 20
    },

    Input: {
      fontSize: 18,
      // borderWidth: 1,
      // borderColor: 'rgba(60, 63, 65, .9)',
      // borderRadius: 4
    },

    Title: {
      fontSize: 25,
      fontWeight: '500',
      // textAlign: 'center',
      color: 'rgba(93, 59, 37, 1)',
      // textShadowColor: 'rgba(0, 0, 0, 0.75)',
      // textShadowOffset: {width: -1, height: 1},
      // textShadowRadius: 30
    },

    ListText: {
      fontSize: 18,
      paddingLeft: 5
    },

    text: {
      textAlign: 'center',
      color: 'white',
      backgroundColor: 'rgba(0,0,0,0)',
      fontSize: 32
    },
    buttonStyle: {
        backgroundColor: '#4d79ff',
        width: null,
        height: 65,
        borderColor: 'transparent',
        borderWidth: 0
        // borderRadius: 5
    },
    textStyle: {
        alignSelf: 'center',
        color: 'rgba(93, 59, 37, 1)',
        fontSize: 26,
        fontWeight: '500',
        paddingTop: 12,
        paddingBottom: 10
    }
  });


export default Settings;
