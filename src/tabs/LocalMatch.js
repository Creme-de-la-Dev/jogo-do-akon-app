// React
import React, { useContext } from "react";

// React Native Components
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { Card, Button, Icon } from "@rneui/themed";

// Images
const ClassicMode = require("../../assets/classicMode.jpeg");
const CoopMode = require("../../assets/coopMode.png");
const BattleRoyale = require("../../assets/battleRoyale.png");

// Icon
import MCIcon from "react-native-vector-icons/MaterialCommunityIcons";

export default LocalMatch = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.mainSection}>
        <Card
          containerStyle={{
            borderRadius: 10,
            borderColor: "#fbd276",
            borderWidth: 2,
          }}
        >
          <Card.Title style={styles.cardTitle}>Modo Clássico</Card.Title>
          <Card.Divider />
          <Card.Image
            style={{ padding: 0, borderRadius: 10, marginBottom: 20 }}
            source={ClassicMode}
          />
          <Button
            icon={
              <MCIcon
                name="controller-classic"
                color="#ffffff"
                iconStyle={{ marginRight: 10 }}
                size={25}
                
              />
            }
            buttonStyle={styles.cardButton}
            title="Jogar"
            titleStyle={{ fontWeight: "bold" }}
          />
        </Card>
        <Card
          containerStyle={{
            borderRadius: 10,
            borderColor: "#fbd276",
            borderWidth: 2,
          }}
        >
          <Card.Title style={styles.cardTitle}>Modo Co-op</Card.Title>
          <Card.Divider />
          <Card.Image
            style={{ padding: 0, borderRadius: 10, resizeMode: "stretch", marginBottom: 20 }}
            source={CoopMode}
          />
          {/* <Text style={styles.cardText}>
            Adiquira a Versão PRO por apenas R$ 2,99 e desbloqueie novas formas
            de jogar!
          </Text> */}
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
        <Card
          containerStyle={{
            borderRadius: 10,
            borderColor: "#fbd276",
            borderWidth: 2,
            marginBottom: 20,
          }}
        >
          <Card.Title style={styles.cardTitle}>Battle Royale</Card.Title>
          <Card.Divider />
          <Card.Image
            style={{ padding: 0, borderRadius: 10, marginBottom: 20 }}
            source={BattleRoyale}
          />
          {/* <Text style={styles.cardText}>
            Aprenda as regras e vire um "expert" no jogo mais amado do mundo!
          </Text> */}
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
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignSelf: "center",
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
    backgroundColor: "#158c25",
  },
});
