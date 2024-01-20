import { View, Text } from "react-native";
import React from "react";
import { Image } from "expo-image";

const SBItem = ({ data }) => {
  console.log(data.source);

  return (
    <Image source={data.source} className='w-full h-48 ' contentFit='cover' />
  );
};

export default SBItem;
