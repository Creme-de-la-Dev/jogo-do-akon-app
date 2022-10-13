// React
import * as React from "react";
import { StyleSheet, Text, View } from "react-native";

// Expo
import { StatusBar } from "expo-status-bar";

// Navigation
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// Components
import BottomNavigator from "./src/navigator/BottomNavigator";

// Screens
import HomeScreen from "./app/screens/HomeScreen";
import PlayScreen from "./app/screens/PlayScreen";
import ProfileScreen from "./app/screens/ProfileScreen";

export default function App() {
  // Stack Navigation
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="BottomNavigator"
          component={BottomNavigator}
          options={{
            headerShown: false,
            gestureEnabled: false,
            animationEnabled: false,
            headerStyle: {
              backgroundColor: "#fbd276",
            },
          }}
        />

        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            headerShown: true,
            headerTitle: "Home",
            animationEnabled: false,
            headerStyle: {
              backgroundColor: "#fbd276",
            },
          }}
        />

        <Stack.Screen
          name="Play"
          component={PlayScreen}
          options={{
            headerShown: true,
            headerTitle: "Jogar",
            animationEnabled: false,
            headerStyle: {
              backgroundColor: "#fbd276",
            },
          }}
        />
        <Stack.Screen
          name="Profile"
          component={ProfileScreen}
          options={{
            animationEnabled: false,
            headerTitle: "Perfil",
            headerShown: true,
            headerStyle: {
              backgroundColor: "#fbd276",
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
