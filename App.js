import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {
  createAppContainer, createSwitchNavigator
} from "react-navigation";
import { createDrawerNavigator } from 'react-navigation-drawer';

import { createStackNavigator } from "react-navigation-stack";

import Main from "./src/Screens/Main";
import SignIn from "./src/Screens/Signin";
import SignUp from './src/Screens/SignUp';
import Home from './src/Screens/Home/Home';
import Category from './src/Screens/Category/Category';

export default function App() {
  return (
      <AppContainer />
  );
}

const HomeStackNavigator = createStackNavigator({
  Home: {
    screen: Home,
    navigationOptions: ({ navigation }) => ({
      title: 'Home',
      headerStyle: {
        backgroundColor: '#377dff',
        shadowColor: 'transparent',
        color: "#fff"
      },
      headerTitleStyle: {
        color: "white"
      },
    })
  },
  Category: {
    screen: Category,
    navigationOptions: ({ navigation }) => ({
      title: navigation.state.params.name,
      headerTitleStyle: {
        color: "white"
      },
      headerStyle: {
        backgroundColor: "#377dff"
      },
    })
  }
});

const HomeDrawerNavogtor = createDrawerNavigator(
  {
    Home: {
      screen: HomeStackNavigator
    }
  }
);

const AppSwitchNavigator = createSwitchNavigator({
  Main: {
    screen: Main,
  },
  SignIn: {
    screen: SignIn,
  },
  SignUp: {
    screen: SignUp,
  },
  Home: {
    screen: HomeDrawerNavogtor,
  }
}, {
  initialRouteParams: 'Main',
})

const AppContainer = createAppContainer(AppSwitchNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingRight: 30,
    paddingLeft: 30
  },
});
