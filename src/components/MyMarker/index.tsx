import { Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Marker } from 'react-native-maps';
import { Car } from '../../types';

interface MarkerProps {
  car: Car;
}

const MyMarker: React.FC<MarkerProps> = ({ car }) => {
  return (
    <Marker
      coordinate={{
        latitude: car.latitude,
        longitude: car.longitude,
      }}
      title={car.carName + ' #' + car.carNumber}
      description={car.description}>
      <View style={styles.wrapper}>
        <Image
          style={styles.icon}
          source={
            car.type === 'p'
              ? require('../../../assets/img/type2.png')
              : car.type === 'f'
              ? require('../../../assets/img/type.png')
              : require('../../../assets/img/type3.png')
          }
          resizeMode="contain"
        />
      </View>
    </Marker>
  );
};

export default MyMarker;

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: '#242424',
    width: 50,
    height: 50,
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    width: 30,
    height: 30,
  },
});
