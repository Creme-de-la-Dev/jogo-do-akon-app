// React
import React, { useContext } from "react";

// React Native Components
import { View, Text, StyleSheet } from "react-native";
import SVG from "react-native-svg";
import SoonImage from "../../assets/soon.svg";

export default OnlineMatch = () => {
  return (
    <View style={styles.container}>
      {/* <SoonImage width={48} height={48} /> */}
      <Text style={{ color: "#000", fontSize: 28, fontWeight: "bold" }}>
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
});
