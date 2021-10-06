import React from "react";
import {
  NavigationContainer
} from "@react-navigation/native";
import {
  createStackNavigator
} from "@react-navigation/stack";
import { SignIn } from "../screens";
import LinkingConfiguration from "./LinkingConfiguration";
import BottomTabNavigator from "./BottomTabNavigator";

const Stack = createStackNavigator();

const RootNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen
        name="Root"
        component={BottomTabNavigator}
      ></Stack.Screen>
      <Stack.Screen
        name="SignIn"
        component={SignIn}
        options={{ title: 'Oops!' }}
      ></Stack.Screen>
    </Stack.Navigator>
  )
}

const Navigation = () => {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
    >
      <RootNavigator />
    </NavigationContainer>
  )
}

export default Navigation;