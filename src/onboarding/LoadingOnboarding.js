import React from 'react';

import { View, ActivityIndicator, StyleSheet } from 'react-native';

import { useNavigation } from '@react-navigation/native';

const LoadingOnboarding = () => {

    const [loaded, setLoaded] = React.useState(false);
    React.useEffect(() => {
      setTimeout(() => {
        setLoaded(true);
      }, 200);
    }, []);

    const navigation = useNavigation();

    if (loaded == true) {
        navigation.navigate('Onboarding')
    }

    return (
        <View style={styles.container}>
            <ActivityIndicator size="large" />
        </View>
    )
  };

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center"
    },
  });

  export default LoadingOnboarding;
