import React from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import { MainNavigator } from "./src/navigators/MainNavigator";
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <NavigationContainer>
        <MainNavigator />
      </NavigationContainer>
      <StatusBar
        style="auto"
        backgroundColor="rgb(227, 241, 242)"
        translucent={true}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgb(191, 201, 202)",
  },
});
