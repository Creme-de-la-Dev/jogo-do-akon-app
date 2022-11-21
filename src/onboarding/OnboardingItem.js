// React
import React from "react";

// React Native Components
import {
  View,
  Text,
  StyleSheet,
  Image,
  useWindowDimensions,
} from "react-native";

export default OnboardingItem = ({ item }) => {
  const { width } = useWindowDimensions();

  return (
    <View style={[styles.container, { width }]}>
      <Image
        source={item.image}
        style={[styles.image, { width, resizeMode: "contain" }]}
      />

      <View style={{ flex: 0.3 }}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.description}>{item.description}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 15,
  },

  image: {
    flex: 0.7,
    justifyContent: "center",
    width: "auto",
  },

  title: {
    fontWeight: "800",
    fontSize: 27,
    marginBottom: 10,
    color: "#F9F9F9",
    textAlign: "center",
  },

  description: {
    fontWeight: "400",
    color: "#eaeaea",
    fontSize: 15,
    textAlign: "center",
    paddingHorizontal: 40,
  },
});
