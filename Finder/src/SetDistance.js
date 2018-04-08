import React from 'react';
import {ScrollView, FlatList, View, Text, StyleSheet} from 'react-native';
import MapView from 'react-native-maps';

export default class SetDistance extends React.Component {
    render(){
        return (
            <View style={styles.BigContainer}>
              <Text style={styles.Title}>List of locations:</Text>
              <FlatList
                data={[{key: {address: '5848 Reservoir ave, Falls Church, VA', distance: '2'}}]}
                renderItem={({item}) =>
                    <View><Text style={styles.ListText}>{item.key.address}</Text>
                        <Text style={styles.ListText}>{item.key.distance}</Text> miles
                    </View>}
              />

                <View style={styles.SmallContainer}>
                    <MapView style={styles.map}
                    region={{
                        latitude: 59,
                        longitude: 18,
                        latitudeDelta: 0.1,
                        longitudeDelta: 0.1
                    }}/>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    BigContainer: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        // justifyContent: 'flex-end',
        // alignItems: 'center'
    },
    SmallContainer: {
      position: 'absolute',
      top: 200,
      left: 0,
      bottom: 0,
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
