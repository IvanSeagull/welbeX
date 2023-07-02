import { Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Marker } from 'react-native-maps';
import { Car } from '../../types';

interface MarkerProps {
  latitude: number;
  longitude: number;
  title: string;
  description?: string;
  type: string;
  //   car: Car;
}

const MyMarker: React.FC<MarkerProps> = ({ latitude, longitude, title, description, type }) => {
  return (
    <Marker
      coordinate={{
        latitude: latitude,
        longitude: longitude,
      }}
      title={title}
      description={description}>
      <View style={styles.wrapper}>
        <Image
          style={styles.icon}
          source={
            type === 'p'
              ? require('../../../assets/img/type2.png')
              : type === 'f'
              ? require('../../../assets/img/type.png')
              : type === 's'
              ? require('../../../assets/img/type3.png')
              : require('../../../assets/img/user.png')
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
