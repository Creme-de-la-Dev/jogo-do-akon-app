// React
import React, { useState } from "react";

// React Native Components
import { View, Text, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

// Expo
import { LinearGradient } from "expo-linear-gradient";
import { StatusBar } from "expo-status-bar";

// Icons
import MCIcon from "react-native-vector-icons/MaterialCommunityIcons";
import { TouchableOpacity } from "react-native-gesture-handler";

export default ClassicGameplay = () => {
  const [loading, setLoading] = useState(true);
  const navigation = useNavigation();

  return (
    <View>
      <StatusBar style="dark" />
      <LinearGradient colors={["#FCC54A", "#FECD5E"]}>
        <View style={styles.container}>
          <View style={styles.header}>
            <TouchableOpacity style={styles.backBtn} onPress={()=>{navigation.goBack();}}>
              <MCIcon
                name="arrow-left"
                color="#ffffff"
                iconStyle={{ marginRight: 10 }}
                size={35}
              />
            </TouchableOpacity>
          </View>
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

  header: {
    width: "10%",
    height: "10%",
    alignSelf: "flex-start",
    justifyContent: "flex-end",
  },
});
