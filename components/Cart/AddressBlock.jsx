import React from "react";
import {
  View, Text, TouchableOpacity
} from "react-native";
import {
  Checkbox
} from "../../library"
// import address from "../../data/address";

const Addressblock = ({ address, editMode, handleCheckboxSelect, ...props }) => {
  return (
    <View
      style={{
        backgroundColor: "#f2f2f2",
        paddingVertical: 18,
        paddingHorizontal: 28,
        marginTop: 20
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
            fontSize: 14,
            color: "#333",
            fontWeight: "500"
          }}
        >
          {address.name}
        </Text>
        <TouchableOpacity
          onPress={() => {
            if (editMode) {
              props.navigation.navigate('address-form', {
                address
              });
            } else {
              props.navigation.navigate("address");
            }
          }}
        >
          <Text
            style={{
              color: "#828282",
              fontWeight: "400"
            }}
          >
            {
              editMode ? "Edit" : "Change"
            }
          </Text>
        </TouchableOpacity>
      </View>
      <View
        style={{
          marginTop: 8
        }}
      >
        <Text
          style={{
            color: "#333",
            fontSize: 14,
            fontWeight: "500"
          }}
        >
          {address.houseno}
          &nbsp;{address.line1}
        </Text>
        <Text
          style={{
            color: "#333",
            fontSize: 14,
            fontWeight: "500",
            marginTop: 4
          }}
        >
          {address.line2}
        </Text>
      </View>
      {
        editMode ? 
        <View
          style={{
            marginTop: 14
          }}
        >
           <Checkbox
            color="#ff8c00"
            labelColor="#333"
            label={"Set as the default shipping option"}
            value={false}
            checked={address.default}
            reverse={true}
            onPress={() => {
              handleCheckboxSelect(address.id);
            }}
            labelStyles={{
              marginLeft: 12,
              color: "#333",
              fontSize: 14
            }}
          />
        </View>
        : null
      }
    </View>
  )
}

export default Addressblock;
