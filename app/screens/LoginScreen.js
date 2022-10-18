// React
import React, { useContext } from "react";

// React Native Components
import { View, Text, StyleSheet, Button, TouchableOpacity } from "react-native";

// Expo
import { LinearGradient } from "expo-linear-gradient";
import { StatusBar } from "expo-status-bar";

// Images
const akonLogo = require("../../assets/akonLogo.png");

// Animations
import Reanimated, {
    FadeInDown,
    FadeInUp,
    FadeOutDown,
    SlideInRight,
    SlideInUp,
    SlideOutDown,
    SlideOutLeft,
    BounceIn,
    SlideInDown
  } from "react-native-reanimated";

export default LoginScreen = () => {
  return (
    <View>
      <StatusBar style="dark" />
      <LinearGradient colors={["#FCC54A", "#FECD5E"]}>
        <View style={styles.container}>
            <Reanimated.Text entering={SlideInUp.duration(700)} style={styles.gameTitle} >Jogo do{"\n"}AKON</Reanimated.Text>
            <Reanimated.Image entering={BounceIn.duration(1000)} style={styles.akonLogo} source={akonLogo} />
            <Reanimated.View entering={SlideInDown.duration(700)} style={styles.btnView}>
                <TouchableOpacity style={styles.signUpBtn}>
                  <Text style={styles.btnTitle}>Criar uma Conta</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.loginBtn}>
                  <Text style={styles.btnTitle}>Entrar</Text>
                </TouchableOpacity>

            </Reanimated.View>
        </View>
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    height: "100%",
    padding: 8,
  },

  gameTitle: {
    textAlign: "center",
    fontWeight: "bold",
    color: "#3E3B3B",
    fontSize: "55px",
    lineHeight: "80%",
  },

  akonLogo: {
    alignSelf: "center",
    width: "100%",
    height: "45%",
    paddinLeft: 40,
    paddingRight: 40,
    resizeMode: "contain",
    marginBottom: 20,
  },

  btnView: {
    alignItems: 'space-evenly',

  },

  signUpBtn: {
    borderRadius: 25,
    padding: 20,
    backgroundColor: "#FF8A00",
    textAlign: "center",
    width: "100%",
    marginTop: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.25,
    shadowRadius: 25.0,
    elevation: 5,
  },

  loginBtn: {
    padding: 20,
    borderRadius: 25,
    backgroundColor: "#24a322",
    textAlign: "center",
    width: "100%",
    marginTop: 20,
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
    color: "#F4F4F4"
  },
});
