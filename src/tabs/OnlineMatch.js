// React
import React, { useContext } from "react";

// React Native Components
import { View, Text, StyleSheet, Image } from "react-native";
import SVG from "react-native-svg";

// Image
import onlineMode from "../../assets/onlineMode.png";

export default OnlineMatch = () => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={onlineMode} />
      <Text
        style={{
          color: "#000",
          fontSize: 28,
          fontWeight: "bold",
          alignSelf: "center",
        }}
      >
        Em Breve
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignSelf: "center",
  },

  image: {
    width: 350,
    height: 350,
    resizeMode: "contain",
  },
});
