import React from 'react'
import { Pressable, Text, View, StyleSheet } from 'react-native'
import styled from 'styled-components'
import RocketSVG from '../assets/icons'
import Animated, {
    useSharedValue,
    withTiming,
    useAnimatedStyle,
    Easing,
  } from 'react-native-reanimated';
// try out reanimated

const Box = styled.View`
    background-color: red;
    width: 40px;
    height: 40px;
`

export const Sample = () => {
    const randomWidth = useSharedValue(10);

    const config = {
      duration: 500,
      easing: Easing.bezier(0.5, 0.01, 0, 1),
    };
  
    const style = useAnimatedStyle(() => {
      return {
        width: withTiming(randomWidth.value, config),
      };
    });
  
    return (
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
        }}>
        <Animated.View
          style={[{ width: 100, height: 80, backgroundColor: 'black', margin: 30 }, style]}
        />
        <Pressable
          //title="toggle"
          onPress={() => {
            randomWidth.value = Math.random() * 350;
          }}
        >
            <Text>press me</Text>
        </Pressable>
      </View>
    );
}