// React
import React, { useContext } from "react";

// React Native Components
import { View, Text, StyleSheet, Button } from "react-native";

// Expo
import { LinearGradient } from "expo-linear-gradient";

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
  } from "react-native-reanimated";

export default LoginScreen = () => {
  return (
    <View>
      <LinearGradient colors={["#FCC54A", "#FECD5E"]}>
        <View style={styles.container}>
            <Reanimated.Text style={styles.gameTitle}>Jogo do{"\n"}AKON</Reanimated.Text>
            <Reanimated.Image style={styles.akonLogo} source={akonLogo} />
            <Reanimated.View>
                <Button style={styles.signUpBtnText} title={"Criar uma Conta"}/>
                <Button style={styles.loginBtnText} title={"Entrar"}/>
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
    resizeMode: "contain"
  },

  signUpBtnText: {
    padding: 20,
    borderRadius: 10,
    backgroundColor: "#FF8A00"
  },

  loginBtnText: {
    padding: 20,
    borderRadius: 10,
    backgroundColor: "#2ABA28"
  },
});
