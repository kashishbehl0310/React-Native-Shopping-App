import React, { Component } from "react";
import { View, Text, ScrollView } from "react-native";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp
} from "react-native-responsive-screen";
import ItemList from "../../Components/ItemList";

const CATEGORY = [
  "Dresses",
  "Shoes",
  "Shorts",
  "Skirts",
  "Dresses",
  "Shoes",
  "Shorts",
  "Skirts"
];

const DRESSES = [
  {
    id: 1,
    imageUri: require("../../assets/dresses/dresses_1.jpg"),
    name: "Helena",
    priceOne: 120,
    priceTwo: "$180"
  },
  {
    id: 2,
    imageUri: require("../../assets/dresses/dresses_2.jpg"),
    name: "Marie-Anne short",
    priceOne: 180,
    priceTwo: null
  },
  {
    id: 3,
    imageUri: require("../../assets/dresses/dresses_3.jpg"),
    name: "Betruschka",
    priceOne: 80,
    priceTwo: null
  },
  {
    id: 4,
    imageUri: require("../../assets/dresses/dresses_4.jpg"),
    name: "Betruschka",
    priceOne: 80,
    priceTwo: null
  },
  {
    id: 5,
    imageUri: require("../../assets/dresses/dresses_1.jpg"),
    name: "Betruschka",
    priceOne: 80,
    priceTwo: null
  },
  {
    id: 6,
    imageUri: require("../../assets/dresses/dresses_2.jpg"),
    name: "Betruschka",
    priceOne: 80,
    priceTwo: null
  }
];

class Category extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentIndex: 0
    }
  }

  _renderDresses = () => {
    return DRESSES.map((dress, index) => {
      return (
        <ItemList
          key={dress.id}
          imageUri={dress.imageUri}
          name={dress.name}
          priceOne={dress.priceOne}
          priceTwo={dress.priceTwo}
          onPress={() => {
            alert(dress.name)
            // this.props.navigation.navigate("Detail", {
            //   detailName: item.name,
            //   detailImageUri: item.imageUri,
            //   detailPriceOne: item.priceOne,
            //   detailPriceTwo: item.priceTwo ? item.priceTwo : null
            // })
          }}
        />
      );
    })
  }

  _renderList = () => {
    const { currentIndex } = this.state;
    if (currentIndex === 0) {
      return this._renderDresses();
    }
  }

  render() {
    return (
      <View
        style={{
          flex: 1
        }}
      >
        <View
          style={{
            flex: 1
          }}
        >
          <ScrollView
            contentContainerStyle={{
              flexDirection: "row",
              flexWrap: "wrap",
              justifyContent: "space-between"
            }}
          >
            {this._renderList()}
          </ScrollView>
        </View>
      </View>
    )
  }
}

export default Category;