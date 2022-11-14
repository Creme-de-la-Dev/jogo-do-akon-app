// React
import React, { useContext } from "react";

// React Native Components
import { View, Text, StyleSheet, ScrollView } from "react-native";

export default PlayScreen = () => {
  return (
    <ScrollView style={{ flex: 1 }}>
      <View style={styles.header}>
        {/* <Text style={styles.headerText}>
          Selecione o modo {"\n"}
          de JOGO.
        </Text> */}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignSelf: "center",
  },

  header: {
    paddingTop: 30,
    paddingLeft: 25,
  },

  headerText: {
    fontSize: 28,
    fontWeight: "bold",
  },
});
