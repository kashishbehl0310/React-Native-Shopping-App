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

const CartLoader = () => {
  return (
    <View
    >
      <Placeholder
        Animation={ShineOverlay}
      >
        <PlaceholderLine
          style={{
            height: 150,
          }}
        width={100} />
      </Placeholder>
    </View>
  );
}

export default CartLoader;
