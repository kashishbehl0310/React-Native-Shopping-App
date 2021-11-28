import React from "react";
import {
  View,
  Text,
  ImageBackground,
  Image
} from "react-native";
import {
  Checkbox
} from "../../library";

const card = require("../../assets/images/card.png");
const chip = require("../../assets/images/chip.png");

const Card = ({handleCheckboxSelect,  ...props}) => {
  return (
    <View
    style={{
      width: "100%",
      marginBottom: 32,
      borderRadius: 4
    }}
  >
    {/* <Text>aljsalfja</Text> */}
    <View
      style={{
        width: "100%",
        height: 246,
        borderRadius: 4
      }}
    >
      <ImageBackground
        source={card}
        resizeMode="cover"
        style={{
          width: "100%",
          height: "100%",
          borderRadius: 4,
        }}
      >
        <View 
          style={{
            padding: 24,
            height: "100%",
            justifyContent: "space-between"
          }}
        >
          <View>
            <View
              style={{
                justifyContent: "flex-end",
                flexDirection: "row"
              }}
            >
              <Image
                source={props.card.provider}
              />
            </View>
            <Text
              style={{
                color: "#fff",
                fontSize: 24,
                marginTop: 32,
                letterSpacing: 3,
                marginBottom: 12
              }}
            >**** **** **** {props.card.cardNumber}</Text>
            <Image source={chip} />
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center"
            }}
          >
            <Text
              style={{
                color: "#fff",
                fontSize: 16,
                textTransform: "uppercase"
              }}
            >{props.card.name}</Text>
            <View>
              <Text
                 style={{
                  color: "#fff",
                  fontSize: 12,
                  textTransform: "uppercase"
                }}
              >Expiry Date</Text>
              <Text
                 style={{
                  color: "#fff",
                  fontSize: 14,
                  textTransform: "uppercase"
                }}
              >{props.card.expiry}</Text>
            </View>
          </View>
        </View>
      </ImageBackground>
    </View>
    <View
      style={{
        marginTop: 24
      }}
    >
      <Checkbox
        color="#ff8c00"
        labelColor="#333"
        label={"Use as default payment option"}
        value={false}
        checked={props.card.isDefault}
        reverse={true}
        onPress={() => {
          handleCheckboxSelect(props.card.id);
        }}
        labelStyles={{
          marginLeft: 16,
          color: "#333",
          fontSize: 14
        }}
      />
    </View>
  </View>
  )
}

export default Card;
