import React, { useEffect, useState } from "react";
import {
  View, Text, SafeAreaView, FlatList, ScrollView
} from "react-native";
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { useDispatch, useSelector } from "react-redux";
// import { useState } from "react/cjs/react.development";

import PageHeader from "../components/PageHeader";
import ProductItem from "../components/ProductItem";
import ProductsLoader from "../components/ProductPage/ProductsLoader";
import favorites from "../data/favorites";
import { favoritesLoading, fetchFavorites, removeFromFavorites } from "../redux/reducers";

const Favorites = (props) => {
  // const [favoritesData, setFavorites] = useState(favorites);
  const loading = useSelector(state => state.favorites.isLoading);
  const favorites = useSelector(state => state.favorites.favorites);
  const dispatch = useDispatch();

  const fetchData = async () => {
    try {
      await dispatch(fetchFavorites())
    } catch (err) {
      alert(err);
    }
  }

  const handleRemoveFromFavorites = (id) => {
    dispatch(removeFromFavorites(id));
  }

  useEffect(() => {
    dispatch(favoritesLoading());
    setTimeout(() => {
      fetchData();
    }, 3000);
  }, []);

  return (
    <SafeAreaView
    >
      <PageHeader
        navigation={props.navigation}
        title={"Favorites"}
      />
      {
        favorites.length === 0
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
            {favorites.length} Items
          </Text>
        </View>
        <ScrollView
          style={{
            paddingHorizontal: 16
          }}
        >
          {
            loading
            ? <View
              style={{
                flexWrap: "wrap",
                flexDirection: "row",
                justifyContent: "space-between"
              }}
            >
              {
                [1,2,3,4].map(s => (
                  <ProductsLoader key={s} />
                ))
              }
            </View>
            : <View>
              {
                favorites.length === 0
                ? <View>
                    <Text>
                      This Section is Empty
                    </Text>
                  </View>
                  : <FlatList
                  data={favorites}
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
                        isFavorite={true}
                        onRemove={(id) => {
                          handleRemoveFromFavorites(id);
                          // const favoritesCopy = [...favorites];
                          // const filteredFav = favoritesCopy.filter(item => item.id !== id);
                          // setFavorites(filteredFav);
                        }}
                      />
                    )
                  }}
                />
              }
            </View>
          }
        </ScrollView>
      </View>
      }
    </SafeAreaView>
  )
};

export default Favorites;