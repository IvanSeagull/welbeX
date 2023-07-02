import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import BottomTab from './src/navigation/BottomTab';
import { NavigationContainer } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import LanguageContextProvider from './src/context/LanguageContext';

export default function App() {
  return (
    <LanguageContextProvider>
      <NavigationContainer>
        <View style={styles.container}>
          {/* <Text>Open up App.tsx to start working on your app!</Text> */}
          <BottomTab />
          <StatusBar style="auto" />
        </View>
      </NavigationContainer>
    </LanguageContextProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
