import React, {
  useState
} from "react";
import {
  View,
  SafeAreaView,
} from "react-native";

// import CheckBox from '@react-native-community/checkbox';

import FilterHeader from "../components/Filters/FilterHeader";
import productFilters from "../data/filters";

import {
  Checkbox
} from "../library";

const FilterSelector = (props) => {
  const {
    route
  } = props;

  const {
    filterSelected,
    category
  } = route.params;

  const [brandFilters, setBrandFilters] = useState([]);

  const handleCHeckboxSelect = (e) => {
    let filterCopy = [...brandFilters];
    if (filterCopy.includes(e.value)) {
      // remove it
      filterCopy = filterCopy.filter(f => f !== e.value);
    } else {
      filterCopy.push(e.value);
    }
    setBrandFilters(filterCopy);
  }

  return (
    <SafeAreaView>
      <FilterHeader
        props={props}
      />
      <View
        style={{
          backgroundColor: "#fff"
        }}
      >
        {
          productFilters[filterSelected][category].map((f, index) => (
            <View
              style={{
                padding: 16,

                backgroundColor: brandFilters.includes(f.value) ? "#f2f2f2" : "#fff"
              }}
              key={`${f.name}-${index}`}
            >
              {/* <Text
                style={{
                  fontSize: 16,
                  color: "#333",
                  fontWeight: "600"
                }}
              >
                {f.name}
              </Text> */}
              <Checkbox
                color="#ff8c00"
                labelColor="#333"
                label={f.name}
                value={f.value}
                checked={brandFilters.includes(f.value)}
                onPress={() => {
                  handleCHeckboxSelect(f);
                }}
              />
            </View>
          ))
        }
      </View>
    </SafeAreaView>
  )
};

export default FilterSelector;
