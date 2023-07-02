import { ScrollView, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import data from '../../../assets/data.json';
import { Car } from '../../types';
import CarItem from '../../components/CarsListItem';
import { scale, verticalScale } from 'react-native-size-matters';
import { useLanguageContext } from '../../context/LanguageContext';
import { textTranslation } from '../../utils/text';

const CarsListScreen = () => {
  const { language } = useLanguageContext();
  return (
    <View style={styles.content}>
      <Text style={styles.title}>{textTranslation.home.title[language]}</Text>
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
  );
};

export default CarsListScreen;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  content: {
    paddingHorizontal: scale(12),
    paddingTop: '12%',
  },
  title: {
    fontWeight: 'bold',
    fontSize: scale(22),
    marginBottom: verticalScale(6),
  },
});
