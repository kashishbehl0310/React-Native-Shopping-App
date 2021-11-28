import React from "react";
import {
  TouchableHighlight,
  View,
  Image,
  Text
} from "react-native";

const Checkbox = ({
  onPress,
  checked,
  label,
  labelColor,
  color,
  reverse,
  labelStyles
}) => {
  return (
    <TouchableHighlight
      onPress={() => {
        onPress();
      }}
      underlayColor={"transparent"}
    >
      <View
        style={{
          flexDirection: reverse ? "row-reverse" : "row",
          alignItems: "center",
          justifyContent: reverse ? "flex-end" : "space-between",
        }}
      >
        <Text
          style={[{
            fontSize: 18,
            color: labelColor
          }, labelStyles]}
        >
          {label}
        </Text>
        <View
          style={{
            padding: 1,
            width: 20,
            height: 20,
            backgroundColor: checked ? color : "#bdbdbd",
            borderRadius: 4
          }}
        >
          {
            checked
              ? <View
                style={{
                  flex: 1,
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: 4
                }}
              >
                <Image
                  source={require("../../assets/images/tick.png")}
                  style={{
                    width: "85%",
                    height: "85%",
                    tintColor: "#fff",
                    resizeMode: "contain"
                  }}
                />
              </View>
              : <View
                style={{
                  flex: 1,
                  backgroundColor: "#fff",
                  borderRadius: 4
                }}
              ></View>
          }
        </View>
      </View>
    </TouchableHighlight>
  );
}

export default Checkbox;