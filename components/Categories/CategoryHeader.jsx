import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
} from "react-native";

import { Ionicons } from "@expo/vector-icons";

const CategoryPageHeader = ({ props }) => {
  const {
    navigation,
    route
  } = props;
  const {
    initRoute,
    category
  } = route.params;
  return (
    <View
      style={{
        flexDirection: "row",
        marginBottom: 10,
        alignItems: "center",
        justifyContent: "space-between",
        paddingHorizontal: 16,
        borderBottomColor: "lightgrey",
        borderBottomWidth: 1,
        paddingBottom: 10
      }}
    >
      <TouchableOpacity
        onPress={() => {
          props.navigation.goBack();
        }}
      >
        <Ionicons
          name="chevron-back-outline"
          size={18}
          color="#333"
        />
      </TouchableOpacity>
      <Text
        style={{
          fontSize: 17,
          fontWeight: "600",
          color: "#333"
        }}
      >
        {initRoute.name}'s {category.name}
      </Text>
      <Ionicons
          name="search-outline"
          size={18}
          color="#333"
        />
    </View>
  );
}

export default CategoryPageHeader;