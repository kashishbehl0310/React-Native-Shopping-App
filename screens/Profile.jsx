import { Ionicons } from "@expo/vector-icons";
import React from "react";
import {
  View,
  Text,
  SafeAreaView,
  Image,
  ScrollView,
  TouchableOpacity
} from "react-native";

const avatar = require("../assets/images/avatar.jpeg");

const Profile = (props) => {
  return (
    <SafeAreaView
      style={{
        backgroundColor: "#fff",
        height: "100%"
      }}
    >
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
        >My Profile</Text>
        <View
          style={{
            marginTop: 24,
            flexDirection: "row",
            alignItems: "center"
          }}
        >
          <Image
            source={avatar}
            style={{
              borderRadius: 50,
              height: 64,
              width: 64
            }}
            resizeMode="cover"
          />
          <View
            style={{
              marginLeft: 18
            }}
          >
            <Text
              style={{
                fontSize: 18,
                color: "#333",
                fontWeight: "600",
                marginBottom: 4
              }}
            >Kashish</Text>
            <Text
              style={{
                fontSize: 14,
                color: "#333",
                fontWeight: "400",
              }}
            >kashish@mail.com</Text>
          </View>
        </View>
        <ScrollView
          style={{
            marginTop: 28
          }}
        >
          <TouchableOpacity
            style={{
              padding: 18,
              borderTopColor: "rgba(0,0,0,0.05)",
              borderBottomColor: "rgba(0,0,0,0.05)",
              borderBottomWidth: 1,
              borderTopWidth: 1
            }}
            onPress={() => {
              props.navigation.navigate("orders");
            }}
          >
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between"
              }}
            >
              <View>
                <Text
                  style={{
                    fontSize: 16,
                    color: "#333",
                    fontWeight: "600"
                  }}
                >
                  My Orders
                </Text>
                <Text
                  style={{
                    fontSize: 14,
                    color: "#828282",
                    fontWeight: "500",
                    marginTop: 4
                  }}
                >
                  5 orders
                </Text>
              </View>
              <Ionicons
                name="chevron-forward-outline"
                color={"#828282"}
                size={16}
              />
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              padding: 18,
              borderBottomColor: "rgba(0,0,0,0.05)",
              borderBottomWidth: 1,
            }}
            onPress={() => {
              props.navigation.navigate("address");
            }}
          >
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between"
              }}
            >
              <View>
                <Text
                  style={{
                    fontSize: 16,
                    color: "#333",
                    fontWeight: "600"
                  }}
                >
                  Shipping addresses
                </Text>
                <Text
                  style={{
                    fontSize: 14,
                    color: "#828282",
                    fontWeight: "500",
                    marginTop: 4
                  }}
                >
                  2 addresses
                </Text>
              </View>
              <Ionicons
                name="chevron-forward-outline"
                color={"#828282"}
                size={16}
              />
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              padding: 18,
              borderBottomColor: "rgba(0,0,0,0.05)",
              borderBottomWidth: 1,
            }}
            onPress={() => {
              props.navigation.navigate("payment-methods");
            }}
          >
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between"
              }}
            >
              <View>
                <Text
                  style={{
                    fontSize: 16,
                    color: "#333",
                    fontWeight: "600"
                  }}
                >
                  Payment Methods
                </Text>
                <Text
                  style={{
                    fontSize: 14,
                    color: "#828282",
                    fontWeight: "500",
                    marginTop: 4
                  }}
                >
                  2 cards
                </Text>
              </View>
              <Ionicons
                name="chevron-forward-outline"
                color={"#828282"}
                size={16}
              />
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              padding: 18,
              borderBottomColor: "rgba(0,0,0,0.05)",
              borderBottomWidth: 1,
            }}
            onPress={() => {
              props.navigation.navigate("payment-methods");
            }}
          >
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between"
              }}
            >
              <View>
                <Text
                  style={{
                    fontSize: 16,
                    color: "#333",
                    fontWeight: "600"
                  }}
                >
                  Notifications
                </Text>
                <Text
                  style={{
                    fontSize: 14,
                    color: "#828282",
                    fontWeight: "500",
                    marginTop: 4
                  }}
                >
                  New and exiting offers!
                </Text>
              </View>
              <Ionicons
                name="chevron-forward-outline"
                color={"#828282"}
                size={16}
              />
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              padding: 18,
              borderBottomColor: "rgba(0,0,0,0.05)",
              borderBottomWidth: 1,
            }}
            onPress={() => {
              props.navigation.navigate("profile-settings");
            }}
          >
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between"
              }}
            >
              <View>
                <Text
                  style={{
                    fontSize: 16,
                    color: "#333",
                    fontWeight: "600"
                  }}
                >
                  Settings
                </Text>
                <Text
                  style={{
                    fontSize: 14,
                    color: "#828282",
                    fontWeight: "500",
                    marginTop: 4
                  }}
                >
                  Notification settings, password
                </Text>
              </View>
              <Ionicons
                name="chevron-forward-outline"
                color={"#828282"}
                size={16}
              />
            </View>
          </TouchableOpacity>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

export default Profile;
