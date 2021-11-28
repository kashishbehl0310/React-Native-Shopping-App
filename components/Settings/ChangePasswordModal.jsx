import React from "react";
import Modal from "react-native-modal";
import {
  View,
  Text,
  StyleSheet,
  TouchableHighlight,
  TouchableOpacity,
} from "react-native";


import { Input } from "../../library";

const ChangePasswordModal = ({
  isVisible,
  onDismiss
}) => {
  return (
    <Modal
      isVisible={isVisible}
      coverScreen={false}
      swipeDirection={["down"]}
      onSwipeComplete={() => {
        onDismiss();
      }}
      propagateSwipe={false}
      style={styles.view}
    >
      <View style={styles.content}>
        <View
          style={{
            width: "100%",
            alignItems: "center",
            justifyContent: "center"
          }}
        >
          <View
            style={{
              width: "20%",
              height: 6,
              backgroundColor: "#989898",
              borderRadius: 4
            }}
          ></View>
        </View>
        <Text
          style={{
            marginVertical: 18,
            fontSize: 18
          }}
        >
          Password Change
        </Text>
        <Input
          label={"Old Password"}
          styles={{
            marginBottom: 20
          }}
        />
        <View
          style={{
            flexDirection: "row",
            justifyContent: "flex-end",
            width: "100%"
          }}
        >
          <Text
            style={{
              color: "#bdbdbd",
              fontSize: 14
            }}
          >
            Forgot Password?
          </Text>
        </View>
        <Input
          label={"New Password"}
          styles={{
            marginBottom: 20,
            marginTop: 18
          }}
        />
        <Input
          label={"Confirm New Password"}
          styles={{
            marginBottom: 42
          }}
        />
        <TouchableOpacity
          style={{
            paddingVertical: 16,
            backgroundColor: "#ff8c00",
            width: "100%"
          }}
          onPress={() => {
            onDismiss();
          }}
        >
          <Text
            style={{
              color: "#fff",
              textTransform: "uppercase",
              fontSize: 16,
              fontWeight: "700",
              textAlign: "center"
            }}
          >Save Password</Text>
        </TouchableOpacity>
      </View>
    </Modal>
  )
}

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

export default ChangePasswordModal;