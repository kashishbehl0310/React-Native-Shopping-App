import React from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
} from "react-native";

const CategoryTile = (props) => {
  const {
    navigation,
    route,
    category
  } = props;
  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate('category-individual', {
          category,
          initRoute: route
        });
      }}
      key={category.id}
      style={{
        flexDirection: "row",
        marginVertical: 16
      }}
    >
      <View
        style={{
          width: "50%",
          backgroundColor: "#f5f5f5",
          justifyContent: "center",
          paddingHorizontal: 40
        }}
      >
        <Text
          style={{
            fontSize: 15,
            color: "#333",
            fontWeight: "600",
            textTransform: "uppercase"
          }}
        >{category.name}</Text>
      </View>
      <View
        style={{
          width: "50%",
          backgroundColor: "blue"
        }}
      >
          <Image
          source={category.image}
          style={{
            height: 130,
            width: "100%"
          }}
          />
      </View>
    </TouchableOpacity>
  );
}

export default CategoryTile;
