import React from 'react';
import {ScrollView, FlatList, View, Text, StyleSheet, TextInput, TouchableOpacity} from 'react-native';
import Map from "./components/Map";
import axios from 'axios';


export default class SetDistance extends React.Component {
  state = {answer: {}, locations: '', distance: 2};
  getLocation(location) {
      console.warn(location);
      let addressUrl = location.split(' ').join('+');
      let url = "https://maps.google.com/maps/api/geocode/json?address=" + addressUrl + "&key=AIzaSyAG8ALmzcIz0vXHhootbI0w2NWNWraXIaU";
      axios.get(url)
        .then(response => {console.warn(response);this.setState({ answer: response.data });console.warn(this.state.answer)});
    // console.warn(this.state.answer);
    }

    render(){
        return (
            <View style={styles.BigContainer}>
              <View style={styles.SmallContainer}>
                <Text style={styles.Title}>List of locations:</Text>
                <Text style={styles.ListText}>3000 Dawes Ave, Alexandria, VA</Text>
                <TextInput
                  style={styles.Input}
                  placeholder="Add location"
                  // onChange={location => {this.setState({query: event.target.value})}}
                  //       onKeyPress={event => {
                  //         if (event.key === 'Enter') {
                  //           this.setState({locations: location});
                  //         }
                  //       }}
                  // onBlur={(location) => {this.getLocation(location);this.setState({locations: location})}}
                  onChangeText={(location) => {this.setState({locations: location})}}
                />
                <TouchableOpacity onPress={() => {this.getLocation(this.state.locations)}}>
                  <Text>Enter</Text>
                </TouchableOpacity>

                {/*<Text>{this.state.locations||''}</Text>*/}
                {/*<Text>{this.state.response}</Text>*/}
                {/*2730+s+veitch+st+arlington+va*/}

              </View>
              <Map/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    BigContainer: {
        // position: 'absolute',
        // top: 0,
        // left: 0,
        // bottom: 0,
        // right: 0,
        // justifyContent: 'flex-end',
        // alignItems: 'center'
    },

    Title: {
      fontSize: 20,
      fontWeight: '300',
      // textAlign: 'center',
      color: 'rgba(93, 59, 37, 1)',
      // textShadowColor: 'rgba(0, 0, 0, 0.75)',
      // textShadowOffset: {width: -1, height: 1},
      // textShadowRadius: 30
    },

    SmallContainer: {
      paddingLeft: 30,
      paddingRight: 30,
      paddingBottom: 20,
      paddingTop: 20
    }
});
