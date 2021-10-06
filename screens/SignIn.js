import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity
} from "react-native";

const SignIn = ({ navigation }) => {
  return (
    <View
      style={styles.container}
    >
      <Text>Sign In</Text>
      <TouchableOpacity
        style={{
          width: 200,
          padding: 20,
          backgroundColor: "#ff8c00",
          alignItems: 'center',
          borderRadius: 11,
        }}
        onPress={() => {
          navigation.navigate('Home');
        }}>
        <Text
          style={{
            color: "#fff",
          }}>
          Home
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    justifyContent: "center",
    alignItems: "center"
  },
});

export default SignIn;