// React
import React, { useContext } from "react";

// React Native Components
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { Card, Button, Icon } from "@rneui/themed";
import { useNavigation } from "@react-navigation/native";

// Images
const ClassicMode = require("../../assets/classicMode.jpeg");
const CoopMode = require("../../assets/coopMode.png");
const VersusMode = require("../../assets/versus.png");
const BattleRoyale = require("../../assets/battleRoyale.png");
const AkonCalypse = require("../../assets/akoncalypse.jpeg");

// Icons
import MCIcon from "react-native-vector-icons/MaterialCommunityIcons";

export default LocalMatch = () => {
  const navigation = useNavigation();

  const navigateToClassicMatch = () => {
    navigation.navigate("ClassicPlayerSelection");
  };

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
            De 3 a 8 jogadores, descubra qual de vocês é o verdadeiro Akon e
            cante como se não houvesse amanhã!
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
            titleStyle={{ fontWeight: "bold", marginLeft: 10 }}
            onPress={() => navigateToClassicMatch()}
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
            Junte-se em duplas e descubra qual dupla é o Akon e o Sean Kingston
            antes que seja tarde demais!
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
            titleStyle={{ fontWeight: "bold", marginLeft: 10 }}
          />
        </Card>
        <Card
          containerStyle={{
            borderRadius: 10,
            borderColor: "#fbd276",
            borderWidth: 2,
          }}
        >
          <Card.Title style={styles.cardTitle}>Modo Versus</Card.Title>
          <Card.Divider />
          <Card.Image
            style={{ padding: 0, borderRadius: 10 }}
            source={VersusMode}
          />
          <Text style={styles.cardText}>
            Akon vs Fifty, quem será o vencedor? Quem fizer mais vítimas até o
            fim da partida será vitorioso!
          </Text>
          <Button
            icon={
              <MCIcon
                name="lock"
                color="#ffffff"
                iconStyle={{ marginRight: 10 }}
                size={28}
              />
            }
            buttonStyle={[styles.cardButton, { backgroundColor: "#939385" }]}
            title="Adiquira a versão PRO"
            titleStyle={{ fontWeight: "bold", marginLeft: 10 }}
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
            De 20 a 100 jogadores, seja o último a sobreviver ou seja o Akon que
            ganhe de todo mundo!
          </Text>
          <Button
            icon={
              <MCIcon
                name="lock"
                color="#ffffff"
                iconStyle={{ marginRight: 10 }}
                size={28}
              />
            }
            buttonStyle={[styles.cardButton, { backgroundColor: "#939385" }]}
            title="Adiquira a versão PRO"
            titleStyle={{ fontWeight: "bold", marginLeft: 10 }}
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
          <Card.Title style={styles.cardTitle}>AkonCalypse</Card.Title>
          <Card.Divider />
          <Card.Image
            style={{ padding: 0, borderRadius: 10 }}
            source={AkonCalypse}
          />
          <Text style={styles.cardText}>
            Reuna todas as pessoas de no mínimo 5 bairros de seu estado e escolha apenas um desses para ser o Akon.
            O Akon deve eliminar o máximo de pessoas em um período de 14 dias e não pode ser detido por ninguém.
            Este modo faz muito sucesso em chácaras!
          </Text>
          <Button
            icon={
              <MCIcon
                name="lock"
                color="#ffffff"
                iconStyle={{ marginRight: 10 }}
                size={28}
              />
            }
            buttonStyle={[styles.cardButton, { backgroundColor: "#939385" }]}
            title="Adiquira a versão PRO"
            titleStyle={{ fontWeight: "bold", marginLeft: 10 }}
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
