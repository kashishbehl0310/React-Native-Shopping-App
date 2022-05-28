import React from "react";
import {
  View
} from "react-native";
import {
  Placeholder,
  PlaceholderMedia,
  PlaceholderLine,
  ShineOverlay,
} from 'rn-placeholder';

const ProductsLoader = () => {
  return (
    <View
      style={{
        marginBottom: 10
      }}
    >
      <Placeholder
        Animation={ShineOverlay}
        style={{
          minWidth: "48%",
        }}
      >
        <PlaceholderLine
          style={{
            height: 194,
            borderRadius: 4,
            marginBottom: 20
          }}
        />
        <PlaceholderLine width={80} />
        <PlaceholderLine width={50} />
        <PlaceholderLine width={50} />
      </Placeholder>
    </View>
  );
}

export default ProductsLoader;
