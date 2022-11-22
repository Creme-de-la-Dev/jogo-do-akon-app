// React
import React, { useState, useRef, createRef } from "react";

// React Native Components
import { View, StyleSheet, FlatList, Animated } from "react-native";

// Expo
import { StatusBar } from "expo-status-bar";

// Components
import OnboardingItem from "../../src/onboarding/OnboardingItem";
import Paginator from "../../src/onboarding/Paginator";
import NextButton from "../../src/onboarding/NextButton";
import slides from "../../src/onboarding/Slides";

// React Navigation
import { useNavigation } from "@react-navigation/native";

export default Onboarding = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollX = useRef(new Animated.Value(0)).current;
  const slidesRef = createRef(useState(null));

  const navigation = useNavigation();

  const viewableItemsChanged = useRef(({ viewableItems }) => {
    setCurrentIndex(viewableItems[0].index);
  }).current;

  // const viewConfig = useRef({ viewAreaCoveragePercentThreshold: 50 }).current;

  const scrollTo = async () => {
    if (currentIndex < slides.length - 1) {
      slidesRef.current.scrollToIndex({ index: currentIndex + 1 });
    } else {
      try {
        // await AsyncStorage.setItem("@viewedOnboarding", "true");
        navigation.navigate("BottomNavigator");
      } catch (err) {
        console.log("Error @setItem:", err);
      }
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <View style={{ flex: 3 }}>
        <FlatList
          data={slides}
          renderItem={({ item }) => <OnboardingItem item={item} />}
          horizontal
          showsHorizontalScrollIndicator={false}
          pagingEnabled
          bounces={false}
          keyExtractor={(item) => item.id}
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { x: scrollX } } }],
            {
              useNativeDriver: false,
            }
          )}
          scrollEventThrottle={32}
          onViewableItemsChanged={viewableItemsChanged}
          // viewabilityConfig={viewConfig}
          ref={slidesRef}
        />
      </View>

      <Paginator data={slides} scrollX={scrollX} />

      <NextButton
        scrollTo={scrollTo}
        percentage={(currentIndex + 1) * (100 / slides.length)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    // backgroundColor: "#4CB9D6",
    // backgroundColor: "#a08340",
    backgroundColor: "#1c1506",
  },
});
