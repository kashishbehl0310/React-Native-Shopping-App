import React, { Component } from "react";
import {
  View, Text, StyleSheet, Image, TouchableWithoutFeedback
} from "react-native";

class Main extends Component {

  onLoginPress = () => {
    this.props.navigation.navigate("SignIn");
  }

  onSignUpPress = () => {
    this.props.navigation.navigate("SignUp");
  }

  render() {
    return(
      <View
        style={{
          flex: 1,
          alignItems: "center",
          backgroundColor: "#fff",
          justifyContent: "center"
        }}
      >
        <Text
          style={{
            // fontSize: hp("11.25%"),
            fontSize: 90,
            fontWeight: "bold",
          }}
        >
          <Text style={{ color: "#377dff" }}>fash</Text>
          .in
        </Text>
        <Text
          style={{
            fontSize: 26,
            fontWeight: "400"
          }}
        >
          your 24h fash.store
        </Text>
        <Image style={styles.imageStyle} source={require("../assets/intro.jpg")} />
        <TouchableWithoutFeedback
          onPress={this.onLoginPress}
        >
					<View style={styles.nextBtn}>
						<Text style={styles.nextBtnText}>Login</Text>
					</View>
				</TouchableWithoutFeedback>
        <Text style={{ marginTop: 15, color: "#ccc" }}> ─────────  Or  ─────────</Text>
        <TouchableWithoutFeedback
          onPress={this.onSignUpPress}
        >
					<View style={styles.signInButton}>
						<Text style={styles.signIntext}>Sign Up</Text>
					</View>
				</TouchableWithoutFeedback>
      </View>
    )
  }
}

export default Main;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    height: "100%"
  },
  imageStyle: {
    height: 300,
    width: 380,
    marginTop: 30
  },
  brandText: {
    fontSize: 60,
    color: "#484848"
  },
  nextBtn: {
		marginTop: 50,
		height: 50,
		width: 290,
		backgroundColor: '#377dff',
		justifyContent: 'center',
    borderRadius: 4,
	},
	nextBtnText: {
		fontWeight: 'bold',
		fontSize: 16,
		color: '#ffffff',
		alignSelf: 'center',
  },
  signInButton: {
    marginTop: 15,
		height: 50,
		width: 290,
		backgroundColor: '#fff',
		justifyContent: 'center',
    borderRadius: 4,
    borderColor: "#377dff",
    borderWidth: 2
  },
  signIntext: {
    fontWeight: 'bold',
		fontSize: 16,
		color: '#377dff',
		alignSelf: 'center',
  }
})