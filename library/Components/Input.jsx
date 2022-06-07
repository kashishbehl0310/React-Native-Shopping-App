import React, { useState } from "react";
import {
  TextInput,
  Text,
  View
} from "react-native";

const Input = ({ label, styles, password, onChange, errMessage, ...props }) => {
  const [isFocused, setIsFocused] = useState(props.value ? true : false);
  const labelStyles = {
    position: "absolute",
    left: 16,
    top: isFocused || props.value ? 4 : "34%",
    fontSize: isFocused || props.value ? 11 : 14,
    color: errMessage ? "#f90000" : "#828282",
    zIndex: 999
  }
  return (
    <View style={[{
      width: "100%"
    }, styles]}>
      <Text
        style={labelStyles}
      >
        {label}
      </Text>
      <TextInput
        {...props}
        secureTextEntry={password}
        style={{
          padding: 22,
          fontSize: 14,
          color: '#000',
          backgroundColor: "#f2f2f2",
          borderWidth: errMessage ? 1 : 0,
          borderColor: errMessage ? "#f90000" : "transparent"
        }}
        onFocus={() => {
          setIsFocused(true);
        }}
        onBlur={() => {
          setIsFocused(false);
        }}
        onChangeText={(e) => {
          onChange(e);
        }}
      />
      {
        errMessage
        ? <Text
          style={{
            color: "#f90000",
            marginTop: 4
          }}
        >
        {
          errMessage
        }
        </Text>
        : null
      }
    </View>
  );
}

export { Input };