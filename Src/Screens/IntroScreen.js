import React, { useState } from "react";
import { StyleSheet, View, Text, Image, ImageBackground } from "react-native";
import AppIntroSlider from "react-native-app-intro-slider";
import { useNavigation } from "@react-navigation/native";
import { INNER_HEIGHT, INNER_WIDTH } from "../Constants/Contstants";
const slides = [
  {
    key: 1,
    title: "Title 1",
    text: "Welcome to the smart university concept",
    image: require("../Assets/student.jpg"),
    backgroundColor: "#59b2ab",
  },
  {
    key: 2,
    title: "Title 2",
    text: "You can order your foods and needs from main canteen and other Canteens with this app",
    image: require("../Assets/IndianFoods.jpg"),
    backgroundColor: "#febe29",
  },
  {
    key: 3,
    title: "Rocket guy",
    text: "You can get details about medical center from this app \n \n Lets Start your journy with us",
    image: require("../Assets/doctor.jpg"),
    backgroundColor: "#22bcb5",
  },
];

const Intro = () => {
  const navigation = useNavigation();
  const [showRealApp, setShowRealApp] = useState(false);

  const _renderItem = ({ item }) => {
    return (
      <View className='flex-1 items-center justify-center'>
        <Text>{item.title}</Text>
        <Image
          style={{ width: INNER_WIDTH, height: INNER_HEIGHT }}
          source={item.image}
        />
        <View
          className='absolute z-30 bg-black -bottom-4 rounded-2xl opacity-50'
          style={{ width: INNER_WIDTH, height: INNER_HEIGHT / 3 }}
        ></View>
        <View
          className='absolute z-30 bottom-4 rounded-2xl '
          style={{ width: INNER_WIDTH, height: INNER_HEIGHT / 4 }}
        >
          <Text className='text-white text-2xl p-10 '>{item.text}</Text>
        </View>
      </View>
    );
  };

  const _onDone = () => {
    setShowRealApp(true);
  };

  if (showRealApp) {
    navigation.navigate("complete");
  } else {
    return (
      <AppIntroSlider renderItem={_renderItem} data={slides} onDone={_onDone} />
    );
  }
};

export default Intro;
