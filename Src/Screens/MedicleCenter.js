import { View, Text, ScrollView } from "react-native";
import React from "react";
import { DetailedImage, Header } from "../Components";
import { Image } from "expo-image";
import { INNER_WIDTH, INNER_HEIGHT } from "../Constants/Contstants";
import Carousel from "react-native-reanimated-carousel";
import { BlurView } from "expo-blur";

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

const MedicleCenter = () => {
  return (
    <View className=' bg-white'>
      <Header />
      <ScrollView>
        <View>
          <Carousel
            loop
            width={INNER_WIDTH}
            height={INNER_HEIGHT / 3}
            autoPlay={true}
            data={imgArray}
            autoPlayInterval={5000}
            scrollAnimationDuration={1000}
            renderItem={({ index, item }) => (
              <View>
                <View
                  style={{
                    width: INNER_WIDTH,
                    height: INNER_HEIGHT / 2.5,
                  }}
                >
                  <Image
                    source={{ uri: item.image }}
                    style={{ width: INNER_WIDTH, height: INNER_HEIGHT / 2.8 }}
                    resizeMode='cover'
                  />

                  <View className='absolute bottom-14 w-full h-40 rounded-3xl flex justify-center items-center'>
                    <View className='w-full h-full bg-black absolute opacity-75'></View>
                    <Text className='relative z-50 text-white px-10 text-lg font-bold'>
                      {item.text}
                    </Text>
                  </View>
                </View>
              </View>
            )}
          />
        </View>

        <View
          className='flex items-center justify-center mt-9'
          style={{ width: INNER_WIDTH }}
        >
          <BlurView
            intensity={100}
            style={{ width: INNER_WIDTH - 40, height: INNER_HEIGHT - 24 }}
            className='px-5'
          >
            <View className='mt-5 flex items-center justify-between flex-row'>
              <Text className='text-xl'>Doctor's Status</Text>
              <View className=''>
                <Text>Active</Text>
              </View>
            </View>
          </BlurView>
        </View>
      </ScrollView>
    </View>
  );
};

export default MedicleCenter;
