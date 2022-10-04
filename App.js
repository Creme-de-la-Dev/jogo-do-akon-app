// React
import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';

// Expo
import { StatusBar } from 'expo-status-bar';

// Navigation
import { NavigationContainer } from '@react-navigation/native';

export default function App() {
  return (

    <NavigationContainer>
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
        <StatusBar style="auto" />
      </View>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
