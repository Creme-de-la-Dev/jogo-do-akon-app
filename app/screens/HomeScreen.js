// React
import React, { useContext } from 'react';

// React Native Components
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { Card, CardProps } from 'react-native-ui-lib';

// Expo
import { StatusBar } from "expo-status-bar";

// Images
const GameplayImage = require("../../assets/gameplay.png"); 


export default HomeScreen = () => {

    return (
        <ScrollView style={{flex: 1}}>
            <StatusBar style="dark" />
            <View style={styles.header}>
                <Text style={styles.headerText}>Seja bem-vindo(a) {"\n"}
                    ao JOGO.
                </Text>
            </View>
            <View style={styles.mainSection}>
                <Card
                    height={120}
                >
                <Card.Section imageSource={GameplayImage} imageStyle={{height: '100%'}}/>
                </Card>
            </View>

        </ScrollView>
    );
}

const styles = StyleSheet.create({

    header: {
        paddingTop: 30,
        paddingLeft: 30,
    },

    headerText: {
        fontSize: 28,
        fontWeight: 'bold',
    },

    mainSection: {
        flex: 1,
    }

});
