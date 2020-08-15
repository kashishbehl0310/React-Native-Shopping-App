import React, { Component } from "react";
import {
  View, ScrollView
} from "react-native";

import HomeCategory from "../../Components/HomeCategory"

class Home extends Component {
  render() {
    return (
      <View
        style={{
          flex: 1
        }}  
      >
        <ScrollView scrollEnabled>
          <HomeCategory
            imageUri={require("../../assets/women.jpg")}
            titleFirst="Womens"
            titleSecond="Fashion"
            subTitle="Spring Season. Opened!"
            screenProps="Super"
            {...this.props}
          />
          <HomeCategory
            imageUri={require("../../assets/men.jpg")}
            titleFirst="Mens"
            titleSecond="Fashion"
            subTitle="Pure. Old Fashioned."
            {...this.props}
          />
          <HomeCategory
            imageUri={require("../../assets/kids.jpg")}
            titleFirst="Kids"
            titleSecond="Fashion"
            subTitle="For the smallest."
            {...this.props}
          />
        </ScrollView>
      </View>
    );
  }
}

export default Home;