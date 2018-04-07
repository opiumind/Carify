import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import MapView from 'react-native-maps';

export default class Map extends React.Component {
    render(){
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
        )
    }
}

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        top: 0,
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
