import { View, Text } from "react-native";
import React, { useState, useRef } from "react";
import { Ionicons } from "@expo/vector-icons";
import { TouchableOpacity, Animated } from "react-native";
import { startAt } from "firebase/firestore";

const FloatingButton = () => {
  const [show, setShow] = useState(false);
  const [icon_1] = useState(new Animated.Value(40));

  const popIn = () => {
    setShow(true);
    Animated.timing(icon_1, {
      toValue: 130,
      duration: 200,
      useNativeDriver: false,
    });
  };

  return (
    <View className='absolute bottom-24 right-8 z-50'>
      <TouchableOpacity
        onPress={() => {
          popIn();
        }}
      >
        <View className='relative z-50 w-16 h-16 flex items-center justify-center rounded-full bg-colorSecondory'>
          <Ionicons name='ios-add' size={36} color='white' />
        </View>
      </TouchableOpacity>
      <View
        className={`  absolute w-14 -z-40 h-14 flex items-center justify-center rounded-full bg-colorSecondory `}
        style={{ bottom: icon_1 }}
      >
        <Ionicons name='ios-add' size={36} color='white' />
      </View>
      <View
        className={`  absolute w-14 -z-40 h-14 flex items-center justify-center rounded-full bg-colorSecondory ${
          show ? "-ml-20" : null
        }`}
      >
        <Ionicons name='ios-add' size={36} color='white' />
      </View>
    </View>
  );
};

export default FloatingButton;
