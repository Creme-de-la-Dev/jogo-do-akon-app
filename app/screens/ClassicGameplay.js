// React
import React, { useState, useEffect } from "react";

// React Native Components
import { View, Text, StyleSheet, ActivityIndicator } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Bars } from "react-native-loader";

// Expo
import { LinearGradient } from "expo-linear-gradient";
import { StatusBar } from "expo-status-bar";

// Icons
import MCIcon from "react-native-vector-icons/MaterialCommunityIcons";

// Animations
import Reanimated, {
  SlideInUp,
  BounceIn,
  SlideInDown,
} from "react-native-reanimated";

export default ClassicGameplay = () => {
  const [loading, setLoading] = useState(true);
  const navigation = useNavigation();

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 800);
  }, []);

  return loading ? (
    <View>
      <StatusBar style="dark" />
      <LinearGradient colors={["#FCC54A", "#FECD5E"]}>
        <View style={[styles.container, { justifyContent: "center" }]}>
          <ActivityIndicator size="large" color={"#000"} />
        </View>
      </LinearGradient>
    </View>
  ) : (
    <View>
      <StatusBar style="dark" />
      <LinearGradient colors={["#FCC54A", "#FECD5E"]}>
        <View style={styles.container}>
          <View style={styles.header}>
            <TouchableOpacity
              style={styles.backBtn}
              onPress={() => {
                navigation.goBack();
              }}
            >
              <MCIcon
                name="arrow-left"
                color="#ffffff"
                iconStyle={{ marginRight: 10 }}
                size={35}
              />
            </TouchableOpacity>
          </View>
          <Reanimated.View
            style={styles.playerSelection}
            entering={BounceIn.duration(1000)}
          ></Reanimated.View>
          <Reanimated.View entering={SlideInDown.duration(1000)}>
            <TouchableOpacity style={styles.btnStyle}>
              <Text style={styles.btnTitle}>Iniciar Partida</Text>
            </TouchableOpacity>
          </Reanimated.View>
        </View>
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // justifyContent: "center",
    height: "100%",
    padding: 8,
  },

  loadingContainer: {
    justifyContent: "center",
    height: "100%",
  },

  header: {
    width: "10%",
    height: "10%",
    alignSelf: "flex-start",
    justifyContent: "flex-end",
    marginBottom: 5,
  },

  playerSelection: {
    backgroundColor: "#FF8A00",
    height: "75%",
    marginHorizontal: 10,
    marginTop: 10,
    marginBottom: 5,
    borderRadius: "25px",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },

  btnStyle: {
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 25,
    textAlign: "center",
    width: "100%",
    marginTop: 15,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.25,
    shadowRadius: 25.0,
    elevation: 5,
  },

  btnTitle: {
    alignSelf: "center",
    fontWeight: "bold",
    fontSize: 18,
    color: "#FF8A00",
  },
});
