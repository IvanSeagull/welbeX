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
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';

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
      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.btnBackCon}>
        <Image style={styles.btnBackImg} source={require('../../../assets/img/arrow-left.png')} />
      </TouchableOpacity>

      <Image source={{ uri: car.imgUrl }} style={styles.img} resizeMode="cover" />
      <View style={styles.content}>
        <Text style={styles.title}>
          {car.carName} #{car.carNumber}
        </Text>

        <View style={styles.typeCon}>
          <Text style={styles.type}> {CarTypes[car.type as keyof typeof CarTypes]}</Text>
        </View>

        <Text style={styles.driver}>
          {car.driverName} {car.driverSurname} <Text style={styles.phone}>{car.driverPhone}</Text>
        </Text>

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
        </MapView>
      </View>
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
    bottom: scale(12),
    right: scale(12),
    zIndex: 4,
    gap: verticalScale(10),
  },
  overlayBtnCon: {
    height: scale(50),
    width: scale(50),
    borderRadius: 60,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  overlayBtnImg: {
    height: scale(22),
    width: scale(22),
  },
  btnBackCon: {
    position: 'absolute',
    top: verticalScale(40),
    left: 20,
    zIndex: 1,
    height: scale(30),
    width: scale(30),
    borderRadius: 40,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnBackImg: {
    height: scale(20),
    width: scale(20),
  },
  img: {
    width: '100%',
    height: verticalScale(220),
  },
  content: {
    minHeight: verticalScale(120),
    paddingHorizontal: 16,
    paddingTop: verticalScale(12),
  },

  title: {
    fontWeight: 'bold',
    fontSize: scale(26),
  },
  driver: {
    marginTop: 6,
    fontSize: scale(18),
    fontWeight: '500',
  },
  phone: {
    fontSize: scale(14),
    fontWeight: '500',
    color: '#007BFF',
  },
  typeCon: {
    backgroundColor: '#007BFF',
    borderRadius: 12,
    alignSelf: 'flex-start',
  },
  type: {
    fontSize: scale(12),
    fontWeight: 'bold',
    color: '#fff',
    paddingHorizontal: 8,
    paddingVertical: verticalScale(3),
  },
  desc: {
    marginTop: verticalScale(8),
    fontSize: scale(14),
  },
  mapView: {
    marginTop: verticalScale(12),
    height: verticalScale(200),
    width: '100%',
  },
});
