import React from "react";
import {
  View, Text
} from "react-native";
import {
  SliderBox
} from "react-native-image-slider-box";

const Slider = () => {
  const images = [
    require("../../assets/images/product_image/1.png"),
    require("../../assets/images/product_image/2.png"),
    require("../../assets/images/product_image/3.png"),
    require("../../assets/images/product_image/4.png")
  ];
  return (
    <View
      style={{
        marginTop: 0
      }}
    >
      <SliderBox
        images={images}
        sliderBoxHeight={400}
        dotColor="#FF8C00"
        resizeMethod={"resize"}
        resizeMode={"contain"}
        inactiveDotColor={"#f2f2f2"}
        paginationBoxStyle={{
          position: "absolute",
          bottom: -30,
          padding: 0,
          alignItems: "center",
          alignSelf: "center",
          justifyContent: "center",
          paddingVertical: 10,
        }}
      />
    </View>
  );
}

export default Slider;
