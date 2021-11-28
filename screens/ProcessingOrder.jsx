import React, { useEffect } from "react";
import {
  View,
  SafeAreaView,
  Text
} from "react-native";
import LottieView from 'lottie-react-native';

const ProcessingOrder = (props) => {
  useEffect(() => {
    setTimeout(() => {
      props.navigation.navigate("order-success");
    }, 2000);
  }, []);
  return (
    <SafeAreaView
      style={{
        height: "100%",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#fff"
      }}
    >
       <LottieView source={require('../assets/lottie/processing.json')} autoPlay loop />
    </SafeAreaView>
  )
}

export default ProcessingOrder;