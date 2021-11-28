import { Ionicons } from "@expo/vector-icons";
import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  Image
} from "react-native";
import { Input } from "../library";
const google = require("../assets/images/google.png");
const fb = require("../assets/images/fb.png");

const Login = ({ navigation }) => {
  return (
    <SafeAreaView
      style={styles.container}
    >
      <View
        style={{
          padding: 16
        }}
      >
        <Text
          style={{
            color: "#333",
            fontSize: 34,
            fontWeight: "800"
          }}
          >
          Sign In
        </Text>
        <View
          style={{
            marginTop: 74
          }}
        >
          <Input
            label="Email"
            styles={{
              marginTop: 8
            }}
          />
          <Input
            label="Password"
            styles={{
              marginTop: 8
            }}
            password={true}
          />
          <View
            style={{
              width: "100%",
              justifyContent: "flex-end",
              flexDirection: "row",
              marginTop: 16
            }}
          >
            <TouchableOpacity
              style={{
                flexDirection: "row",
                alignItems: "center"
              }}
              onPress={() => {
                navigation.navigate("forgot-password");
              }}
            >
              <Text
                style={{
                  color: "#333",
                  fontWeight: "500",
                  fontSize: 16,
                  marginRight: 8
                }}
              >
                Forgot Your Password?
              </Text>
              <Ionicons
                name="arrow-forward-outline"
                color={"#ff8c00"}
                size={24}
              />
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            style={{
              width: "100%",
              backgroundColor: "#ff8c00",
              paddingVertical: 16,
              justifyContent: "center",
              alignItems: "center",
              marginTop: 36
            }}
            onPress={() => {
              navigation.navigate("Home");
            }}
          >
            <Text
              style={{
                color: "#fff",
                fontWeight: "600",
                textTransform: "uppercase",
                fontSize: 18
              }}
            >
              Login
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <View
        style={{
          marginBottom: 44,
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <Text
          style={{
            color: "#333",
            fontSize: 14,
            fontWeight: "400"
          }}
        >
          Or sign up with social account
        </Text>
        <View
          style={{
            flexDirection: "row",
            marginTop: 12
          }}
        >
          <TouchableOpacity
            style={{
              paddingVertical: 20,
              paddingHorizontal: 34,
              borderRadius: 24,
              borderWidth: 1,
              borderColor: "#f2f2f2"
            }}
            onPress={() => {
              navigation.navigate("Home");
            }}
          >
            <Image
              source={google}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("Home");
            }}
            style={{
              paddingVertical: 20,
              paddingHorizontal: 34,
              borderRadius: 24,
              borderWidth: 1,
              borderColor: "#f2f2f2",
              marginLeft: 16
            }}
          >
            <Image
              source={fb}
            />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
   backgroundColor: "#fff",
   height: "100%",
   padding: 16,
   justifyContent: "space-between"
  },
});

export default Login;