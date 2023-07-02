import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Car, CarTypes } from '../../types';
import MapView from 'react-native-map-clustering';
import { useNavigation } from '@react-navigation/native';
import { Marker } from 'react-native-maps';
import MyMarker from '../../components/MyMarker';
import { ScrollView } from 'react-native-gesture-handler';

const CarDetails = (params: any) => {
  const car: Car = params.route.params.car;
  const navigation = useNavigation();
  return (
    <View style={{ flex: 1 }}>
      <ScrollView>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.btnCon}>
          <Image style={styles.btnImg} source={require('../../../assets/img/arrow-left.png')} />
        </TouchableOpacity>

        <Image source={{ uri: car.imgUrl }} style={styles.img} resizeMode="cover" />
        <View style={styles.content}>
          <Text style={styles.title}>
            {car.carName} #{car.carNumber}
          </Text>

          <Text style={styles.driver}>
            {car.driverName} {car.driverSurname}
          </Text>

          <View style={styles.typeCon}>
            <Text style={styles.type}> {CarTypes[car.type as keyof typeof CarTypes]}</Text>
          </View>

          <Text style={styles.desc}>{car.description}</Text>
        </View>
        <View style={styles.mapView}>
          <MapView
            style={{ flex: 1 }}
            mapType="standard"
            provider="google"
            initialRegion={{
              latitude: car.latitude,
              longitude: car.longitude,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421,
            }}>
            <MyMarker car={car} />
          </MapView>
        </View>
      </ScrollView>
    </View>
  );
};

export default CarDetails;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  btnCon: {
    position: 'absolute',
    top: 50,
    left: 20,
    zIndex: 1,
    height: 40,
    width: 40,
    borderRadius: 40,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnImg: {
    height: 30,
    width: 30,
  },
  img: {
    width: '100%',
    height: 300,
  },
  content: {
    minHeight: 200,
    paddingHorizontal: 16,
    // marginTop: 16,
    paddingTop: 16,
  },

  title: {
    fontWeight: 'bold',
    fontSize: 32,
    maxWidth: 240,
  },
  driver: {
    marginTop: 6,
    fontSize: 24,
    fontWeight: '500',
  },
  typeCon: {
    position: 'absolute',
    top: 16,
    right: 16,
    backgroundColor: '#007BFF',
    borderRadius: 12,
  },
  type: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
    paddingHorizontal: 8,
    paddingVertical: 6,
  },
  desc: {
    marginTop: 12,
    fontSize: 16,
  },
  mapView: {
    marginTop: 16,
    height: 300,
    width: '100%',
  },
});
