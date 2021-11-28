import React from "react";
import {
  View,
  Text,
  StyleSheet
} from "react-native";

const OrderSummary = () => {
  return (
    <View>
      <View
        style={stylesheet.summaryRow}
      >
        <Text style={stylesheet.leftText}>Order:</Text>
        <Text style={stylesheet.rightText}>190.00$</Text>
      </View>
      <View
         style={stylesheet.summaryRow}
      >
        <Text style={stylesheet.leftText}>Delivery:</Text>
        <Text style={stylesheet.rightText}>15.00$</Text>
      </View>
      <View
        style={stylesheet.summaryRow}
      >
        <Text style={stylesheet.leftText}>Summary:</Text>
        <Text style={stylesheet.leftText}>------------------------------</Text>
        <Text style={stylesheet.total}>205.00$</Text>
      </View>
    </View>
  );
}

const stylesheet = StyleSheet.create({
  summaryRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 14
  },
  leftText: {
    color: "#828282",
    fontSize: 14,
    fontWeight: "500"
  },
  rightText: {
    color: "#333",
    fontSize: 14,
    fontWeight: "500"
  },
  total: {
    color: "#333",
    fontSize: 16,
    fontWeight: "600"
  }
})

export default OrderSummary;
