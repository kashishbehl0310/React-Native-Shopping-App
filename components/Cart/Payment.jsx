import React from "react";
import {
  Text, View, Image, TouchableOpacity
} from "react-native";

const mastercard = require("../../assets/images/mastercard.png")

const Payment = (props) => {
  return (
    <View
      style={{
        marginVertical: 32
      }}
    >
      <Text
        style={{
          color: "#222",
          fontSize: 16,
          fontWeight: "600",
          textTransform: "uppercase"
        }}
      >Payment</Text>
      <View
        style={{
          backgroundColor: "#f2f2f2",
          paddingVertical: 22,
          paddingHorizontal: 24,
          flexDirection: "row",
          justifyContent: "space-between",
          paddingRight: 24,
          marginTop: 20
        }}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center"
          }}
        >
          <Image
            source={mastercard}
            resizeMode="cover"
          />
          <Text
            style={{
              color: "#333",
              fontSize: 14,
              marginLeft: 10
            }}
          >
            **** **** **** 1234
          </Text>
        </View>
        <View>
          <TouchableOpacity
            onPress={() => {
              props.navigation.navigate("payment-methods")
            }}
          >
            <Text
              style={{
                color: "#828282",
                fontSize: 14
              }}
            >
              Change
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

export default Payment;