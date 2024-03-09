import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ScreenIndicators } from "../components/ScreenIndicators";
import PrimaryButton from "../components/PrimaryButton";
import { RootStackScreenProps } from "../navigators/MainNavigator";
import { INTRO_SCREEN_03 } from "../utils/constants";

export const Onboarding3 = ({
  navigation,
}: RootStackScreenProps<"Onboarding3">) => {
  return (
    <View style={styles.container}>
      <SafeAreaView>
        <View style={styles.textSlide}>
          <Text>{INTRO_SCREEN_03.title}</Text>
          <Text>{INTRO_SCREEN_03.description}</Text>
        </View>
        <View style={styles.buttonContainer}>
          <PrimaryButton
            label="Back"
            onPress={() => navigation.replace("Onboarding1")}
            style={styles.backButton}
          />
          <PrimaryButton
            label="Next"
            onPress={() => navigation.replace("Home")}
            style={styles.nextButton}
          />
        </View>
        <ScreenIndicators
          count={3}
          activeIndex={1}
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
  backButton: {
    flex: 1,
    marginRight: 5,
  },
  nextButton: {
    flex: 1,
    marginLeft: 5,
  },
});
