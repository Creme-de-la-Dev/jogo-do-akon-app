// React
import React from "react";

// React Native External Components
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

// Tabs
import LocalMatch from "../tabs/LocalMatch";
import OnlineMatch from "../tabs/OnlineMatch";

const Tab = createMaterialTopTabNavigator();

const TopNavigator = () => {

  return (
    <Tab.Navigator
      initialRouteName="Partida Local"
      screenOptions={{
        tabBarLabelStyle: { fontSize: 14, fontWeight: "700" },
        tabBarActiveTintColor: "white",
        tabBarIndicatorStyle: { backgroundColor: theme.indicator },
        tabBarStyle: { backgroundColor: theme.headerBackground },
      }}
    >
      <Tab.Screen
        name="Partida Local"
        component={LocalMatch}
        options={{ tabBarLabel: "Partida Local" }}
      />
      <Tab.Screen
        name="Partida Online"
        component={OnlineMatch}
        options={{ tabBarLabel: "Partida Online" }}
      />
    </Tab.Navigator>
  );
};

export default TopNavigator;