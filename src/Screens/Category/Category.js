import React, { Component } from "react";
import { View, Text, ScrollView } from "react-native";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp
} from "react-native-responsive-screen";

class Category extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentIndex: 0
    }
  }
  render() {
    return (
      <View>
        <Text>Category</Text>
      </View>
    )
  }
}

export default Category;