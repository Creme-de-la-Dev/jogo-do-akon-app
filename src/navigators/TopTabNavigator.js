// React
import React from "react";

// React Navigation
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
        // tabBarActiveTintColor: "#000",
        // tabBarIndicatorStyle: { backgroundColor: "#ffb102" },
        // tabBarStyle: { backgroundColor: "#f2f2f2" },
        tabBarActiveTintColor: "#171615",
        tabBarIndicatorStyle: { backgroundColor: "#ffb102" },
        tabBarStyle: { backgroundColor: "#fbd276" },
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
