import React from "react";
import {
  View,
  Text,
  SafeAreaView
} from "react-native";
import Addressblock from "../components/Cart/AddressBlock";
import Payment from "../components/Cart/Payment";
import PageHeader from "../components/PageHeader";
import DeliveryMethod from "../components/Cart/DeliveryMethod";
import OrderSummary from "../components/Cart/OrderSummary";
import { TouchableOpacity } from "react-native-gesture-handler";
import address from "../data/address";

const Checkout = (props) => {
  return (
    <SafeAreaView
      style={{
        backgroundColor: "#fff",
        height: "100%"
      }}
    >
      <PageHeader
        navigation={props.navigation}
        title={"Checkout"}
      />
      <View
        style={{
          padding: 16,
          justifyContent: "space-between",
          height: "94%"
        }}
      >
        <View>
          <View>
            <Text
              style={{
                color: "#333",
                fontSize: 16,
                fontWeight: "600",
                textTransform: "uppercase"
              }}
            >
              Shipping Address
            </Text>
          </View>
          <View>
            <Addressblock
              navigation={props.navigation}
              address={address[0]}
            />
            <Payment
              navigation={props.navigation}
            />
            <DeliveryMethod />
          </View>
        </View>
        <View>
          <OrderSummary />
          <TouchableOpacity
            style={{
              backgroundColor: "#ff8c00",
              paddingVertical: 16,
              width: "100%",
              marginTop: 12
            }}
            onPress={() => {
              props.navigation.navigate("processing-order");
            }}
          >
            <Text
              style={{
                color: "#fff",
                textTransform: "uppercase",
                fontWeight: "bold",
                fontSize: 16,
                textAlign: "center"
              }}
            >Place Order</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

export default Checkout;
