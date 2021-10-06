import React from "react";
import {
  useSafeArea
} from "react-native-safe-area-view";
import {
  createMaterialTopTabNavigator
} from "@react-navigation/material-top-tabs";
import {
  View, Text
} from "react-native";

import {
  Category
} from "../screens/index";

const CategoryTabNavigator = (props) => {
  const safeArea = useSafeArea();
  const Tab = createMaterialTopTabNavigator();
  return (
    <View
      style={{
        flex: 1,
        paddingTop: safeArea.top
      }}
    >
      <Tab.Navigator
        tabBarOptions={{
          indicatorStyle: {
            backgroundColor: "#ff8c00",
            height: 4
          },
          activeTintColor: "#ff8c00",
          inactiveTintColor: "#ccc"
        }}
        initialRouteName="Women"
      >
        <Tab.Screen
          name="Women"
          component={Category}
        ></Tab.Screen>
        <Tab.Screen
          name="Men"
          component={Category}
        ></Tab.Screen>
        <Tab.Screen
          name="Kids"
          component={Category}
        ></Tab.Screen>
      </Tab.Navigator>
    </View>
  );
}

export default CategoryTabNavigator;