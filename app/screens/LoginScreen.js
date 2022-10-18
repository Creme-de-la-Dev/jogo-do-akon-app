// React
import React, { useContext } from "react";

// React Native Components
import { View, Text, StyleSheet, Button } from "react-native";

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
            <Reanimated.View entering={SlideInDown.duration(700)}>
                <Button buttonStyle={[styles.signUpBtn]} title={"Criar uma Conta"}/>
                <Button buttonStyle={[styles.loginBtn]} title={"Entrar"}/>
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

  signUpBtn: {
    borderRadius: 12,
    // marginLeft: 0,
    // marginRight: 0,
    // marginBottom: 0,
    padding: 20,
    // backgroundColor: "#2176AE",
    backgroundColor: "#FF8A00"
  },

  loginBtn: {
    padding: 20,
    borderRadius: 12,
    backgroundColor: "#2ABA28"
  },
});
