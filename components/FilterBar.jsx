import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity
} from "react-native";
import ModalDropdown from 'react-native-modal-dropdown';

import { Ionicons } from "@expo/vector-icons";

const DEMO_OPTIONS_2 = [
  {"title": "Popular", "value": "popular"},
  {"title": "Newest", "value": "newest"},
  {"title": "Price - Low to High", "value": "inc"},
  {"title": "Price - High to Low", "vaelu": "dec"},
];

const FilterBar = (props) => {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: 16,
        paddingVertical: 10
      }}
    >
      <ModalDropdown
        options={DEMO_OPTIONS_2}
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
        renderSeparator={() => (
          <View
            style={{
              borderBottomColor: "#f2f2f2"
            }}
          ></View>
        )}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center"
          }}
        >
          <Text
            style={styles.textStyles}
          >Recommended
          </Text>
          <View
            style={{
              marginLeft: 10
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
      <View
      >
        <TouchableOpacity
          onPress={() => {
            props.navigation.navigate('filters', {
              screen: "filters-home",
              params: {
                category: props.category
              }
            });
          }}
          style={styles.textStyles}>
          <Text>Filters</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  textStyles: {
    color: "#333",
    fontWeight: "600",
    fontSize: 14,
    textTransform: "uppercase"
  }
})

export default FilterBar;
