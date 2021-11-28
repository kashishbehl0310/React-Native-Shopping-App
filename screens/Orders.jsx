import React from "react";
import {
  SafeAreaView,
  View,
  Text,
  TouchableHighlight,
  ScrollView
} from "react-native";
import { FlatList, TouchableOpacity } from "react-native-gesture-handler";
import { useState } from "react/cjs/react.development";
import PageHeader from "../components/PageHeader";
import data from "../data/orders";

const orderTypes = [
  {
    id: 1,
    name: "All",
    status: "all"
  },
  {
    id: 2,
    name: "Processing",
    status: "processing"
  },
  {
    id: 3,
    name: "Delivered",
    status: "delivered"
  },
  {
    id: 4,
    name: "Cancelled",
    status: "cancelled"
  },
];

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

const Orders = (props) => {
  const [activeTab, setActiveTab] = useState(1);
  const [orders, setOrders] = useState(data);
  const [filteredOrders, setFilteredOrders] = useState(data);
  return (
    <SafeAreaView
      style={{
        height: "100%",
        backgroundColor: "#fff"
      }}
    >
      <PageHeader
        navigation={props.navigation}
        title={""}
      />
      <View
        style={{
          padding: 16
        }}
      >
        <Text
          style={{
            fontSize: 34,
            color: "#333",
            fontWeight: "800"
          }}
        >
          My Orders
        </Text>
        <View
          style={{
            marginTop: 24
          }}
        >
          <FlatList
            data={orderTypes}
            horizontal={true}
            keyExtractor={(item) => item.id}
            showsHorizontalScrollIndicator={false}
            renderItem={({item}) => {
              return (
                <TouchableOpacity
                  style={{
                    backgroundColor: item.id === activeTab ? "#f2f2f2" : "#fff",
                    paddingVertical: 6,
                    paddingHorizontal: 20,
                    borderRadius: 24,
                    marginRight: 10
                  }}
                  onPress={() => {
                    setActiveTab(item.id)
                    if (item.status !== "all") {
                      let orderCopy = [...orders];
                      orderCopy = orderCopy.filter(o => o.status === item.status);
                      setFilteredOrders(orderCopy);
                    } else {
                      setFilteredOrders(orders);
                    }
                  }}
                >
                  <Text
                    style={{
                      color: "#333",
                      textTransform: "uppercase",
                      fontSize: 14, fontWeight: "500"
                    }}
                  >{item.name}</Text>
                </TouchableOpacity>
              )
            }}
          />
          <ScrollView
            style={{
              marginTop: 34
            }}
          >
            {
              filteredOrders.map(order => {
                return (
                  <View
                    style={{
                      backgroundColor: "#f2f2f2",
                      padding: 18,
                      marginBottom: 20
                    }}
                  >
                    <View
                      style={{
                        flexDirection: "row",
                        justifyContent: "space-between"
                      }}
                    >
                      <Text
                        style={{
                          color: "#333",
                          fontSize: 16, fontWeight: "600"
                        }}
                      >
                        Order No: {order.id}
                      </Text>
                      <Text
                        style={{
                          color: "#828282",
                          fontSize: 14
                        }}
                      >
                        {order.date}
                      </Text>
                    </View>
                    <Text
                      style={{
                        fontSize: 14,
                        color: "#828282",
                        marginTop: 14
                      }}
                    >
                      Tracking Number: <Text
                        style={{
                          fontSize: 14,
                          color: "#333",
                          marginLeft: 10
                        }}
                      >{order.trackingId || "NA"}</Text>
                    </Text>
                    <View
                      style={{
                        flexDirection: "row",
                        justifyContent: "space-between",
                        marginTop: 4
                      }}
                    >
                      <Text
                        style={{
                          fontSize: 14,
                          color: "#828282",
                        }}
                      >Quantity: <Text
                        style={{
                          fontSize: 14,
                          color: "#333",
                          marginLeft: 10
                        }}
                      >{order.quantity}</Text></Text>
                      <Text
                        style={{
                          fontSize: 14,
                          color: "#828282",
                        }}
                      >Total Amount: <Text
                        style={{
                          fontSize: 14,
                          color: "#333",
                          marginLeft: 10
                        }}
                      >{order.amount}$</Text></Text>
                    </View>
                    <View
                      style={{
                        marginTop: 14,
                        justifyContent: "space-between",
                        flexDirection: "row",
                        alignItems: "center"
                      }}
                    >
                      <TouchableOpacity
                        style={{
                          paddingVertical: 8,
                          paddingHorizontal: 16,
                          backgroundColor: "#ff8c00"
                        }}
                        onPress={() => {
                          props.navigation.navigate('order-summary', {
                            order
                          });
                        }}
                      >
                        <Text
                          style={{
                            color: "#fff",
                            textTransform: "uppercase",
                            fontSize: 16,
                            fontWeight: "600"
                          }}
                        >Details</Text>
                      </TouchableOpacity>
                      <Text
                        style={{
                          color: getColor(order.status.toLowerCase()),
                          textTransform: "capitalize"
                        }}
                      >{order.status}</Text>
                    </View>
                  </View>
                )
              })
            }
          </ScrollView>
        </View>
      </View>
    </SafeAreaView>
  )
}

export default Orders;
