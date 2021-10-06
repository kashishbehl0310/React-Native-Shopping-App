import React from "react";
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

const {
  width,
  height
} = Dimensions.get("window");

import homeBanner from "../assets/images/homeBanner.png";
import data from "../data/products";
import ProductItem from "../components/ProductItem";

const Home = ({ navigation }) => {
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
          <FlatList
            data={data}
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