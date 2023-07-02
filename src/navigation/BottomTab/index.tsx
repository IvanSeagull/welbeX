import { Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import CarsListScreen from '../../screens/CarsListScreen';
import SettingsScreen from '../../screens/SettingsScreen';
import MapScreen from '../../screens/MapScreen';
import HomeNav from '../HomeNav';

const Tab = createBottomTabNavigator();

const BottomTab = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: '#ffffff',
          height: 100,
          paddingBottom: 30,
          paddingTop: 20,
        },
      }}>
      <Tab.Screen
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Image
                style={styles.icon}
                source={
                  focused
                    ? require('../../../assets/img/tabbar/homeActive.png')
                    : require('../../../assets/img/tabbar/home.png')
                }
              />
              <Text style={[styles.text, focused ? { color: '#007BFF' } : { color: '#858585' }]}>
                Home
              </Text>
            </View>
          ),
        }}
        name="Home"
        component={HomeNav}
      />
      <Tab.Screen
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Image
                style={styles.icon}
                source={
                  focused
                    ? require('../../../assets/img/tabbar/mapActive.png')
                    : require('../../../assets/img/tabbar/map.png')
                }
              />
              <Text style={[styles.text, focused ? { color: '#007BFF' } : { color: '#858585' }]}>
                Map
              </Text>
            </View>
          ),
        }}
        name="Map"
        component={MapScreen}
      />
      <Tab.Screen
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Image
                style={styles.icon}
                source={
                  focused
                    ? require('../../../assets/img/tabbar/userActive.png')
                    : require('../../../assets/img/tabbar/user.png')
                }
              />
              <Text style={[styles.text, focused ? { color: '#007BFF' } : { color: '#858585' }]}>
                Settings
              </Text>
            </View>
          ),
        }}
        name="Settings"
        component={SettingsScreen}
      />
    </Tab.Navigator>
  );
};

export default BottomTab;

const styles = StyleSheet.create({
  icon: {
    height: 30,
    width: 30,
  },
  text: {
    fontSize: 16,
    marginTop: 6,
    fontWeight: 'bold',
  },
});
