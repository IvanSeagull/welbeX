import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Car, CarTypes } from '../../types';
import MapView from 'react-native-map-clustering';
import { useNavigation } from '@react-navigation/native';
import { Marker } from 'react-native-maps';
import MyMarker from '../../components/MyMarker';
import { ScrollView } from 'react-native-gesture-handler';
import { Linking } from 'react-native';
import { callNumber } from '../../utils/phone';

const CarDetails = (params: any) => {
  const car: Car = params.route.params.car;
  const navigation = useNavigation();
  return (
    <View style={{ flex: 1 }}>
      <View style={styles.overlay}>
        <TouchableOpacity style={styles.overlayBtnCon} onPress={() => navigation.goBack()}>
          <Image style={styles.overlayBtnImg} source={require('../../../assets/img/message.png')} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.overlayBtnCon} onPress={() => callNumber(car.driverPhone)}>
          <Image style={styles.overlayBtnImg} source={require('../../../assets/img/phone.png')} />
        </TouchableOpacity>
      </View>
      {/* <ScrollView> */}
      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.btnBackCon}>
        <Image style={styles.btnBackImg} source={require('../../../assets/img/arrow-left.png')} />
      </TouchableOpacity>

      <Image source={{ uri: car.imgUrl }} style={styles.img} resizeMode="cover" />
      <View style={styles.content}>
        <Text style={styles.title}>
          {car.carName} #{car.carNumber}
        </Text>

        <Text style={styles.driver}>
          {car.driverName} {car.driverSurname} <Text style={styles.phone}>{car.driverPhone}</Text>
        </Text>

        <View style={styles.typeCon}>
          <Text style={styles.type}> {CarTypes[car.type as keyof typeof CarTypes]}</Text>
        </View>

        <Text style={styles.desc}>{car.description}</Text>
      </View>
      <View style={styles.mapView}>
        {/* <MapView
          style={{ flex: 1 }}
          mapType="standard"
          provider="google"
          initialRegion={{
            latitude: car.latitude,
            longitude: car.longitude,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}>
          <MyMarker
            latitude={car.latitude}
            longitude={car.longitude}
            title={`${car.carName} #${car.carNumber}`}
            description={`${car.description}`}
            type={car.type}
          />
          <MyMarker
            latitude={car.driverLatitude}
            longitude={car.driverLongitude}
            title={`${car.driverName} ${car.driverSurname}`}
            type={'user'}
          />
        </MapView> */}
      </View>
      {/* </ScrollView> */}
    </View>
  );
};

export default CarDetails;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  overlay: {
    position: 'absolute',
    bottom: 16,
    right: 16,
    zIndex: 4,
    gap: 18,
  },
  overlayBtnCon: {
    height: 60,
    width: 60,
    borderRadius: 60,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  overlayBtnImg: {
    height: 30,
    width: 30,
  },
  btnBackCon: {
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
  btnBackImg: {
    height: 30,
    width: 30,
  },
  img: {
    width: '100%',
    height: '30%',
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
  phone: {
    marginTop: 6,
    fontSize: 18,
    fontWeight: '500',
    color: '#007BFF',
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
