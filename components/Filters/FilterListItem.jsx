import React from "react";
import {
  View,
  Text,
  TouchableOpacity
} from "react-native";

const FIlterListItem = ({ filter, category, ...props }) => {
  return (
    <View
      style={{
        borderBottomColor: "#f2f2f2",
        borderBottomWidth: 1
      }}
    >
      <TouchableOpacity
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          paddingHorizontal: 16,
          paddingVertical: 22
        }}
        onPress={() => {
          props.navigation.navigate('filter-individual', {
            category: category,
            initRoute: props.route,
            filterSelected: filter
          });
        }}
      >
        <Text
          style={{
            fontSize: 16,
            color: "#333",
            fontWeight: "600",
            textTransform: "capitalize"
          }}
        >
          {filter}
        </Text>
        <Text>
          All
        </Text>
      </TouchableOpacity>
    </View>
  );
}

export default FIlterListItem;