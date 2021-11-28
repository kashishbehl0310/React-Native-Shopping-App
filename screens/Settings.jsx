import React from "react";
import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity
} from "react-native";
import { useState } from "react/cjs/react.development";
import PageHeader from "../components/PageHeader";
import ChangePasswordModal from "../components/Settings/ChangePasswordModal";
import { Input, Toggle } from "../library";

const Settings = (props) => {
  const [name, setName] = useState("Kashish");
  const [dob, setDOB] = useState("03/10/1996");
  const [pass, setPassword] = useState("Xpress@123");
  const [showPasswordModal, setShowPasswordModal] = useState(false);
  const [salesNotif, setSalesNotif] = useState(false);
  const [arrivalNotif, setArrivalNotif] = useState(false);
  const [orderNotif, setOrderNotif] = useState(true);


  return (
    <SafeAreaView
      style={{
        backgroundColor: "#fff",
        height: "100%"
      }}
    >
      <PageHeader
        title={""}
        navigation={props.navigation}
      />
      <View
        style={{
          padding: 16
        }}
      >
        <Text
          style={{
            fontSize: 34,
            fontWeight: "800",
            color: "#333"
          }}
        >
          Settings
        </Text>
        <View
          style={{
            marginTop: 28
          }}
        >
          <Text
            style={{
              fontSize: 14,
              fontWeight: "600",
              color: "#333",
              textTransform: "uppercase"
            }}
          >
            Personal Information
          </Text>
          <Input
            label="Full Name"
            styles={{
              marginTop: 16
            }}
            value={name}
          />
          <Input
            label="Date of Birth"
            styles={{
              marginTop: 24
            }}
            value={dob}
          />
        </View>
        <View
          style={{
            marginTop: 32
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
                fontSize: 14,
                fontWeight: "600",
                color: "#333",
                textTransform: "uppercase"
              }}
            >
              Password
            </Text>
            <TouchableOpacity
              onPress={() => {
                setShowPasswordModal(!showPasswordModal)
              }}
            >
              <Text
                style={{
                  color: "#828282",
                  fontSize: 14
                }}
              >
                Change
              </Text>
            </TouchableOpacity>
          </View>
          <Input
            label="Password"
            styles={{
              marginTop: 16
            }}
            password={true}
            value={pass}
          />
        </View>
        <View
          style={{
            width: "100%",
            marginTop: 40
          }}
        >
          <Text
            style={{
              color: "#333",
              fontSize: 14,
              textTransform: "uppercase",
              fontWeight: "600"
            }}
          >Notification Preferences</Text>
          <View
            style={{
              width: "100%",
            }}
          >
            <Toggle
              label="Order Status"
              onColor="#ff8c00"
              isOn={orderNotif}
              containerStyles={{
                justifyContent: "space-between",
                marginTop: 16
              }}
              labelStyle={{
              marginHorizontal: 0,
              color: "#333",
              fontSize: 16,
              fontWeight: "500"
              }}
              onToggle={isOnBlueToggleSwitch => {
                setOrderNotif(isOnBlueToggleSwitch);
              //  this.setState({ isOnBlueToggleSwitch });
              //  this.onToggle(isOnBlueToggleSwitch);
              }}
            />
            <Toggle
              label="Promotions and Offers"
              onColor="#ff8c00"
              isOn={salesNotif}
              containerStyles={{
                justifyContent: "space-between",
                marginTop: 16
              }}
              labelStyle={{
              marginHorizontal: 0,
              color: "#333",
              fontSize: 16,
              fontWeight: "500"
              }}
              onToggle={isOnBlueToggleSwitch => {
                setSalesNotif(isOnBlueToggleSwitch);

              //  this.setState({ isOnBlueToggleSwitch });
              //  this.onToggle(isOnBlueToggleSwitch);
              }}
            />
            <Toggle
              label="New Arrivals"
              onColor="#ff8c00"
              isOn={arrivalNotif}
              containerStyles={{
                justifyContent: "space-between",
                marginTop: 16
              }}
              labelStyle={{
              marginHorizontal: 0,
              color: "#333",
              fontSize: 16,
              fontWeight: "500"
              }}
              onToggle={isOnBlueToggleSwitch => {
                setArrivalNotif(isOnBlueToggleSwitch)
              //  this.setState({ isOnBlueToggleSwitch });
              //  this.onToggle(isOnBlueToggleSwitch);
              }}
            />
          </View>
        </View>
      </View>
      {
        showPasswordModal
        ? <ChangePasswordModal
          isVisible={showPasswordModal}
          onDismiss={() => {
            setShowPasswordModal(false);
          }}
        />
        : null
      }
    </SafeAreaView>
  )
};

export default Settings;