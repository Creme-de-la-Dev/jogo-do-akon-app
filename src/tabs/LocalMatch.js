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
            style={{ padding: 0, borderRadius: 10 }}
            source={ClassicMode}
          />
          <Text style={styles.cardText}>
            De 3 a 10 jogadores, descubra quem de vocês é o verdadeiro Akon e cante como se não houvesse amanhã!
          </Text>
          <Button
            icon={
              <MCIcon
                name="controller-classic"
                color="#ffffff"
                iconStyle={{ marginRight: 10 }}
                size={28}
              />
            }
            buttonStyle={styles.cardButton}
            title="Jogar"
            titleStyle={{ fontWeight: "bold", marginLeft: 10, }}
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
            style={{ padding: 0, borderRadius: 10, resizeMode: "stretch" }}
            source={CoopMode}
          />
          <Text style={styles.cardText}>
            Junte-se em duplas e descubra qual dupla é o Akon e o Sean Kingston antes que seja tarde demais!
          </Text>
          <Button
            icon={
              <MCIcon
                name="controller-classic"
                color="#ffffff"
                iconStyle={{ marginRight: 10 }}
                size={28}
              />
            }
            buttonStyle={styles.cardButton}
            title="Jogar"
            titleStyle={{ fontWeight: "bold", marginLeft: 10, }}
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
            style={{ padding: 0, borderRadius: 10 }}
            source={BattleRoyale}
          />
          <Text style={styles.cardText}>
            De 20 a 100 jogadores, seja o último a sobreviver ou seja o Akon que ganhe de todo mundo!
          </Text>
          <Button
            icon={
              <MCIcon
                name="controller-classic"
                color="#ffffff"
                iconStyle={{ marginRight: 10 }}
                size={28}
              />
            }
            buttonStyle={styles.cardButton}
            title="Jogar"
            titleStyle={{ fontWeight: "bold", marginLeft: 10, }}
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
    paddingTop: 15,
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
