// React
import React from "react";

// App Screens
import HomeScreen from "../.././app/screens/HomeScreen";
import PlayScreen from "../.././app/screens/PlayScreen";
import ProfileScreen from "../.././app/screens/ProfileScreen";

// Screen names
const homeName = "Home";
const playName = "Jogar";
const profileName = "Perfil";

// React Navigation
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

// Icons
import Ionicon from "react-native-vector-icons/Ionicons";
import MCIcons from "react-native-vector-icons/MaterialCommunityIcons";

const Tab = createBottomTabNavigator();

const BottomNavigator = ({ route, navigation }) => {
  return (
    <Tab.Navigator
      initialRouteName={homeName}
      screenOptions={({ route }) => ({
        headerShown: true,
        tabBarActiveTintColor: "#ffb102",
        // tabBarInactiveTintColor: theme.inactiveTintColor,
        tabBarIndicatorStyle: { width: 0, height: 0, elevation: 0 },
        headerStyle: {
          shadowOffset: { height: 0, width: 0 },
          backgroundColor: "#fbd276",
        },
        headerTintColor: "#000000",

        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          let rn = route.name;

          if (rn === homeName) {
            iconName = focused ? "home" : "home-outline";
          } else if (rn === playName) {
            iconName = focused ? "controller-classic" : "controller-classic-outline";
          } else if (rn === profileName) {
            iconName = focused ? "account" : "account-outline";
          }

          return <MCIcons name={iconName} size={32} color={color} />;
        },
        tabBarStyle: [
          {
            display: "flex",
            borderTopWidth: "#fbd276",
          },
          null,
        ],
      })}
    >
      <Tab.Screen
        name={homeName}
        component={HomeScreen}
        options={{ title: "Home" }}
      />
      <Tab.Screen
        name={playName}
        component={PlayScreen}
        options={{ title: "Jogar" }}
      />
      <Tab.Screen
        name={profileName}
        component={ProfileScreen}
        options={{ title: "Perfil" }}
      />
    </Tab.Navigator>
  );
};

export default BottomNavigator;
