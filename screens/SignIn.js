import { Ionicons } from "@expo/vector-icons";
import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  Image,
  Alert
} from "react-native";
import { Input } from "../library";
const google = require("../assets/images/google.png");
const fb = require("../assets/images/fb.png");

const SignIn = ({ navigation }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [nameErr, setNameErr] = useState(false);
  const [passwordErr, setPasswordErr] = useState(false);
  const [emailErr, setEmailErr] = useState(false);
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
          Sign Up
        </Text>
        <View
          style={{
            marginTop: 74
          }}
        >
          <Input
            value={name}
            label="Name"
            onChange={(name) => {
              setNameErr(false);
              setName(name);
            }}
            errMessage={nameErr ? "Name is required" : ""}
          />
          <Input
            label="Email"
            styles={{
              marginTop: 8
            }}
            value={email}
            onChange={(email) => {
              setEmailErr(false);
              setEmail(email);
            }}
            errMessage={emailErr ? "Email is required" : ""}
          />
          <Input
            value={password}
            label="Password"
            styles={{
              marginTop: 8
            }}
            password={true}
            onChange={(password) => {
              setPasswordErr(false);
              setPassword(password);
            }}
            errMessage={passwordErr ? "Password is required" : ""}
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
                navigation.navigate("sign-in");
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
                Already have an account?
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
              if (name === "") {
                setNameErr(true);
              }
              if (email === "") {
                setEmailErr(true);
              }
              if (password === "") {
                setPasswordErr(true);
              }
              if (name === "" || email === "" || password === "") {
                alert("There are errors");
              } else {
                navigation.navigate("Home");
              }
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
              Sign Up
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
            style={{
              paddingVertical: 20,
              paddingHorizontal: 34,
              borderRadius: 24,
              borderWidth: 1,
              borderColor: "#f2f2f2",
              marginLeft: 16
            }}
            onPress={() => {
              navigation.navigate("Home");
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

export default SignIn;