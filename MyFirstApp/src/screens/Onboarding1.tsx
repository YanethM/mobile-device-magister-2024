import React from "react";
import { Text, StyleSheet, SafeAreaView, View } from "react-native";
import { INTRO_SCREEN_01 } from "../utils/constants";
import PrimaryButton from "../components/PrimaryButton";
import { ScreenIndicators } from "../components/ScreenIndicators";

export const Onboarding1 = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.textSlide}>
        <Text>{INTRO_SCREEN_01.title}</Text>
        <Text>{INTRO_SCREEN_01.description}</Text>
      </View>
      <View style={styles.buttonContainer}>
        <PrimaryButton
          label="Next"
          onPress={() => navigation.navigate("Onboarding2")}
          style={styles.nextButton}
        />
        <ScreenIndicators
          count={3}
          activeIndex={1}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  textSlide: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  nextButton: {
    flex: 1,
    marginHorizontal: 5,
  },
});
