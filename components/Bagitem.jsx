import React from "react";
import {
  View,
  Text,
  Image
} from "react-native";
import ModalDropdown from 'react-native-modal-dropdown';
import {
  Ionicons
} from "@expo/vector-icons";

const DEMO_OPTIONS_2 = [
  {"title": "Move to favorites", "value": "favorite"},
  {"title": "Delete", "value": "delete"},
];

const Bagitem = ({ item, orderScreen }) => {
  return (
    <View
      style={{
        borderColor: "#e0e0e0",
        borderWidth: 1,
        marginBottom: 14,
        flexDirection: "row"
      }}
    >
      <Image
        source={item.image}
        style={{
          width: 104,
          height: 144
        }}
      />
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          width: "70%"
        }}
      >
        <View
          style={{
            paddingVertical: 14,
            paddingHorizontal: 12
          }}
        >
          <Text
            style={{
              fontSize: 14,
              color: "#333",
              textTransform: "uppercase",
              fontWeight: "500"
            }}
          >
            {item.brand}
          </Text>
          <Text
            style={{
              marginTop: 5
            }}
          >
            {item.name}
          </Text>
          <View
            style={{
              flexDirection: orderScreen ? "row" : "column",
              justifyContent: orderScreen ? "space-between" : "flex-start",
              width: "120%"
            }}
          >
            <Text
              style={{
                marginTop: 5,
                color: "#828282", width:"50%"
              }}
              >Color: <Text style={{color: "#333", textTransform: "capitalize"}}>{item.color}</Text></Text>
            <Text
              style={{
                marginTop: 5,
                color: "#828282",
                width: "50%"
              }}
              >Size: <Text style={{color: "#333", textTransform: "uppercase", }}>{item.size}</Text></Text>
          </View>
          <View
            style={{
              flexDirection: orderScreen ? "row" : "column",
              justifyContent: orderScreen ? "space-between" : "flex-start",
              width: "120%"
            }}
          >
            <Text
              style={{
                marginTop: 5,
                color: "#828282",
                width:"50%"
              }}
              >Quantity: <Text style={{color: "#333", textTransform: "uppercase"}}>{item.quantity}</Text></Text>
            <Text
              style={{
                marginTop: 8,
                fontSize: 14,
                color: "#333",
                fontWeight: "600",
                width:"50%"
              }}
              >${item.price}</Text>
          </View>
        </View>
        {
          orderScreen
          ? null
          : <ModalDropdown
            options={DEMO_OPTIONS_2}
            renderRow={(data) => (
              <View
                style={{
                  paddingHorizontal: 16,
                  paddingVertical: 10
                }}
              >
                <Text
                  style={{
                    fontSize: 12,
                    color: "#333",
                    fontWeight: "600"
                  }}
                >
                  {data.title}
                </Text>
              </View>
            )}
            dropdownStyle={{
              backgroundColor: "#f2f2f2",
              minWidth: 150
            }}
            renderSeparator={() => (
              <View
                style={{
                  borderBottomColor: "#f2f2f2"
                }}
              ></View>
            )}
          >
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                paddingVertical: 16
              }}
            >
              <Ionicons
                name={"ellipsis-vertical-outline"}
                color={"#eee"}
                size={24}
              />
            </View>
          </ModalDropdown>
        }
      </View>
    </View>
  )
}

export default Bagitem;