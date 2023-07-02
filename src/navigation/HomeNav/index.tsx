import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import CarDetails from '../../screens/CarDetailsScreen';
import CarsListScreen from '../../screens/CarsListScreen';

const Stack = createStackNavigator();

const HomeNav = () => {
  return (
    <View style={{ flex: 1 }}>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="CarsList" component={CarsListScreen} />
        <Stack.Screen name="CarDetails" component={CarDetails} />
      </Stack.Navigator>
    </View>
  );
};

export default HomeNav;
