import React from "react";
import {
  View,
  TouchableOpacity
} from "react-native";

import { createBottomTabNavigator, BottomTabBar } from "@react-navigation/bottom-tabs";
import {
  createStackNavigator
} from "@react-navigation/stack"
import { Ionicons } from '@expo/vector-icons'; 

import {
  Home, SignIn, Product, CategoryType, Filters
} from "../screens";

import CategoryTabNavigator from "./CategoryTabNavigator";

const BottomTab = createBottomTabNavigator();

const TabBarCustomButton = ({accessibilityState, children, onPress}) => {
  var isSelected = accessibilityState.selected;
  return (
    <TouchableOpacity
      style={{
        flex: 1,
        height: 60,
        borderTopColor: isSelected ? "#ff8c00" : "#fff",
        borderTopWidth: "4px"
      }}
      activeOpacity={1}
      onPress={onPress}>
      {children}
    </TouchableOpacity>
  )
};

const CustomTabBar = (props) => {
  return (
    <View>
      <View
        style={{
          position: 'absolute',
          bottom: 0,
          right: 0,
          left: 0,
          height: 30,
          backgroundColor: '#fff',
        }}
      />
      <BottomTabBar {...props.props} />
    </View>
  );
};

const BottomTabNavigator = () => {
  return (
    <BottomTab.Navigator
      initialRouteName="Home"
      tabBarOptions={{ 
        activeTintColor: "#ff8c00",
      }}
      tabBar={(props) => <CustomTabBar props={props} />}
    >
      <BottomTab.Screen
        name="Home"
        component={HomeNavigator}
        options={{
          tabBarButton: (props) => <TabBarCustomButton {...props} />,
          tabBarIcon: ({ color }) => <Ionicons name="home-outline" size={30} color={color} style={{ marginBottom: -3 }} />
        }}
      ></BottomTab.Screen> 
      <BottomTab.Screen
        name="Search"
        component={CategoryNavigator}
        options={{
          tabBarButton: (props) => <TabBarCustomButton {...props} />,
          tabBarIcon: ({ color }) => <Ionicons name="search" size={30} color={color} style={{ marginBottom: -3 }} />
        }}
      ></BottomTab.Screen>
      <BottomTab.Screen
        name="Wishlist"
        component={Home}
        options={{
          tabBarButton: (props) => <TabBarCustomButton {...props} />,
          tabBarIcon: ({ color }) => <Ionicons name="heart-outline" size={30} color={color} style={{ marginBottom: -3 }} />
        }}
      ></BottomTab.Screen> 
      <BottomTab.Screen
        name="Settings"
        component={SignIn}
        options={{
          tabBarButton: (props) => <TabBarCustomButton {...props} />,
          tabBarIcon: ({ color }) => <Ionicons name="settings-outline" size={30} color={color} style={{ marginBottom: -3 }} />
        }}
      ></BottomTab.Screen>
    </BottomTab.Navigator>
  )
}

const HomeStackNavigator = createStackNavigator();
const CategoryStackNavigator = createStackNavigator();

function HomeNavigator() {
  return (
    <HomeStackNavigator.Navigator
      screenOptions={{ headerShown: false }}
    >
      <HomeStackNavigator.Screen
        name="main"
        component={Home}
        options={{ headerTitle: 'Home' }}
      />
      <HomeStackNavigator.Screen
        name="productScreen"
        component={Product}
        options={{ headerTitle: 'Product' }}
      />
    </HomeStackNavigator.Navigator>
  );
}

function CategoryNavigator() {
  return (
    <CategoryStackNavigator.Navigator
      screenOptions={{
        headerShown: false
      }}
    >
      <CategoryStackNavigator.Screen
        name="category-main"
        component={CategoryTabNavigator}
      />
      <CategoryStackNavigator.Screen
        name="category-individual"
        component={CategoryType}
      />
      <CategoryStackNavigator.Screen
        name="category-filters"
        component={Filters}
      />
    </CategoryStackNavigator.Navigator>
  );
}

export default BottomTabNavigator;
