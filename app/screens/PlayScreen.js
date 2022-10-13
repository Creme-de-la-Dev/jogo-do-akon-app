// React
import React, { useContext } from 'react';

// React Native Components
import { View, Text, StyleSheet } from 'react-native';

// Light and Dark mode toggle
import { ThemeContext } from "../../../theme/theme-context";

export default BoilerPlate = () => {

	const { theme } = useContext(ThemeContext);

    return (
        <View style={styles.container}>
            <Text>BoilerPlate</Text>
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