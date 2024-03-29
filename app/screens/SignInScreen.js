// React
import React, { useContext } from "react";

// React Native Components
import { View, Text, StyleSheet, TextInput } from "react-native";
import { Card, Button, Icon, Input } from "@rneui/themed";
import { useNavigation } from "@react-navigation/native";

// Icons
import MCIcon from "react-native-vector-icons/MaterialCommunityIcons";

export default SignInScreen = () => {
  const navigation = useNavigation();

  const navigateToHome = () => {
    navigation.navigate("BottomNavigator");
  };

  return (
    <View style={styles.container}>
      <Card
        containerStyle={{
          borderRadius: 10,
          borderColor: "#fbd276",
          borderWidth: 5,
          height: "45%",
          // shadowColor: "#000",
          // shadowOffset: {
          //   width: 0,
          //   height: 2,
          // },
          // shadowOpacity: 0.25,
          // shadowRadius: 3.84,
          // elevation: 5,
        }}
      >
        <View>
          <TextInput
            style={styles.input}
            placeholder="Email"
            keyboardType="email-address"
            autoCapitalize="none"
          />
          <TextInput
            style={styles.input}
            placeholder="Senha"
            keyboardType="text"
            secureTextEntry={true}
            autoCapitalize="none"
          />
        </View>
        <Button
          buttonStyle={styles.cardButton}
          title="Entrar"
          titleStyle={{ fontWeight: "bold", marginLeft: 10 }}
          onPress={() => navigateToHome()}
        />
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignSelf: "center",
  },

  cardTitle: {
    fontSize: 20,
    fontWeight: "700",
    color: "#000000",
  },

  cardText: {
    marginBottom: 15,
    marginTop: 15,
    fontWeight: "500",
    alignSelf: "center",
  },

  cardButton: {
    borderRadius: 10,
    marginLeft: 0,
    marginRight: 0,
    marginBottom: 0,
    marginTop: 70,
    padding: 15,
    backgroundColor: "#FF8A00",
    width: 300,
  },

  input: {
    height: 50,
    marginVertical: 15,
    borderWidth: 1,
    padding: 15,
    width: "100%",
    borderRadius: 10,
    borderColor: "#fbd276",
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignSelf: "center",
  },

  cardTitle: {
    fontSize: 20,
    fontWeight: "700",
    color: "#000000",
  },

  cardText: {
    marginBottom: 15,
    marginTop: 15,
    fontWeight: "500",
    alignSelf: "center",
  },

  cardButton: {
    borderRadius: 10,
    marginLeft: 0,
    marginRight: 0,
    marginBottom: 0,
    marginTop: 70,
    padding: 15,
    backgroundColor: "#FF8A00",
    width: 300,
  },

  input: {
    height: 50,
    marginVertical: 15,
    borderWidth: 1,
    padding: 15,
    width: "100%",
    borderRadius: 10,
    borderColor: "#fbd276",
  },
});
