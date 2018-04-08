import React from 'react';
import {ScrollView, FlatList, View, Text, StyleSheet, Image, Picker} from 'react-native';
import Map from "./components/Map";

export default class DangerousAreas extends React.Component {
    state = { user: '' }
    updateUser = (user) => {
        this.setState({ user: user });
    }
  render(){
    return (
      <View style={styles.BigContainer}>
        <View style={styles.SmallContainer}>
            <Text style={styles.Title}>Inside a criminal area, forest, military base</Text>
            {/*<View style={{flex: 2}}>*/}
            <Text style={styles.ListText}>Level of danger: </Text>

            {/*</View>*/}
            {/*<View style={{flex: 2}}>*/}
            {/*<View style={{flex: 1,justifyContent: 'flex-start', flexDirection: 'row',alignItems: 'center'}}>*/}
            <Picker selectedValue={this.state.user} onValueChange={this.updateUser}>
                <Picker.Item label="Low" value="low" />
                <Picker.Item label="Mid" value="mid" />
                <Picker.Item label="High" value="high" />
            </Picker>
        </View>
        <Image
            style={{width: 400, height: 500}}
            source={require('../static/images/criminal.png')}/>
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
