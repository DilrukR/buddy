import { View, Text, FlatList, TouchableOpacity } from "react-native";
import React from "react";
import { BlurView } from "expo-blur";
import { Image } from "expo-image";
import { INNER_HEIGHT, INNER_WIDTH } from "../Constants/Contstants";
const Fooditem = ({ foodData, loading }) => {
  return (
    <BlurView
      intensity={100}
      style={{
        width: INNER_WIDTH / 2.5,
        height: INNER_HEIGHT / 3,

        shadow: {
          shadowColor: "#7F5DF0",
          shadowOffset: {
            width: 0,
            height: 10,
          },
          shadowOpacity: 0.25,
          shadowRadius: 3.5,
          elevation: 5,
        },
      }}
      className='flex items-center justify-center mt-4 bg-white rounded-2xl overflow-hidden '
    >
      <Image
        source={{ uri: foodData.food.image }}
        style={{ width: INNER_WIDTH / 3.6, height: INNER_HEIGHT / 7 }}
        className='rounded-xl'
      />
      <View className='mt-8 flex items-center justify-center px-5 '>
        <Text className='MT-8'>{foodData.food.label}</Text>
      </View>
    </BlurView>
  );
};

export default Fooditem;
