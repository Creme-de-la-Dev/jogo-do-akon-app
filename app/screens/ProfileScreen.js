// React
import React, { useContext } from 'react';

// React Native Components
import { View, Text, StyleSheet } from 'react-native';

export default ProfileScreen = () => {

    return (
        <View style={styles.container}>
            <Text>ProfileScreen</Text>
        </View>
    );
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        justifyContent: 'center',
        alignSelf: 'center'
    }
});