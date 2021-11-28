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
import ProcessingOrder from "../screens/ProcessingOrder";
import Login from "../screens/Login";
import ForgotPassword from "../screens/ForgotPassword";

const Stack = createStackNavigator();
const AuthStackNavigator = createStackNavigator();

function AuthNavigator() {
  return (
    <AuthStackNavigator.Navigator
      screenOptions={{ headerShown: false }}
    >
      <AuthStackNavigator.Screen
        name="sign-up"
        component={SignIn}
      />
      <AuthStackNavigator.Screen
        name="sign-in"
        component={Login}
      />
      <AuthStackNavigator.Screen
        name="forgot-password"
        component={ForgotPassword}
      />
    </AuthStackNavigator.Navigator>
  )
}

const RootNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen
        name="Root"
        component={AuthNavigator}
      ></Stack.Screen>
      <Stack.Screen
        name="Home"
        component={BottomTabNavigator}
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