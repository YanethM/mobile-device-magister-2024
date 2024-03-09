import React from "react";
import {
  NativeStackScreenProps,
  createNativeStackNavigator,
} from "@react-navigation/native-stack";
import { Onboarding1 } from "../screens/Onboarding1";
import { Onboarding2 } from "../screens/Onboarding2";
import { Onboarding3 } from "../screens/Onboarding3";
import { Home } from "../screens/Home";

export type ObjectScreens = {
  Onboarding1: undefined;
  Onboarding2: undefined;
  Onboarding3: undefined;
  Home: undefined;
};

const rootStack = createNativeStackNavigator<ObjectScreens>();

export type RootStackScreenProps<T extends keyof ObjectScreens> =
  NativeStackScreenProps<ObjectScreens, T>;

export const MainNavigator = () => {
  return (
    <rootStack.Navigator initialRouteName="Onboarding1">
      <rootStack.Group>
        <rootStack.Screen
          name="Onboarding1"
          component={Onboarding1}
          options={{ headerShown: false, animation: "fade" }}
        />
        <rootStack.Screen
          name="Onboarding2"
          component={Onboarding2}
          options={{ headerShown: false, animation: "fade" }}
        />
        <rootStack.Screen
          name="Onboarding3"
          component={Onboarding3}
          options={{ headerShown: false, animation: "fade" }}
        />
        <rootStack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false, animation: "fade" }}
        />
      </rootStack.Group>
    </rootStack.Navigator>
  );
};
