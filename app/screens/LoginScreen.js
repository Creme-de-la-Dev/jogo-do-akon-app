// React
import React, { useContext } from "react";

// React Native Components
import { View, Text, StyleSheet } from "react-native";

// Expo
import { LinearGradient } from "expo-linear-gradient";

export default LoginScreen = () => {
  return (
    <View>
      <LinearGradient colors={["#FCC54A", "#FECD5E"]}>
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            height: "100%",
          }}
        ></View>
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignSelf: "center",
  },
});
