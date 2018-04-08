import React from 'react';
import {ScrollView, FlatList, View, Text, StyleSheet} from 'react-native';
import Map from "./components/Map";

export default class DangerousAreas extends React.Component {
  render(){
    return (
      <View style={styles.BigContainer}>
        <View style={styles.SmallContainer}>
          <Text style={styles.Title}>List of locations:</Text>
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
