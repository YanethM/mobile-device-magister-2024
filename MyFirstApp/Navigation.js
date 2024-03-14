import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import {
  createNativeStackNavigator,
} from "@react-navigation/native-stack";
import { Onboarding1 } from "./src/screens/Onboarding1";
import { Onboarding2 } from "./src/screens/Onboarding2";
import { Onboarding3 } from "./src/screens/Onboarding3";
import { HomeScreen } from "./src/screens/HomeScreen";
import { SettingsScreen } from "./src/screens/SettingsScreen";
import { StackScreen } from "./src/screens/StackScreen";
import { Ionicons } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const OnboardingStack = () => {
  return (
    <Stack.Navigator initialRouteName="Onboarding1">
      <Stack.Screen
        name="Onboarding1"
        component={Onboarding1}
        options={{ headerShown: false, animation: "fade" }}
      />
      <Stack.Screen
        name="Onboarding2"
        component={Onboarding2}
        options={{ headerShown: false, animation: "fade" }}
      />
      <Stack.Screen
        name="Onboarding3"
        component={Onboarding3}
        options={{ headerShown: false, animation: "fade" }}
      />
    </Stack.Navigator>
  );
};

const TabNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName="HomeScreen" // Establezca la pantalla inicial aquí
      screenOptions={{
        tabBarActiveTintColor: "rgb(0, 122, 255)",
        tabBarInactiveTintColor: "rgb(209, 209, 214)",
        tabBarStyle: {
          backgroundColor: "rgb(242, 242, 247)",
        },
        headerShown: false,
      }}
    >
      <Tab.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons
              name="home"
              size={size}
              color={color}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons
              name="settings"
              size={size}
              color={color}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Stack"
        component={StackScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons
              name="bookmark"
              size={size}
              color={color}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen
          name="OnboardingStack"
          component={OnboardingStack}
        />
        <Stack.Screen
          name="TabNavigator"
          component={TabNavigator}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
