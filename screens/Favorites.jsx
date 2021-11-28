import React, { useState } from "react";
import {
  View, Text, SafeAreaView, FlatList, ScrollView
} from "react-native";
import { SafeAreaProvider } from 'react-native-safe-area-context';
// import { useState } from "react/cjs/react.development";

import PageHeader from "../components/PageHeader";
import ProductItem from "../components/ProductItem";
import favorites from "../data/favorites";

const Favorites = (props) => {
  const [favoritesData, setFavorites] = useState(favorites);
  return (
    <SafeAreaView
    >
      <PageHeader
        navigation={props.navigation}
        title={"Favorites"}
      />
      {
        favoritesData.length === 0
        ? <View
          style={{
            alignItems: "center",
            height: "100%",
            justifyContent: "center"
          }}
        >
          <Text>
            This Section is Empty
          </Text>
      </View>
      : <View>
          <View
          style={{
            marginVertical: 14
          }}
        >
          <Text
            style={{
              textAlign: "center",
              color: "#bdbdbd",
              fontSize: 14,
              fontWeight: "500"
            }}
          >
            {favoritesData.length} Items
          </Text>
        </View>
        <ScrollView
          style={{
            paddingHorizontal: 16
          }}
        >
          {
            favoritesData.length === 0
            ? <View>
                <Text>
                  This Section is Empty
                </Text>
            </View>
            : <FlatList
            data={favoritesData}
            keyExtractor={(item) => item.id}
            numColumns={2}
            columnWrapperStyle={{
              justifyContent: "space-between"
            }}
            renderItem={({item}) => {
              return (
                <ProductItem
                  key={item.id}
                  item={item}
                  navigation={props.navigation}
                  onRemove={(id) => {
                    const favoritesCopy = [...favoritesData];
                    const filteredFav = favoritesCopy.filter(item => item.id !== id);
                    setFavorites(filteredFav);
                  }}
                />
              )
            }}
          />
          }
        </ScrollView>
      </View>
      }
    </SafeAreaView>
  )
};

export default Favorites;