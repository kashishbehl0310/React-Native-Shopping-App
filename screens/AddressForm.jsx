import React from "react";
import {
  SafeAreaView, ScrollView, TouchableHighlight, Text
} from "react-native";
import PageHeader from "../components/PageHeader";
import { Input } from "../library";

const AddressForm = (props) => {
  const {
    route
  } = props;
  const {
    params
  } = route;
  return (
    <SafeAreaView
      style={{
        backgroundColor: "#fff",
        height: "100%"
      }}
    >
      <PageHeader
        navigation={props.navigation}
        title={params && params.address ? "Edit Shipping Address" : "Add Shipping Address"}
      />
      <ScrollView
        style={{
          padding: 16
        }}
      >
        <Input
          label={"Name"}
          styles={{
            marginBottom: 20
          }}
          value={params && params.address ? params.address.name : ""}
        />
        <Input
          label={"Address"}
          styles={{
            marginBottom: 20
          }}
          value={params && params.address ? `${params.address.houseno} ${params.address.line1}` : ""}
        />
        <Input
          label={"City"}
          styles={{
            marginBottom: 20
          }}
          value={params && params.address ? `${params.address.city}` : ""}
        />
        <Input
          label={"State Province/Region"}
          styles={{
            marginBottom: 20
          }}
          value={params && params.address ? `${params.address.state}` : ""}
        />
        <Input
          label={"Zip Code"}
          styles={{
            marginBottom: 20
          }}
          value={params && params.address ? `${params.address.zip}` : ""}
        />
        <Input
          label={"Country"}
          styles={{
            marginBottom: 20
          }}
          value={params && params.address ? `${params.address.country}` : ""}
        />
        <TouchableHighlight
          style={{
            padding: 10,
            backgroundColor: "#ff8c00"
          }}
        >
          <Text
            style={{
              textAlign: "center",
              color: "#fff",
              textTransform: "uppercase",
              fontSize: 16,
              fontWeight: "600"
            }}
          >Save Address</Text>
        </TouchableHighlight>
      </ScrollView>
    </SafeAreaView>
  );
}

export default AddressForm;
