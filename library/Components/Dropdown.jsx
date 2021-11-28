import React from "react";
import {
  View,
  Text
} from "react-native";

import ModalDropdown from 'react-native-modal-dropdown';

import {
  Ionicons
} from "@expo/vector-icons";

const Dropdown = ({
  style,
  list,
  title,
  textStyle,
  dropdownStyle
}) => {
  return (
    <View>
      <ModalDropdown
        options={list}
        dropdownStyle={{
          backgroundColor: "#f2f2f2",
          ...style
        }}
        renderRow={(data) => (
          <View
            style={{
              paddingHorizontal: 16,
              paddingVertical: 10
            }}
          >
            <Text
              style={{
                fontSize: 12,
                color: "#333",
                fontWeight: "600"
              }}
            >
              {data.title}
            </Text>
          </View>
        )}
        dropdownStyle={{
          backgroundColor: "#f2f2f2",
          minWidth: 150
        }}
      >
        <View
          style={{
            ...dropdownStyle
          }}
        >
          <Text
            style={textStyle}
            >
            {title}
          </Text>
          <View
            style={{
              marginLeft: 30
            }}
          >
            <Ionicons
              name="chevron-down-outline"
              size={18}
              color="#333"
            />
            </View>
          </View>
      </ModalDropdown>
    </View>
  );
}

export { Dropdown };