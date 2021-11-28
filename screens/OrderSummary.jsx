import React from "react";
import {
  SafeAreaView,
  View,
  Text,
  ScrollView,
  FlatList
} from "react-native";
import Bagitem from "../components/Bagitem";
import PageHeader from "../components/PageHeader";
// Bagitem

const getColor = (status) => {
  let color = "#333";
  if (status === "processing") {
    color = "#828282";
  } else if (status === "delivered") {
    color = "#27ae60";
  } else if (status === "cancelled") {
    color = "#eb0010";
  }
  return color;
}

const OrderSummary = (props) => {
  const {
    route
 } = props;
  const {
    order
  } = route.params;

  return (
    <SafeAreaView
      style={{
        height: "100%",
        backgroundColor: "#fff"
      }}
    >
      <PageHeader
        title={"Order Summary"}
        navigation={props.navigation}
      />
      <ScrollView
        style={{
          marginTop: 24,
          paddingHorizontal: 16
        }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center"
          }}
        >
          <Text
            style={{
              color: "#333",
              fontSize: 16,
              fontWeight: "600"
            }}
          >
            Order No: {order.id}
          </Text>
          <Text
            style={{
              color: "#828282",
              fontSize: 14,
              fontWeight: "500"
            }}
          >
            {order.date}
          </Text>
        </View>
        <Text
          style={{
            color: "#828282",
            fontSize: 14,
            fontWeight: "500",
            marginTop: 12
          }}
        >
          Tracking Number: <Text
            style={{
              color: "#333",
              fontSize: 14,
              fontWeight: "500"
            }}
          >{order.trackingId}</Text>
        </Text>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginTop: 4,
            marginBottom: 18
          }}
        >
          <Text
            style={{
              color: "#828282",
              fontSize: 14,
              fontWeight: "500",
            }}
          >Quantity <Text
            style={{
              color: "#333",
              fontSize: 14,
              fontWeight: "500"
            }}
          >{order.quantity}</Text></Text>
          <Text
            style={{
              textTransform: "capitalize",
              fontSize: 14, 
              fontWeight: "500",
              color: getColor(order.status.toLowerCase())
            }}
          >{order.status}</Text>
        </View>
        <FlatList
          data={order.items}
          keyExtractor={(item) => item.id}
          renderItem={({item}) => {
            return (
              <Bagitem
                key={item.id}
                item={item}
                navigation={props.navigation}
                orderScreen={true}
                onRemove={(id) => {
                  // const favoritesCopy = [...favoritesData];
                  // const filteredFav = favoritesCopy.filter(item => item.id !== id);
                  // setFavorites(filteredFav);
                }}
              />
            )
          }}
        />
        <View
          style={{
            marginTop: 14
          }}
        >
          <Text
            style={{
              color: "#333",
              fontWeight: "600",
              fontSize: 16
            }}
          >Order Information</Text>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center"
            }}
          >
            <Text
              style={{
                color: "#828282",
                fontSize: 14,
              }}
            >Shipping Address</Text>
            <Text
              style={{
                color: "#333",
                fontSize: 14,
                fontWeight: "500"
              }}
            >{order.payment.address}</Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              marginTop: 24 
            }}
          >
            <Text
              style={{
                color: "#828282",
                fontSize: 14,
              }}
            >Payment Methof</Text>
            <Text
              style={{
                color: "#333",
                fontSize: 14,
                fontWeight: "500"
              }}
            >**** **** **** {order.payment.card}</Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              marginTop: 24 
            }}
          >
            <Text
              style={{
                color: "#828282",
                fontSize: 14,
              }}
            >Delivery Method</Text>
            <Text
              style={{
                color: "#333",
                fontSize: 14,
                fontWeight: "500"
              }}
            >{order.payment.delivery}, {order.payment.deliveryTime} days , {order.payment.deliverCharge}$</Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              marginTop: 24 
            }}
          >
            <Text
              style={{
                color: "#828282",
                fontSize: 14,
              }}
            >Discount</Text>
            <Text
              style={{
                color: "#333",
                fontSize: 14,
                fontWeight: "500"
              }}
            >{order.payment.discount} {order.payment.coupon} Promo Code Applied</Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              marginTop: 24 
            }}
          >
            <Text
              style={{
                color: "#828282",
                fontSize: 14,
              }}
            >Total Amoutn</Text>
            <Text
              style={{
                color: "#333",
                fontSize: 14,
                fontWeight: "500"
              }}
            >{order.payment.total}$</Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default OrderSummary;