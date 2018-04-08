import React, { Component } from 'react';
import {AppRegistry, StyleSheet, FlatList, TextInput, View, ImageBackground, Text, TouchableOpacity} from 'react-native';
import { Actions } from 'react-native-router-flux';
import MapView from 'react-native-maps';


class Map extends Component {
  render() {
    return (
      <View style={styles.container}>
        <MapView style={styles.map}
                 region={{
                   latitude: 59,
                   longitude: 18,
                   latitudeDelta: 0.1,
                   longitudeDelta: 0.1
                 }}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    height: 500,
    top: 0,
    left: 0,
    // bottom: 0,
    right: 0,
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  map: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0
  }
});


export default Map;
