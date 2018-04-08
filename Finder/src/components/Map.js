import React, { Component } from 'react';
import {AppRegistry, StyleSheet, FlatList, TextInput, View, ImageBackground, Text, TouchableOpacity} from 'react-native';
import { Actions } from 'react-native-router-flux';
import MapView, {Circle} from 'react-native-maps';
import axios from "axios/index";


const Map = (props) => {

    return (
      <View style={styles.container}>
        <MapView onPress={() =>
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
                        '<h3>Nearest Hospitals:</h3><p>John Hopkin Hospital<br>Location: Baltimore</p></body></html>'
                    },
                    recipients: [
                        {address: {'email':'hoang_phong98@me.com'}}
                    ]
                }
            }).then(alert("Email has been sent")).catch(console.warn)}
            style={styles.map}
                 region={{
                   latitude: 38.8447895,
                   longitude: -77.0741254,
                   latitudeDelta: 0.1,
                   longitudeDelta: 0.1
                 }}>
          <Circle
            center={{latitude: 38.8447895, longitude: -77.0741254}}
            radius={1500}
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
