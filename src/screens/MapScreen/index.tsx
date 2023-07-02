import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import data from '../../../assets/data.json';
import MapView from 'react-native-maps';
import MyMarker from '../../components/MyMarker';

const MapScreen = () => {
  return (
    <View style={{ flex: 1 }}>
      <MapView
        style={{ flex: 1 }}
        mapType="standard"
        provider="google"
        initialRegion={{
          latitude: 55.7522465,
          longitude: 37.6149401,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}>
        {data.map((item, index) => (
          <MyMarker key={index} car={item} />
        ))}
      </MapView>
    </View>
  );
};

export default MapScreen;

const styles = StyleSheet.create({});
