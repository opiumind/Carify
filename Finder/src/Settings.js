import React, { Component } from 'react';
import {AppRegistry, StyleSheet, FlatList, TextInput, View, ImageBackground, Text, TouchableOpacity} from 'react-native';
import { Actions } from 'react-native-router-flux';
import { WideButton } from './components/WideButton';
// import { RadioButtons } from './components/RadioButtons';
// import { FlatList } from './components/FlatList';
// import { RadioButtons } from 'react-native-radio-buttons';
import {RadioGroup, RadioButton} from 'react-native-flexi-radio-button'



class Settings extends Component {
    state = {text: '20', email: '', clicked: false};
     renderList() {
         if (this.state.clicked) {
             return (
                 <Text>{this.state.email}</Text>
             )
         }
     }

    onSelect(index, value){
        this.setState({
            text1: `Selected index: ${index} , value: ${value}`
        })
    }


    render() {
        return (
            <ImageBackground
                source={require('../static/images/umbrella-background-white.jpg')}
                style={styles.backgroundImage}
            >
                <View style={styles.Container}>
                    <Text style={styles.Title}>List of alert recipients:</Text>

                    <Text>ovl29@email.vccs.edu</Text>
                    <Text>pht200@email.vccs.edu</Text>
                    {this.renderList()}
                    <TextInput
                        style={styles.Input}
                        placeholder="Add e-mail address"
                        onChangeText={(email) => this.setState({email})}
                    />
                    <TouchableOpacity onPress={() => this.setState({clicked: true})}>
                        <Text>Enter</Text>
                    </TouchableOpacity>
                    <Text style={styles.Title}>Send info about hospitals nearby:</Text>
                    <View style={styles.container}>

                        <RadioGroup
                            onSelect = {(index, value) => this.onSelect(index, value)}
                        >
                            <RadioButton value={'item1'} >
                                <Text>Marymount Hospital</Text>
                            </RadioButton>

                            <RadioButton value={'item2'}>
                                <Text>George Town</Text>
                            </RadioButton>
                        </RadioGroup>

                        <Text style={styles.text}>{this.state.text1}</Text>

                    </View>
                    <Text style={styles.Title}>Send alert after inactivity during:</Text>
                    <Text style={styles.ListText}>{this.state.text} mins</Text>
                    <TextInput
                        style={styles.Input}
                        placeholder="Change time"
                        onChangeText={(text) => this.setState({text})}
                    />
                </View>
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
      paddingBottom: 20,
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
    }
  });


export default Settings;
