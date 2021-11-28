import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { SafeAreaView, Text, TouchableOpacity, View } from "react-native";

const Success = (props) => {
  return (
    <SafeAreaView
      style={{
        backgroundColor: "#fff",
        height: "100%",
        justifyContent: "center",
        alignItems: "center"
      }}
    >
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          width: "60%"
        }}
      >
        <Ionicons
          name="checkmark-circle-outline"
          color={"#ff8c00"}
          size={80}
        />
        <Text
          style={{
            color: "#333",
            marginTop: 18,
            fontSize: 22,
            fontWeight: "600"
          }}
        >
          Order Complete
        </Text>
        <Text
          style={{
            marginTop: 16,
            color: "#333"
          }}
        >
          Order Id is <Text style={{ fontWeight: "bold" }}>#658367</Text>
        </Text>
        <Text
          style={{
            textAlign: "center",
            marginTop: 4
          }}
        >
          Please check the delivery status at Order Tracker Page
        </Text>
      </View>
      <View
        style={{
          width: "100%",
          padding: 16
        }}
      >
        <TouchableOpacity
          onPress={() => {
            props.navigation.navigate('Home', { screen: 'main' });
          }}
          style={{
            paddingVertical: 16,
            backgroundColor: "#ff8c00",
            justifyContent: "center",
            alignItems: "center",
            width: "100%"
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
            Continue Shopping
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

export default Success;