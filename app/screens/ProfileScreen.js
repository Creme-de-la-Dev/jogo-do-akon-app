// React
import React from "react";

// React Native Components
import { View, Text, StyleSheet, TouchableOpacity, Alert } from "react-native";

// Icons
import Ionicon from "react-native-vector-icons/Ionicons";

// React Navigation
import { useNavigation } from "@react-navigation/native";

export default ProfileScreen = () => {
  const navigation = useNavigation();

  // Logging the user out
  const logout = () => {
    navigation.navigate("Login");
  };

  return (
    <View>
      <View style={styles.header}>
        <View style={styles.userImage}>
          <Text style={styles.userNamePic}>GC</Text>
        </View>
        <Text style={styles.userTitle}>Guilherme Chan</Text>
        <Text style={styles.userEmail}>guilhermechan@gmail.com</Text>
        <TouchableOpacity style={styles.editButton}>
          <Ionicon name={"create"} size={22} />
          <Text style={styles.editButtonText}>Editar</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.container}>
        <View style={styles.userStatsContainer}>
          <View style={{ flexDirection: "row" }}>
            <Ionicon name={"checkmark-circle"} size={22} />
            <Text style={styles.userStatsText}>Vitórias:</Text>
          </View>
          <Text style={styles.userStatsNumber}>32</Text>
        </View>
        <View style={styles.userStatsContainer}>
          <View style={{ flexDirection: "row" }}>
            <Ionicon name={"close-circle"} size={22} />
            <Text style={styles.userStatsText}>Derrotas:</Text>
          </View>
          <Text style={styles.userStatsNumber}>11</Text>
        </View>
        <View style={styles.userStatsContainer}>
          <View style={{ flexDirection: "row" }}>
            <Ionicon name={"trophy"} size={22} />
            <Text style={styles.userStatsText}>
              Record de vitórias seguidas:
            </Text>
          </View>
          <Text style={styles.userStatsNumber}>7</Text>
        </View>
      </View>
      <TouchableOpacity style={styles.logoutButton}
        onPress={() =>
          Alert.alert("Atenção", "Deseja sair da sua conta?", [
            {
              text: "Cancelar",
              onPress: () => null,
              style: "cancel",
            },
            { text: "Sair", onPress: logout },
          ])
        }
      >
        <Text style={styles.logoutButtonText}>Sair</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignSelf: "center",
    width: "100%",
    marginLeft: 5,
    marginRight: 5,
    marginTop: 45,
  },

  header: {
    height: "58%",
    width: "100%",
    backgroundColor: "#f9dfa2",
    // borderBottomLeftRadius: "300px",
    // borderBottomRightRadius: "300px",
    padding: 10,
    alignItems: "center",
  },

  userImage: {
    marginTop: 5,
    borderRadius: 50,
    width: 100,
    height: 100,
    alignSelf: "center",
    justifyContent: "center",
    backgroundColor: "#f7f0e1",
  },

  userNamePic: {
    textAlign: "center",
    fontSize: 35,
    fontWeight: "600",
  },

  userTitle: {
    fontWeight: "600",
    fontSize: 25,
    marginTop: 10,
  },

  userEmail: {
    fontSize: 16,
    marginTop: 10,
    marginBottom: 10,
    color: "#79797c",
  },

  editButton: {
    marginTop: 15,
    backgroundColor: "#f7f0e1",
    padding: 15,
    borderRadius: 50,
    flexDirection: "row",
    justifyItems: "center",
    alignItems: "center",
  },

  editButtonText: {
    fontSize: 16,
    fontWeight: "700",
    paddingLeft: 5,
  },

  userStatsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignContent: "center",
    margin: 10,
  },

  userStatsText: {
    fontSize: 20,
    marginLeft: 5,
  },

  userStatsNumber: {
    fontSize: 20,
    fontWeight: "bold",
  },

  logoutButton: {
    marginTop: 60,
    backgroundColor: "#f9dfa2",
    padding: 15,
    borderRadius: 50,
    flexDirection: "row",
    justifyItems: "center",
    alignSelf: "center",
  },

  logoutButtonText: {
    fontSize: 16,
    fontWeight: "700",
    paddingLeft: 25,
    paddingRight: 25,
    alignSelf: "center",
    textAlign: "center",
  },
});
