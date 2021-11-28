import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  FlatList
} from "react-native";
import SafeAreaView from "react-native-safe-area-view";
import { Ionicons } from "@expo/vector-icons";

import Slider from "../components/ProductPage/Slider";
import {
  Dropdown
} from "../library";
import ProductItem from "../components/ProductItem";
import data from "../data/products";

const styles = {
  dropdownStyle: {
    borderColor: "#e0e0e0",
    borderRadius: 4,
    paddingHorizontal: 16,
    paddingVertical: 16,
    borderWidth: 1,
    flexDirection: "row"
  },
  textStyle: {
    color: "#333"
  }
}

const Product = (props) => {
  const colorList = [
    { title: "Black", value: "black" },
    {title: "White", value: "white"},
    {title: "Red", value: "red"},
    {title: "Blue", value: "blue"}
  ];
  const sizeList = [
    { title: "XS", value: "xs" },
    {title: "S", value: "s"},
    {title: "M", value: "m"},
    {title: "L", value: "l"},
    {title: "XL", value: "xl"}
  ];

  return (
    <SafeAreaView>
      <View
        style={{
          backgroundColor: "#fff"
        }}
      >
        <ScrollView>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "flex-start",
              paddingHorizontal: 16,
              paddingVertical: 10,
            }}
          >
            <TouchableOpacity
              onPress={() => {
                props.navigation.goBack();
              }}
            >
              <Ionicons
                name="chevron-back-outline"
                size={18}
                color="#333"
              />
            </TouchableOpacity>
            <View
              style={{
                width: "90%",
                justifyContent: "center",
                alignItems: "center"
              }}
            >
              <Text
                style={{
                  fontSize: 17,
                  fontWeight: "600",
                  color: "#333"
                }}
              >
                T-shirts
              </Text>
            </View>
          </View>
          <Slider />
          {/* <Text>lahfaljflahl</Text> */}
          <View
            style={{
              marginTop: 60,
              flexDirection: "row",
              justifyContent: "space-between",
              paddingHorizontal: 20
            }}
          >
            <View
              style={{
                width: "45%"
              }}
            >
              <Dropdown
                list={colorList}
                title={"Select Color"}
                style={{
                  borderColor: "#484848"
                }}
                dropdownStyle={styles.dropdownStyle}
                textStyle={styles.textStyle}
              />
              </View>
              <View
              style={{
                width: "45%"
              }}
            >
              <Dropdown
                list={sizeList}
                title={"Select Size"}
                style={{
                  borderColor: "#484848"
                }}
                dropdownStyle={styles.dropdownStyle}
                textStyle={styles.textStyle}
              />
              </View>
          </View>
          <View
            style={{
              paddingVertical: 18,
              paddingHorizontal: 16
            }}
          >
            <Text
              style={{
                fontSize: 13,
                color: "#4f4f4f",
                textAlign: "left"
              }}
            >
              Sometimes life feels like a carnival, lots of ups and downs and 360 spins, maybe a few bumps along the way. With this in mind, Marcelo Burlon County of Milan presents this black cotton bumper car print T-shirt. Enjoy the ride! Featuring a ribbed crew neck, short sleeves, a graphic print and a straight fit.
            </Text>
          </View>
          <View
            style={{
              paddingHorizontal: 16
            }}
          >
            <Text
              style={{
                color: "#222",
                fontSize: 16,
                fontWeight: "600",
                textTransform: "uppercase"
              }}
            >You can also like this</Text>
          </View>
          <View
            style={{
              marginTop: 14
            }}
          >
            <FlatList
              data={data}
              horizontal={true}
              keyExtractor={(item) => item.id}
              showsHorizontalScrollIndicator={false}
              renderItem={({item}) => {
                return (
                  <ProductItem
                    key={item.id}
                    item={item}
                    navigation={props.navigation}
                    width={"40%"}
                  />
                )
              }}
            />
          </View>
        </ScrollView>
        <View
          style={{
            position: "absolute",
            bottom: 0,
            padding: 16,
            backgroundColor: "#f2f2f2",
            width: "100%"
          }}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between"
            }}
          >
            <Text
              style={{
                color: "#333",
                fontSize: 14,
                fontWeight: "600",
                width: "70%"
              }}
            >MARCELO BURLON COUNTY OF MILAN</Text>
            <Text>$240.00</Text>
          </View>
          <View
            style={{
              marginTop: 20,
              flexDirection: "row"
            }}
          >
            <TouchableOpacity
              style={{
                paddingVertical: 10,
                backgroundColor: "#FF8C00",
                width: "85%"
              }}
            >
              <Text
                style={{
                  color: "#fff",
                  fontWeight: "700",
                  fontSize: 16,
                  textTransform: "uppercase",
                  textAlign: "center"
                }}
              >Add To Bag</Text>
            </TouchableOpacity>
            <View
              style={{
                backgroundColor: "#fff",
                width: "15%",
                justifyContent: "center",
                alignItems: "center"
              }}
            >
              <Ionicons
                name="heart-outline"
                size={30}
                color={"#dadada"}
              />
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

export default Product;