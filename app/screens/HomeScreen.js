// React
import React, { useContext } from 'react';

// React Native Components
import { View, Text, StyleSheet } from 'react-native';

// Expo
import { StatusBar } from "expo-status-bar";


export default HomeScreen = () => {

    return (
        <View style={{flex: 1}}>
            <StatusBar style="dark" />
            <View style={styles.header}>
                <Text style={styles.headerText}>Seja bem-vindo(a) {"\n"}
                    ao JOGO.
                </Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({

    header: {
        marginTop: 30,
        marginLeft: 30,
    },

    headerText: {
        fontSize: 26,
        fontWeight: 'bold',
    },

});
