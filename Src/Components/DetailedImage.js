import React, { useEffect, useState } from "react";
import { View, Image, Animated, Text } from "react-native";
import { INNER_HEIGHT, INNER_WIDTH } from "../Constants/Contstants";

const DetailedImage = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const fadeAnim = useState(new Animated.Value(0))[0];

  const imgArray = [
    {
      image:
        "https://images.unsplash.com/photo-1551884170-09fb70a3a2ed?q=80&w=1776&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur fugiat sint voluptatibus fugit rerum rem optio, quasi dolorem explicabo iste.",
    },
    {
      image:
        "https://images.unsplash.com/photo-1544991875-5dc1b05f607d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur fugiat sint voluptatibus fugit rerum rem optio, quasi dolorem explicabo iste.",
    },
    {
      image:
        "https://images.unsplash.com/photo-1573883431205-98b5f10aaedb?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur fugiat sint voluptatibus fugit rerum rem optio, quasi dolorem explicabo iste.",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      Animated.timing(fadeAnim, {
        toValue: 0,
        duration: 500,
        useNativeDriver: true,
      }).start(({ finished }) => {
        if (finished) {
          setCurrentIndex((prevIndex) =>
            prevIndex === imgArray.length - 1 ? 0 : prevIndex + 1
          );
          Animated.timing(fadeAnim, {
            toValue: 1,
            duration: 500,
            useNativeDriver: true,
          }).start();
        }
      });
    }, 10000);

    return () => clearInterval(interval);
  }, [currentIndex, imgArray.length, fadeAnim]);

  return (
    <View>
      <Animated.View
        style={{
          opacity: fadeAnim,
          width: INNER_WIDTH,
          height: INNER_HEIGHT / 2.5,
        }}
      >
        <Image
          source={{ uri: imgArray[currentIndex].image }}
          style={{ width: INNER_WIDTH, height: INNER_HEIGHT / 2.8 }}
          resizeMode='stretch'
        />

        <View className='absolute bottom-10 w-full h-32 flex justify-center items-center'>
          <View className='w-full h-full bg-black absolute opacity-40'></View>
          <Text className='relative z-50 text-white px-10 text-lg'>
            {imgArray[currentIndex].text}
          </Text>
        </View>
      </Animated.View>
    </View>
  );
};

export default DetailedImage;
