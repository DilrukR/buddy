import { View, Text } from "react-native";
import React, { useEffect } from "react";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
const Splash = () => {
  const navigation = useNavigation();

  useEffect(() => {
    const token = AsyncStorage.getItem("token");
    setTimeout(() => {
      if (token) {
        navigation.navigate("Home");
      }
      navigation.navigate("Login");
    }, 3000);
  }, []);

  return (
    <View className='flex-1 items-center justify-center '>
      <Image
        className='w-64 h-64'
        source={require("../Assets/canteen-buddy-high-resolution-logo-transparent.png")}
        contentFit='contain'
        transition={1000}
      />
      <View className='absolute bottom-12'>
        <Text>Developed by Student Union FCBS</Text>
      </View>
    </View>
  );
};

export default Splash;
