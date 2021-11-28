import React, {
  useEffect,
  useState
} from "react";
import {
  SafeAreaView,
  View, Text,
  StyleSheet,
  FlatList,
  ScrollView
} from "react-native";

import CategoryPageHeader from "../components/Categories/CategoryHeader";
import ProductItem from "../components/ProductItem";
import productType from "../data/productType";
import FilterBar from "../components/FilterBar";

const CategoryType = (props) => {
  const [products, setProducts] = useState([]);
  const {
    navigation,
    route
  } = props;
  const {
    initRoute,
    category
  } = route.params;

  useEffect(() => {
    const p = productType[category.name.toLowerCase()];
    // console.log(p);
    setProducts(p.products);
  }, []);

  return (
    <SafeAreaView>
      <CategoryPageHeader props={props} />
      <FilterBar
        navigation={navigation}
        category={category}
        route={route}
      />
      <View
        style={{
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <Text
          style={{
            color: "#bdbdbd"
          }}
        >3,571 styles found</Text>
      </View>
      <ScrollView
        style={styles.productsList}
      >
        <FlatList
          data={products}
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
                navigation={navigation}
              />
            )
          }}
        />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  productsList: {
    width: "100%",
    marginTop: 10,
    paddingHorizontal: 16
  }
})

export default CategoryType;