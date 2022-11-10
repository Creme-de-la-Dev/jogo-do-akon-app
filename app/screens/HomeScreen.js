// React
import React, { useContext } from "react";

// React Native Components
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { Card, Button, Icon } from "@rneui/themed";

// Expo
import { StatusBar } from "expo-status-bar";

// Images
const GameplayImage = require("../../assets/gameplay.png");
const ProVersionImage = require("../../assets/pro.jpeg");

export default HomeScreen = () => {
  return (
    <ScrollView style={{ flex: 1 }}>
      <StatusBar style="dark" />
      <View style={styles.header}>
        <Text style={styles.headerText}>
          Seja bem-vindo(a) {"\n"}
          ao JOGO.
        </Text>
      </View>
      <View style={styles.mainSection}>
        <Card
          containerStyle={{
            borderRadius: 10,
            borderColor: "#fbd276",
            borderWidth: 2,
          }}
        >
          <Card.Title style={styles.cardTitle}>Como Jogar?</Card.Title>
          <Card.Divider />
          <Card.Image
            style={{ padding: 0, borderRadius: 10 }}
            source={GameplayImage}
          />
          <Text style={styles.cardText}>
            Aprenda as regras e vire um "expert" no jogo mais amado do mundo!
          </Text>
          <Button
            icon={
              <Icon
                name="school"
                color="#ffffff"
                iconStyle={{ marginRight: 10 }}
              />
            }
            buttonStyle={styles.cardButton}
            title="Aprender as Regras"
            titleStyle={{ fontWeight: "bold" }}
          />
        </Card>
        <Card
          containerStyle={{
            borderRadius: 10,
            borderColor: "#fbd276",
            borderWidth: 2,
            marginBottom: 50,
          }}
        >
          <Card.Title style={styles.cardTitle}>Versão PRO</Card.Title>
          <Card.Divider />
          <Card.Image
            style={{ padding: 0, borderRadius: 10, resizeMode: "stretch"}}
            source={ProVersionImage}
          />
          <Text style={styles.cardText}>
            Adiquira a Versão PRO por apenas R$ 2,99 e desbloqueie novas formas de jogar!
          </Text>
          <Button
            icon={
              <Icon
                name="info"
                color="#ffffff"
                iconStyle={{ marginRight: 10 }}
              />
            }
            buttonStyle={styles.cardButton}
            title="Saiba Mais"
            titleStyle={{ fontWeight: "bold" }}
          />
        </Card>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  header: {
    paddingTop: 30,
    paddingLeft: 25,
  },

  headerText: {
    fontSize: 28,
    fontWeight: "bold",
  },

  mainSection: {
    paddingTop: 30,
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
    padding: 15,
    backgroundColor: "#2176AE",
  }
});
