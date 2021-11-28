import { Ionicons } from "@expo/vector-icons";
import React from "react";
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  TouchableOpacity
} from "react-native";
import { useState } from "react/cjs/react.development";
import Addressblock from "../components/Cart/AddressBlock";
import PageHeader from "../components/PageHeader";
import address from "../data/address";

const ShippingAddress = (props) => {
  const [addressList, setAddressList] = useState(address);
  return (
    <SafeAreaView
      style={{
        backgroundColor: "#fff",
        height: "100%"
      }}
    >
      <PageHeader
        navigation={props.navigation}
        title={"Shipping Addresses"}
      />
      <ScrollView>
        <View
          style={{
            padding: 16
          }}
        >
          {addressList.map((a, index) => (
            <Addressblock
              address={a}
              key={index}
              editMode={true}
              navigation={props.navigation}
              handleCheckboxSelect={(id) => {
                let addressListCopy = [...addressList];
                addressListCopy.map(c => {
                  if (c.id === id) {
                    c.default = !c.default;
                  } else {
                    c.default = false;
                  }
                  return {
                    ...c
                  };
                });
                setAddressList(addressListCopy);
              }}
            />
          ))}
        </View>
      </ScrollView>
      <View
        style={{
          position: "absolute",
          bottom: 10,
          right: 16
        }}
      >
        <TouchableOpacity
          style={{
            backgroundColor: "#ff8c00",
            padding: 8,
            borderRadius: 50,
            justifyContent: "center",
            alignItems: "center",
            width: 44,
            height: 44,
          }}
          onPress={() => {
            // props.navigation.navigate('Home', { screen: 'address-form' });
            props.navigation.navigate("address-form");
          }}
        >
          <Ionicons
            name={"add-outline"}
            color={"#fff"}
            size={28}
          />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

export default ShippingAddress;