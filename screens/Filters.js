import React from "react";
import {
  View, Text,
  SafeAreaView,
  Image,
  ScrollView
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import FilterHeader from "../components/Filters/FilterHeader";
import SliderFilter from "../components/Filters/SliderFilter";

const Filters = (props) => {
  const { route } = props;
  return (
    <SafeAreaView>
      <FilterHeader
        props={props}
      />
      <View
        style={{
          justifyContent: "space-between",
          height: "95%"
        }}
      >
        <SliderFilter />
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            width: "100%"
          }}
        >
          <TouchableOpacity
            style={{
              width: 162,
              borderWidth: 2,
              borderColor: "#828282",
              paddingVertical: 10,
              height: 50,
              alignItems: "center",
              justifyContent: "center"
            }}
          >
            <Text
              style={{
                fontSize: 16,
                color: "#828282",
                lineHeight: 20,
                fontWeight: "600"
              }}
            >
              Clear
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              width: 162,
              borderWidth: 2,
              borderColor: "#FF8C00",
              paddingVertical: 10,
              height: 50,
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "#FF8C00",
              marginLeft: 20
            }}
          >
            <Text
              style={{
                color: "#fff",
                fontSize: 16,
                lineHeight: 20,
                fontWeight: "600"
              }}
            >
              Apply
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

export default Filters;
