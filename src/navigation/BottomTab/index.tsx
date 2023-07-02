import { Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import SettingsScreen from '../../screens/SettingsScreen';
import MapScreen from '../../screens/MapScreen';
import HomeNav from '../HomeNav';
import { scale, verticalScale } from 'react-native-size-matters';
import { textTranslation } from '../../utils/text';
import { useLanguageContext } from '../../context/LanguageContext';

const Tab = createBottomTabNavigator();

const BottomTab = () => {
  const { language } = useLanguageContext();

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: '#ffffff',
          height: verticalScale(65),
          paddingBottom: verticalScale(20),
          paddingTop: verticalScale(12),
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
                {textTranslation.tabs.home[language]}
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
                {textTranslation.tabs.map[language]}
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
                {textTranslation.tabs.settings[language]}
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
    height: scale(24),
    width: scale(24),
  },
  text: {
    fontSize: scale(12),
    marginTop: verticalScale(4),
    fontWeight: 'bold',
  },
});
