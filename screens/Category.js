import React from "react";
import {
  View, Text,
  SafeAreaView,
  Image,
  ScrollView
} from "react-native";
import { SafeAreaProvider } from 'react-native-safe-area-context';
import productCategories from "../data/productCategoris";
import CategoryTile from "../components/Categories/CategoryTile";

const Category = (props) => {
  const { route } = props;
  return (
    <SafeAreaProvider
      style={{
        backgroundColor: "#fff"
      }}
    >
      <ScrollView
        style={{
          padding: 10
        }}
      >
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            paddingVertical: 25,
            paddingHorizontal: 70,
            backgroundColor: "#2D9CDB"
          }}
        >
          <Text
            style={{
              fontSize: 24,
              color: "#fff",
              fontWeight: "600"
            }}
          >
            Mid Season Sale
          </Text>
          <Text
            style={{
              fontSize: 14,
              color: "#fff",
              marginTop: 5
            }}
          >
            Up to 50% off
          </Text>
        </View>
        {
          productCategories.map(category => {
            return (
              <CategoryTile
                key={category.id}
                category={category}
                navigation={props.navigation}
                route={props.route}
              />
            )
          })
        }
      </ScrollView>
    </SafeAreaProvider>
  );
}

export default Category;
