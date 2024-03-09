import React from "react";
import { Text, StyleSheet, SafeAreaView, View } from "react-native";
import { RootStackScreenProps } from "../navigators/MainNavigator";
import { INTRO_SCREEN_01 } from "../utils/constants";
import { ScreenIndicators } from "../components/ScreenIndicators";
import PrimaryButton from "../components/PrimaryButton";

export const Onboarding1 = ({
  navigation,
}: RootStackScreenProps<"Onboarding1">) => {
  return (
    <View style={styles.container}>
      <SafeAreaView>
        <View style={styles.textSlide}>
          <Text>{INTRO_SCREEN_01.title}</Text>
          <Text>{INTRO_SCREEN_01.description}</Text>
        </View>
        <View style={styles.buttonContainer}>
          <PrimaryButton
            label="Next"
            onPress={() => navigation.replace("Onboarding2")}
            style={styles.nextButton}
          />
        </View>
        <ScreenIndicators
          count={3}
          activeIndex={0}
        />
      </SafeAreaView>
    </View>
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
  indicators: {
    marginBottom: 10,
  },
});
