import React from "react";
import Modal from "react-native-modal";
import {
  View,
  Text,
  StyleSheet,
  TouchableHighlight,
} from "react-native";

import { Input, Checkbox } from "../../library";

const AddCardModal = ({ isVisible, onDismiss }) => {
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
          Add New Card
        </Text>
        <Input
          label={"Name On Card"}
          styles={{
            marginBottom: 20
          }}
          value={"Timothy Gupta"}
        />
        <Input
          label={"Card Number"}
          styles={{
            marginBottom: 20
          }}
        />
        <Input
          label={"Expiry Date"}
          styles={{
            marginBottom: 20
          }}
        />
        <Input
          label={"CVV"}
          styles={{
            marginBottom: 20
          }}
        />
        <View
          style={{
            width: "100%"
          }}
        >
          <Checkbox
            color="#ff8c00"
            labelColor="#333"
            label={"Set as default payment option"}
            value={false}
            checked={true}
            reverse={true}
            onPress={() => {
              // handleCHeckboxSelect(f);
            }}
            labelStyles={{
              marginLeft: 16,
              color: "#333",
              fontSize: 14
            }}
          />
          <TouchableHighlight
            style={{
              paddingVertical: 10,
              backgroundColor: "#ff8c00",
              marginTop: 10
            }}
            onPress={() => {
              onDismiss();
            }}
          >
            <Text
              style={{
                textTransform: "uppercase",
                fontSize: 18,
                color: "#fFf",
                textAlign: "center",
                fontWeight: "600"
              }}
            >Add New Card</Text>
          </TouchableHighlight>
        </View>
      </View>
    </Modal>
  );
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

export default AddCardModal;