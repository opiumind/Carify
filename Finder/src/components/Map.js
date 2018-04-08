import React, { Component } from 'react';
import {AppRegistry, StyleSheet, FlatList, TextInput, View, ImageBackground, Text, TouchableOpacity} from 'react-native';
import { Actions } from 'react-native-router-flux';
import MapView, {Circle} from 'react-native-maps';


class Map extends Component {
  state = {region: {latitude: 59, longitude: 18}, radius: 1000};
  render() {
    return (
      <View style={styles.container}>
        <MapView style={styles.map}
                 region={{
                   latitude: this.state.region.latitude,
                   longitude: this.state.region.longitude,
                   latitudeDelta: 0.1,
                   longitudeDelta: 0.1
                 }}>
          <Circle
            center={{latitude: this.state.region.latitude, longitude: this.state.region.longitude}}
            radius={this.state.radius}
            fillColor="rgba(130, 175, 39, .5)"
            strokeColor="rgba(0, 0, 0, 0.2)"/>
        </MapView>
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
