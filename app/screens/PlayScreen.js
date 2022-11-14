// React
import React, { useContext } from "react";

// React Native Components
import { View, Text, StyleSheet, ScrollView } from "react-native";

// Top Tab Navigator
import TopNavigator from "../../src/navigators/TopTabNavigator";

export default PlayScreen = () => {
  return (
      <View style={{flex: 1}}>
        <TopNavigator />
        {/* <Text style={styles.headerText}>
          Selecione o modo {"\n"}
          de JOGO.
        </Text> */}
      </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignSelf: "center",
  },

  header: {
    // paddingTop: 30,
    // paddingLeft: 25,
  },

  headerText: {
    fontSize: 28,
    fontWeight: "bold",
  },
});
