import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image
} from "react-native";

import { Ionicons } from '@expo/vector-icons';
import { useEffect } from "react";

const ProductItem = ({ item, navigation }) => {
  const [selectedIndex, setSelectedIndex] = useState(null);
  useEffect(() => {
    console.log(selectedIndex);
  }, [selectedIndex]);
  return (
    <View
      style={{
        width: "48%",
        marginBottom: 20
      }}
    >
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("productScreen");
        }}
      >
        <Image
          source={item.image}
          style={{
            width: "100%",
            height: 194
          }}
        />
      </TouchableOpacity>
      <View
        style={{
          justifyContent: "space-between",
          flexDirection: "row",
          alignItems: "center",
          marginTop: 8
        }}
      >
        <Text
          style={{
            fontSize: 14,
            color: "#333",
            fontWeight: "600"
          }}
        >
          ${item.price}
        </Text>
        <TouchableOpacity
          onPress={() => {
            console.log(item.id, " ", selectedIndex)
            setSelectedIndex(item.id);
          }}
        >
          <Ionicons
            name={item.id === selectedIndex ? "heart" : "heart-outline"}
            size={25}
            color="#FF8C00"
          />
        </TouchableOpacity>
      </View>
      <Text
        style={{
          fontSize: 14,
          fontWeight: "500",
          color: "#828282"
        }}
      >
        {item.company}
      </Text>
      <Text
        style={{
          fontSize: 14,
          fontWeight: "500",
          color: "#333",
          lineHeight: 20
        }}
      >
        {item.name}
      </Text>
    </View>
  );
};

export default ProductItem;