import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image
} from "react-native";

import { Ionicons } from '@expo/vector-icons';
import { useEffect } from "react";
import { TouchableHighlight } from "react-native-gesture-handler";
import { useDispatch } from "react-redux";
import { addToFavorites } from "../../redux/reducers";

const ProductItem = ({ item, navigation, width, onRemove, isFavorite }) => {
  const [selectedIndex, setSelectedIndex] = useState(null);
  const dispatch = useDispatch();

  const handleAddToFavorite = (item) => {
    dispatch(addToFavorites(item));
  }

  return (
    <View
      style={{
        width: width ? "" : "48%",
        marginBottom: width ? 0 : 20,
        marginHorizontal: width ? 30 : 0,
      }}
    >
      <TouchableOpacity
        onPress={() => {
          if (!onRemove) {
            navigation.navigate("productScreen", {
              productId: item.id
            });
          }
        }}
        style={{
          position: "relative"
        }}
      >
        <Image
          source={item.image}
          style={{
            width: "100%",
            height: 194
          }}
        />
        {
          onRemove
          ? <View
            style={{
              position: "absolute",
              left: "86%",
            }}
          >
            <TouchableHighlight
              onPress={() => {
                onRemove(item.id);
              }}
            >
              <Ionicons
                name={"close-outline"}
                size={25}
                color="#BDBDBD"
              />
            </TouchableHighlight>
          </View>
          : null
        }
        {
          item.inStock === false
          ? <View
            style={{
              position: "absolute",
              top: "50%",
              backgroundColor: "rgba(255, 255, 255, 0.6)",
              paddingVertical: 16,
              width: "100%",
              alignItems: "center"
            }}
          >
            <Text
              style={{
                color: "#333",
                fontWeight: "600"
              }}
            >Sold Out</Text>
          </View>
          : null
        }
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
            handleAddToFavorite(item);
          }}
        >
          <Ionicons
            name={isFavorite ? "heart" : "heart-outline"}
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
        {item.company || item.brand}
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
      {
        item.size
        ? <View
          style={{
            flexDirection: "row",
            alignItems: "flex-end"
          }}
        >
          <Text style={{
            color: "#bdbdbd",
            fontWeight: "600"
          }}>
            Size:
          </Text>
          <Text
            style={{
              color: "#333",
              fontSize: 12,
              marginLeft: 4
            }}
          >
            {item.size}
          </Text>
        </View>
        : null
      }
    </View>
  );
};

export default ProductItem;