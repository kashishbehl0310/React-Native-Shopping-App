import React, { useEffect } from "react";
import {
  View, Text,
  ScrollView
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { SafeAreaProvider } from 'react-native-safe-area-context';

import productCategories from "../data/productCategoris";

import CategoryTile from "../components/Categories/CategoryTile";
import { fetchCategories } from "../redux/reducers";

const Category = (props) => {
  const { route } = props;
  const dispatch = useDispatch();
  const handleFetchCategories = () => {
    dispatch(fetchCategories());    
  }
  const {
    categories,
    error,
    loading
  } = useSelector(state => state.categories);

  useEffect(() => {
    handleFetchCategories();
  }, [route]);

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
          loading
            ? <Text>Loading</Text>
            : <>
              {
                categories && categories.length > 0
                  ? <>
                    {
                      categories.map(category => {
                        return (
                          <CategoryTile
                            key={category}
                            category={productCategories.find(p => p.name === category)}
                            navigation={props.navigation}
                            route={props.route}
                          />
                        )
                      })
                    }
                  </>
                  : null
              }
            </>
        }
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
