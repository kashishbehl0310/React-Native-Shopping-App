import { Ionicons } from "@expo/vector-icons";
import React, { useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  TouchableHighlight,
  Button
} from "react-native";
import Card from "../components/Cart/Card";
import PageHeader from "../components/PageHeader";
import cardData from "../data/cards";
import AddCardModal from "../components/Cart/AddCardModal";
// AddCardModal

const cards = require("../assets/images/card.png");

const PaymentMethods = (props) => {
  const [showAddCardModal, setShowAddCardModal] = useState(false);
  const [cardList, setCardList] = useState(cardData);

  return (
    <SafeAreaView
      style={{
        backgroundColor: "#fff",
        height: "100%"
      }}
    >
      <PageHeader
        navigation={props.navigation}
        title={"Payment Methods"}
      />
      <ScrollView
        style={{
          paddingTop: 32,
          paddingHorizontal: 18
        }}
      >
        <Text
          style={{
            fontWeight: "600",
            color: "#333",
            fontSize: 14
          }}
        >Your Payment Cards</Text>
        <View
          style={{
            marginTop: 28
          }}
        >
          {
            cardList.map(card => (
              <Card
                card={card}
                key={card.id}
                handleCheckboxSelect={(cardId) => {
                  let cardCopy = [...cardList];
                  cardCopy.map(c => {
                    if (c.id === cardId) {
                      c.isDefault = !c.isDefault;
                    } else {
                      c.isDefault = false;
                    }
                    return {
                      ...c
                    };
                  });
                  setCardList(cardCopy);
                }}
              />
            ))
          }
          {/* <View
            style={{
              width: "100%",
              height: 216,
            }}
          >
            <ImageBackground
              source={card}
              style={{
                flex: 1,
                resizeMode: "cover",
                borderRadius: 18
              }}
            />
          </View> */}
        </View>
      </ScrollView>
      {/* <View
        style={{
          flex: 1
        }}
      > */}
        <View
          style={{
            position: "absolute",
            bottom: 30,
            right: 10
          }}
        >
         <TouchableOpacity
          onPress={() => {
            setShowAddCardModal(true);
          }}
          style={{
            backgroundColor: "#ff8c00",
            padding: 8,
            borderRadius: 50,
            justifyContent: "center",
            alignItems: "center",
            width: 44,
            height: 44,
          }}
          >
          <Ionicons
            name={"add-outline"}
            color={"#fff"}
            size={28}
          />
        </TouchableOpacity>
      </View>
      {
        showAddCardModal
        ? <AddCardModal
          isVisible={showAddCardModal}
          onDismiss={() => {
            setShowAddCardModal(false);
          }}
        />
        : null
      }
      {/* </View> */}
    </SafeAreaView>
  )
};

const styles = StyleSheet.create({
  content: {
    backgroundColor: 'white',
    padding: 22,
    justifyContent: 'center',
    alignItems: 'center',
    borderTopLeftRadius: 34,
    borderTopRightRadius: 34,
    borderColor: 'rgba(0, 0, 0, 0.1)',
  },
  contentTitle: {
    fontSize: 20,
    marginBottom: 12,
  },
  view: {
    justifyContent: 'flex-end',
    margin: 0,
  },
});

export default PaymentMethods;
