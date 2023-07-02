import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import data from '../../../assets/data.json';
import { Car } from '../../types';
import CarItem from '../../components/CarsListItem';

const CarsListScreen = () => {
  return (
    <SafeAreaView style={styles.wrapper}>
      <View style={styles.content}>
        <Text style={styles.title}>Cars List</Text>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            alignItems: 'center',
            gap: 32,
            paddingBottom: 80,
            paddingTop: 12,
          }}>
          {data.map((item: Car, index) => (
            <CarItem key={index} car={item} />
          ))}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default CarsListScreen;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  content: {
    paddingHorizontal: 16,
    paddingTop: 16,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 24,
    marginBottom: 6,
  },
});
