// React
import React, { useContext } from 'react';

// React Native Components
import { View, Text, StyleSheet } from 'react-native';

export default PlayScreen = () => {

    return (
        <View style={styles.container}>
            <Text>PlayScreen</Text>
        </View>
    );
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        justifyContent: 'center',
        alignSelf: 'center',
    }
});
