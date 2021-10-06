import React from "react";
import {
  View,
  Text,
  TouchableOpacity
} from "react-native";

import { Ionicons } from "@expo/vector-icons";

const FilterHeader = ({ props }) => {
  const {
    navigation,
    route
  } = props;
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "flex-start",
        paddingHorizontal: 16,
        borderBottomColor: "lightgrey",
        borderBottomWidth: 1,
        paddingBottom: 10,
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
      <View
        style={{
          width: "90%",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <Text
          style={{
            fontSize: 17,
            fontWeight: "600",
            color: "#333"
          }}
        >
          Filters
        </Text>
      </View>
      
    </View>
  )
}

export default FilterHeader;
