import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useDrawerProgress} from '@react-navigation/drawer';
import Animated, {interpolate, useAnimatedStyle} from 'react-native-reanimated';

const Scene = ({children}) => {
  const drawerprogree = useDrawerProgress();
  const Animatee = useAnimatedStyle(() => {
    const scale = interpolate(drawerprogree.value, [0, 2], [1, 0.7]);
    return {
      transform: [{scale}],
    };
  });
  return (
    <Animated.View style={[Animatee, {flex: 1}]}>{children}</Animated.View>
  );
};

export default Scene;

const styles = StyleSheet.create({});
