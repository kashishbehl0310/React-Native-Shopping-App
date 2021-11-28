import React from "react";
import {
  View, Text
} from "react-native";
import { useState } from "react/cjs/react.development";
import deliveryOptions from "../../data/deliverymethods";
import DeliveryMethodIndivdual from "./DeliveryMethodIndividual";

const DeliveryMethod = () => {
  const [deliverySelected, setDeliverySelected] = useState();
  return (
    <View>
      <Text
        style={{
          color: "#333",
          fontSize: 16,
          fontWeight: "900"
        }}
      >
        Delivery Method
      </Text>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          marginTop: 16
        }}
      >
        {
          deliveryOptions.map(d => (
            <DeliveryMethodIndivdual
              item={d}
              ondeliverySelect={(select) => {
                setDeliverySelected(select);
              }}
              selected={deliverySelected}
            />
          ))
        }
      </View>
    </View>
  );
}

export default DeliveryMethod;