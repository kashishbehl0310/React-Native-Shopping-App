import React from "react";
import {
  View, Text, TouchableOpacity
} from "react-native";
import {
  Ionicons
} from "@expo/vector-icons";

const PageHeader = ({ navigation, title }) => {
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "flex-start",
        paddingHorizontal: 16,
        paddingVertical: 10,
        borderBottomWidth: 1,
        borderBottomColor: "#eee"
      }}
    >
      <TouchableOpacity
        onPress={() => {
          navigation.goBack()
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
          {title}
        </Text>
      </View>
    </View>
  );
}

export default PageHeader;
