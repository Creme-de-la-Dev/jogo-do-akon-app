// React
import React, { useContext } from "react";

// React Native Components
import { View, Text, StyleSheet, Button, TouchableOpacity } from "react-native";

// Icons
import Ionicon from "react-native-vector-icons/Ionicons";
import MCIcons from "react-native-vector-icons/MaterialCommunityIcons";

export default ProfileScreen = () => {
  return (
    <View>
      <View style={styles.header}>
        <View style={styles.userImage}>
          <Text style={styles.userNamePic}>GC</Text>
        </View>
        <Text style={styles.userTitle}>Guilherme Chan</Text>
        <Text style={styles.userEmail}>guilhermechan@gmail.com</Text>
        <TouchableOpacity style={styles.editButton} >
          <Ionicon name={"create"} size={16}/>
          <Text style={styles.editButtonText}>Editar</Text>
        </TouchableOpacity>
      </View>
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
    height: "65%",
    width: "100%",
    backgroundColor: "#f9dfa2",
    borderBottomLeftRadius: "300px",
    borderBottomRightRadius: "300px",
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
  },
  
  editButtonText: {
    fontSize: 16,
    fontWeight: "700",
    paddingLeft: 5,
  },

});
