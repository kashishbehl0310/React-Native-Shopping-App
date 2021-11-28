import React from "react";
import {
  View,
  Text,
  Image,
  TouchableWithoutFeedback
} from "react-native";

const DeliveryMethodIndivdual = ({ item, ondeliverySelect, selected }) => {
  return (
    <TouchableWithoutFeedback
      onPress={() => {
        ondeliverySelect(item.id);
      }}
    >
      <View
        style={{
          backgroundColor: "#f2f2f2",
          paddingHorizontal: 20,
          paddingVertical: 16,
          width: "30%",
          alignItems: "center",
          borderColor: selected === item.id ? "#ff8c00" : "",
          borderWidth: selected === item.id ? 1 : ""
        }}
        >
        <Image
          source={item.image}
          height={20}
          />
        <Text
          style={{
            marginTop: 12,
            color: "#828282"
          }}
          >
          {item.time}
        </Text>
      </View>
    </TouchableWithoutFeedback>
  );
}

export default DeliveryMethodIndivdual;