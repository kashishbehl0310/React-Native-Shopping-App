import React, { Component } from "react";
import {
  View, Text, StyleSheet, ImageBackground, Image, TextInput
} from "react-native";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";

class SignUp extends Component {
  render() {
    return (
      <ImageBackground
        style={{
          flex: 1,
          alignSelf: 'stretch',
          width: null,
        }}
        source={require("../assets/back-illustration.jpg")}
      >
        <View
          style={styles.container}
        >
          <View style={styles.headerTextContainer}>
            <Text style={styles.signInText}>Sign Up</Text>
            <Text style={styles.signInIntro}>Please fill in the credentials</Text>
          </View>
          <View style={styles.SectionStyle}>
            <Image
              //We are showing the Image from online
              source={require("../assets/user-6-fill.png")}

              //You can also show the image from you project directory like below
              //source={require('./Images/user.png')}

              //Image Style
              style={styles.ImageStyle}
            />
            <TextInput
              style={{ flex: 1 }}
              placeholder="Enter Your Name Here"
              underlineColorAndroid="transparent"
              placeholderTextColor="#8E9FA7"
            />
          </View>
          <View style={{ ...styles.SectionStyle, margin: 0}}>
            <Image
              //We are showing the Image from online
              source={require("../assets/mail-line.png")}

              //You can also show the image from you project directory like below
              //source={require('./Images/user.png')}

              //Image Style
              style={styles.ImageStyle}
            />
            <TextInput
              style={{ flex: 1 }}
              placeholder="Enter Your Email Here"
              underlineColorAndroid="transparent"
              placeholderTextColor="#8E9FA7"
            />
          </View>
          <View style={{ ...styles.SectionStyle, margin: 0}}>
            <Image
              //We are showing the Image from online
              source={require("../assets/key-line.png")}

              //You can also show the image from you project directory like below
              //source={require('./Images/user.png')}

              //Image Style
              style={styles.ImageStyle}
            />
            <TextInput
              style={{ flex: 1 }}
              placeholder="Password"
              underlineColorAndroid="transparent"
              placeholderTextColor="#8E9FA7"
            />
          </View>
          <View
          style={{
            width: 350,
            marginTop: 20
          }}
        >
          <TouchableWithoutFeedback
          onPress={this.onLoginPress}
        >
            <View style={styles.nextBtn}>
              <Text style={styles.nextBtnText}>Sign Up</Text>
            </View>
          </TouchableWithoutFeedback>
        </View>
        </View>
      </ImageBackground>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  headerTextContainer: {
    width: 350
  },
  signInText: {
    fontSize: 44,
    color: "#141414",
    fontWeight: "500",
    marginBottom: 20
  },
  signInIntro: {
    color: "#484848",
    fontSize: 20,
    letterSpacing: 1
  },
  SectionStyle: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    height: 60,
    borderRadius: 5,
    margin: 40,
    width: 350,
    paddingLeft: 5,
    marginBottom: 20
  },
  ImageStyle: {
    padding: 10,
    margin: 5,
    height: 20,
    width: 25,
    alignItems: 'center',
    marginRight: 10
  },
  nextBtn: {
		height: 50,
		width: 350,
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
})

export default SignUp;