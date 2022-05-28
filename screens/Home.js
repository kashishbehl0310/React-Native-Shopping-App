import React, { useEffect } from "react";
import {
  View,
  StyleSheet,
  Image,
  Dimensions,
  Text,
  SafeAreaView,
  FlatList,
  ScrollView
} from "react-native";
import { useDispatch, useSelector } from "react-redux";

import { fetchProducts, loadingProducts } from "../redux/reducers";
import ProductItem from "../components/ProductItem";
import ProductsLoader from "../components/ProductPage/ProductsLoader";

import homeBanner from "../assets/images/homeBanner.png";

const {
  width,
  height
} = Dimensions.get("window");


const Home = ({ navigation }) => {
  const products = useSelector(state => state.products.products);
  const favorites = useSelector(state => state.favorites.favorites);
  console.log({
    favorites
  })
  const loading = useSelector(state => state.products.isLoading);
  const dispatch = useDispatch();

  const fetchData = async () => {
    try {
      await dispatch(fetchProducts())
    } catch (err) {
      alert(err);
    }
  }

  useEffect(() => {
    dispatch(loadingProducts());
    setTimeout(() => {
      fetchData();
    }, 3000);
  }, []);

  return (
    <SafeAreaView
      style={styles.container}
    >
      <View
        style={{
          height: height * 0.30,
          backgroundColor: "#484848"
        }}
      >
        <Image 
          source={homeBanner}
          resizeMode="cover"
          style={{
            width: '100%',
            height: "100%",
          }}
        />
        <View
          style={styles.imageBannerText}
        >
          <Text
            style={{
              color: "#fff",
              fontSize: 28,
              marginVertical: 5
            }}
          >Midseason Sale</Text>
          <Text
            style={{
              color: "#fff",
              fontSize: 24,
              fontWeight: "bold",
              textTransform: "uppercase"
            }}
          >50% off</Text>
        </View>
      </View>
      <View
        style={{
          paddingVertical: 20,
          alignItems: "center"
        }}
      >
        <Text
          style={{
            color: "#333",
            paddingVertical: 5,
            paddingTop: 0,
            fontSize: 24,
            fontWeight: "800",
            textTransform: "uppercase"
          }}
        >Winter Is Coming</Text>
        <Text
          style={{
            color: "#b2b2b2",
            fontSize: 15,
            fontWeight: "500"
          }}
        >Promo Code: WIN19</Text>
      </View>
      <ScrollView
        style={{
          paddingVertical: 20,
          paddingHorizontal: 16
        }}
      >
        <Text
          style={{
            color: "#333",
            fontSize: 22,
            fontWeight: "800"
          }}
        >NEW IN</Text>
        <View
          style={styles.productsList}
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
            : <>
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
                      isFavorite={favorites.filter(f => f.id === item.id).length > 0}
                    />
                  )
                }}
              />
            </>
          }
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  imageBannerText: {
    position: "absolute",
    bottom: 20,
    paddingHorizontal: 20
  },
  productsList: {
    width: "100%",
    marginTop: 10
  }
});

export default Home;