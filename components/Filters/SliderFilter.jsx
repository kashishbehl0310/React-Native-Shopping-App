import React, {
  useState
} from "react";
import styled from "styled-components/native";
import MultiSlider from '@ptomasroos/react-native-multi-slider'

import {
  View,
  Platform
} from "react-native";

const ViewContainer = styled.View`
  align-self: center;
  justify-content: center;
  width: 100%;
  background-color: #fff;
`;

const SliderWrapper = styled.View`
  justify-content: center;
  width: 100%;
  padding: 16px 16px 16px 16px;
`;

const LabelWrapper = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

const LabelText = styled.Text`
  font-size: 20px;
  color: #333;
  font-weight: 600;
`;


const SliderFilter = () => {
  const [multiSliderValue, setMultiSliderValue] = useState([0, 1000]);
  const multiSliderValuesChange = (values) => setMultiSliderValue(values)
  return (
    <ViewContainer>
      <SliderWrapper>
        <LabelText
          style={{
            marginBottom: 12
          }}
        >
          Price Range
        </LabelText>
        <LabelWrapper>
          <LabelText>
            ${multiSliderValue[0]}
          </LabelText>
          <LabelText>
            ${multiSliderValue[1]}
          </LabelText>
        </LabelWrapper>
        <View
          style={{
            paddingHorizontal: 16
          }}
        >
          <MultiSlider
           markerStyle={{
              ...Platform.select({
                ios: {
                  height: 30,
                  width: 30,
                  shadowColor: '#000000',
                  shadowOffset: {
                    width: 0,
                    height: 3
                  },
                  shadowRadius: 1,
                  shadowOpacity: 0.1,
                  backgroundColor: '#FF8C00'
                },
                android: {
                  height: 30,
                  width: 30,
                  borderRadius: 50,
                  backgroundColor: '#FF8C00'
                }
              })
            }}
            selectedStyle={{
              backgroundColor: '#FF8C00'
            }}
            trackStyle={{
              backgroundColor: '#fff'
            }}
            touchDimensions={{
              height: 40,
              width: 40,
              borderRadius: 20,
              slipDisplacement: 40
            }}
            values={[multiSliderValue[0], multiSliderValue[1]]}
            sliderLength={360}
            onValuesChange={multiSliderValuesChange}
            min={0}
            max={1000}
            allowOverlap={false}
            minMarkerOverlapDistance={10}
            />
          </View>
      </SliderWrapper>
    </ViewContainer>
  );
}

export default SliderFilter;