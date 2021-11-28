import React from "react";
import {
  View,
  Text,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
  ScrollView
} from "react-native";
import bagItems from "../data/bagItems";
import PageHeader from "../components/PageHeader";
import Bagitem from "../components/Bagitem";

const Cart = (props) => {
  return (
    <SafeAreaView
      style={{
        backgroundColor: "#fff",
      }}
    >
      <View
        style={{
          paddingHorizontal: 16,
          height: "100%"
        }}
      >
        <View
          style={{
            paddingVertical: 16
          }}
        >
          <Text
            style={{
              fontSize: 34,
              color: "#333",
              fontWeight: "800"
            }}
          >
            My Bag
          </Text>
        </View>
        <ScrollView>
          <FlatList
            data={bagItems}
            keyExtractor={(item) => item.id}
            renderItem={({item}) => {
              return (
                <Bagitem
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
        </ScrollView>
        <View
          style={{
            position: "absolute",
            bottom: 0,
            paddingVertical: 24,
            width: "105%",
            paddingLeft: 16,
            backgroundColor: "#fff"
          }}
        >
          <View
            style={{
              flexDirection: "row",
              width: "100%",
              justifyContent: "space-between",
              marginBottom: 20
            }}
          >
            <Text
              style={{
                color: "#333",
                fontSize: 14,
                textTransform: "uppercase",
                fontWeight: "600"
              }}
            >
              Total
            </Text>
            <Text
              style={{
                color: "#333",
                fontSize: 14,
                textTransform: "uppercase",
                fontWeight: "600"
              }}
            >
              $630.90
            </Text>
          </View>
          <TouchableOpacity
            style={{
              color: "#fff",
              backgroundColor: "#FF8C00",
              paddingVertical: 16,
              alignItems: "center"
            }}
            onPress={() => {
              props.navigation.navigate("checkout");
            }}
          >
            <Text
              style={{
                color: "#fff",
                textTransform: "uppercase",
                fontSize: 16,
                fontWeight: "600"
              }}
            >
              Checkout
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

export default Cart;