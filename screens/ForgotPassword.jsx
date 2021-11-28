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

const ForgotPassword = ({ navigation }) => {
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
         Forgot Password
        </Text>
        <View
          style={{
            marginTop: 74
          }}
        >
          <Text
            style={{
              color: "#333",
              fontSize: 16,
              marginBottom: 16
            }}
          >
            Please, enter your email address. You will receive a link to create a new password via email.
          </Text>
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
              Send
            </Text>
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

export default ForgotPassword;