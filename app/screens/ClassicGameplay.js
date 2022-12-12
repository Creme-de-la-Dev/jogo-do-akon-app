// React
import React, { useState, useEffect } from "react";

// React Native Components
import {
  View,
  Text,
  StyleSheet,
  ActivityIndicator,
  TextInput,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Bars } from "react-native-loader";

// Expo
import { LinearGradient } from "expo-linear-gradient";
import { StatusBar } from "expo-status-bar";
import { Audio } from 'expo-av';

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
  const [sound, setSound] = useState();
  const navigation = useNavigation();

  const playSound = async () => {
    try {
      console.log("Loading Sound");
      const { sound } = await Audio.Sound.createAsync( require('../../assets/sounds/akon8bit.mp3'));
      setSound(sound);
    } catch (e) {
      onsole.log("Error playling audio");  
    }
  };

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
          >
            <Text style={styles.title}>Adicione os jogadores:</Text>
            <TextInput style={styles.input} placeholder="Jogador 1" keyboardType="text" />
            <TextInput style={styles.input} placeholder="Jogador 2" keyboardType="text" />
            <TextInput style={styles.input} placeholder="Jogador 3" keyboardType="text" />
            <TextInput style={styles.input} placeholder="Jogador 4" keyboardType="text" />
            <TextInput style={styles.input} placeholder="Jogador 5" keyboardType="text" />
            <TextInput style={styles.input} placeholder="Jogador 6" keyboardType="text" />
            <TextInput style={styles.input} placeholder="Jogador 7" keyboardType="text" />
            <TextInput style={styles.input} placeholder="Jogador 8" keyboardType="text" />
          </Reanimated.View>
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
    alignItems: "center",
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

  title: {
    textAlign: "center",
    marginTop: 15,
    marginBottom: 5,
    fontSize: 20,
    alignSelf: "center",
    fontWeight: "bold",
    color: "#FFF",
  },

  input: {
    height: 50,
    width: "80%",
    marginVertical: 10,
    borderWidth: 1,
    padding: 15,
    borderRadius: 10,
    borderColor: "#fbd276",
    backgroundColor: "#FFF",
  },
});
