// React
import * as React from "react";
import { StyleSheet, Text, View } from "react-native";

// Expo
import { StatusBar } from "expo-status-bar";

// Navigation
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// Components
import BottomNavigator from "./src/navigators/BottomNavigator";

// Screens
import HomeScreen from "./app/screens/HomeScreen";
import PlayScreen from "./app/screens/PlayScreen";
import ProfileScreen from "./app/screens/ProfileScreen";
import LoginScreen from "./app/screens/LoginScreen";
import Onboarding from "./app/screens/Onboarding";
import SignInScreen from "./app/screens/SignInScreen";
import SignUpScreen from "./app/screens/SignUpScreen";
import ClassicPlayerSelection from "./app/screens/classicMatch/ClassicPlayerSelection";
import ClassicMatchGameplay from "./app/screens/classicMatch/ClassicMatchGameplay";

export default function App() {
  // Stack Navigation
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{
            headerShown: false,
            animationEnabled: false,
            headerStyle: {
              backgroundColor: "#fbd276",
            },
          }}
        />

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

        <Stack.Screen
          name="Onboarding"
          component={Onboarding}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="SignIn"
          component={SignInScreen}
          options={{
            headerShown: true,
            headerBackTitle: "Voltar",
            headerTitle: "Entrar",
            animationEnabled: true,
            headerStyle: {
              backgroundColor: "#fbd276",
              shadowOffset: { height: 0, width: 0 },
            },
          }}
        />
        <Stack.Screen
          name="SignUp"
          component={SignUpScreen}
          options={{
            headerShown: true,
            headerBackTitle: "Voltar",
            headerTitle: "Criar Conta",
            animationEnabled: true,
            headerStyle: {
              backgroundColor: "#fbd276",
            },
          }}
        />
        <Stack.Screen
          name="ClassicPlayerSelection"
          component={ClassicPlayerSelection}
          options={{
            headerShown: false,
            gestureEnabled: false,
          }}
        />
        <Stack.Screen
          name="ClassicPlayerSelection"
          component={ClassicPlayerSelection}
          options={{
            headerShown: false,
            gestureEnabled: false,
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
