import React, { Component } from 'react';
import {AppRegistry, StyleSheet, FlatList, TextInput, View, ImageBackground, Text, TouchableOpacity} from 'react-native';
import { Actions } from 'react-native-router-flux';
import MapView, {Circle} from 'react-native-maps';


const Map = (props) => {

    return (
      <View style={styles.container}>
        <MapView style={styles.map}
                 region={{
                   latitude: 38.8447895,
                   longitude: -77.0741254,
                   latitudeDelta: 0.1,
                   longitudeDelta: 0.1
                 }}>
          <Circle
            center={{latitude: 38.8447895, longitude: -77.0741254}}
            radius={props.distance}
            fillColor="rgba(130, 175, 39, .5)"
            strokeColor="rgba(0, 0, 0, 0.2)"/>
        </MapView>
        <View>
          <Text>{props.distance}</Text>
          <Text>{props.locations}</Text>
        </View>
      </View>
    );

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
