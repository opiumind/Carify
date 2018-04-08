import React, { Component } from 'react';
import {AppRegistry, StyleSheet, FlatList, TextInput, View, ImageBackground, Text, TouchableOpacity} from 'react-native';
import { Actions } from 'react-native-router-flux';
import { WideButton } from './components/WideButton';
// import { RadioButtons } from './components/RadioButtons';
// import { FlatList } from './components/FlatList';
// import { RadioButtons } from 'react-native-radio-buttons';



class Settings extends Component {
  state = {text: '20'};
  // emails: [
  //   {key: 'ovl29@email.vccs.edu'},
  //   {key: 'gg@gg.dg'

  // renderList(){
  //   return(
  //     data.push(this.state.text)
  // )
  // }
  render() {
    return (
      <ImageBackground
        source={require('../static/images/umbrella-background-white.jpg')}
        style={styles.backgroundImage}
      >
        <View style={styles.Container}>
          <Text style={styles.Title}>List of alert recipients:</Text>

          <FlatList
            style={styles.List}
            data={[{key: 'ovl29@email.vccs.edu'},
              {key: 'gg@gg.dg'}]}
            renderItem={({item}) => <Text style={styles.ListText}>{item.key}</Text>}
          />

          <TextInput
            style={styles.Input}
            placeholder="Add e-mail address"
            onChangeText={(text) => this.setState({text})}
          />

          <Text style={styles.Title}>Send info about hospitals nearby:</Text>
          <Text style={styles.Title}>Send alert after inactivity during:</Text>
          <Text style={styles.ListText}>{this.state.text} mins</Text>
          <TextInput
            style={styles.Input}
            placeholder="Change time"
            onChangeText={(text) => this.setState({text})}
          />


          {/*<RadioButtons/>*/}

          {/*<Text style={{padding: 10, fontSize: 42}}>*/}
          {/*{this.state.text.split(' ').map((word) => word && '🍕').join(' ')}*/}
          {/*</Text>*/}
        </View>
      </ImageBackground>
    );

  }


//   render() {
//     return (
//       <View style={{padding: 10}}>
//         <TextInput
//           style={{height: 40}}
//           placeholder="Type here to translate!"
//           onChangeText={(text) => this.setState({text})}
//         />
//         <Text style={{padding: 10, fontSize: 42}}>
//           {this.state.text.split(' ').map((word) => word && '🍕').join(' ')}
//         </Text>
//       </View>
//     );
//   }
// }

// skip this line if using Create React Native App
// AppRegistry.registerComponent('AwesomeProject', () => PizzaTranslator);
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
