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

const Tab = createBottomTabNavigator();

const BottomNavigator = ({ route, navigation }) => {

  return (
    <Tab.Navigator
      initialRouteName={homeName}
      screenOptions={({ route }) => ({
        headerShown: true,
        tabBarActiveTintColor: theme.activeTintColor,
        tabBarInactiveTintColor: theme.inactiveTintColor,
        tabBarIndicatorStyle: { width: 0, height: 0, elevation: 0 },
        headerStyle: {
          shadowOffset: { height: 0, width: 0 },
          backgroundColor: theme.headerBackground,
        },
        headerTintColor: "#fff",

        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          let rn = route.name;

          if (rn === homeName) {
            iconName = focused ? "briefcase" : "briefcase-outline";
          } else if (rn === historyName) {
            iconName = focused ? "list" : "list-outline";
          } else if (rn === profileName) {
            iconName = focused ? "person" : "person-outline";
          }

          return <Ionicon name={iconName} size={size} color={color} />;
        },
        tabBarStyle: [
          {
            display: "flex",
            backgroundColor: theme.bottomNavColor,
            borderTopWidth: theme.borderBottomNav,
          },
          null,
        ],
      })}
    >
      <Tab.Screen name={homeName} component={HomeScreen} />
      <Tab.Screen name={playName} component={PlayScreen} />
      <Tab.Screen name={profileName} component={ProfileScreen} />
    </Tab.Navigator>
  );
};

export default BottomNavigator;