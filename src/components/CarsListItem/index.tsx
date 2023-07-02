import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { Car, CarTypes } from '../../types';
import { useNavigation } from '@react-navigation/native';

interface ICarItemProps {
  car: Car;
}

const CarItem: React.FC<ICarItemProps> = ({ car }) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={() => navigation.navigate('CarDetails', { car })}
      style={styles.wrapper}>
      <Image source={{ uri: car.imgUrl }} style={styles.img} resizeMode="cover" />
      <View style={styles.content}>
        <View style={styles.typeCon}>
          <Text style={styles.type}> {CarTypes[car.type as keyof typeof CarTypes]}</Text>
        </View>
        <Text style={styles.title}>
          {car.carName} #{car.carNumber}
        </Text>

        <Text style={styles.driver}>
          {car.driverName} {car.driverSurname}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default CarItem;

const styles = StyleSheet.create({
  wrapper: {
    height: 300,
    width: '100%',
    borderRadius: 12,
    overflow: 'hidden',
  },
  img: {
    width: '100%',
    height: 200,
  },
  content: {
    flex: 1,
    borderColor: '#9e9e9e',
    borderWidth: 1,
    borderTopWidth: 0,
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12,
    padding: 16,
  },
  typeCon: {
    position: 'absolute',
    top: 16,
    right: 16,
    backgroundColor: '#007BFF',
    borderRadius: 12,
  },
  type: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#fff',
    paddingHorizontal: 8,
    paddingVertical: 6,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    maxWidth: 240,
  },
  driver: {
    marginTop: 6,
    fontSize: 16,
    fontWeight: '500',
  },
});
