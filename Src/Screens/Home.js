import { View, Text, Dimensions, ScrollView, Animated } from "react-native";
import React, { useRef } from "react";
import Carousel from "react-native-reanimated-carousel";
import { ParalaxCarousal, Header, Buttons, FlotingButton } from "../Components";
import SBItem from "../Components/SBItem";
import FloatingButton from "../Components/FloatingButton";
import AsyncStorage from "@react-native-async-storage/async-storage";

const headerHeight = 240;

const ENTRIES1 = [
  {
    title: "Beautiful and dramatic Antelope Canyon",
    subtitle: "Lorem ipsum dolor sit amet et nuncat mergitur",
    illustration:
      "https://images.unsplash.com/photo-1606761568499-6d2451b23c66?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2FtcHVzfGVufDB8fDB8fHww",
  },
  {
    title: "Earlier this morning, NYC",
    subtitle: "Lorem ipsum dolor sit amet",
    illustration:
      "https://images.unsplash.com/photo-1503676593575-d732ab11be71?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjR8fGNhbXB1c3xlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    title: "White Pocket Sunset",
    subtitle: "Lorem ipsum dolor sit amet et nuncat ",
    illustration:
      "https://images.unsplash.com/photo-1582623046223-c29cd32e7d9b?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTkwfHxjYW1wdXN8ZW58MHx8MHx8fDA%3D",
  },
  {
    title: "Acrocorinth, Greece",
    subtitle: "Lorem ipsum dolor sit amet et nuncat mergitur",
    illustration:
      "https://images.unsplash.com/photo-1604850192879-6057e2f74c27?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fGNhbXB1c3xlbnwwfDB8MHx8fDA%3D",
  },
  {
    title: "The lone tree, majestic landscape of New Zealand",
    subtitle: "Lorem ipsum dolor sit amet",
    illustration:
      "https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTh8fGNhbXB1c3xlbnwwfDB8MHx8fDA%3D",
  },
];

const Home = () => {
  const width = Dimensions.get("window").width;
  const token = AsyncStorage.getItem("token");

  console.log("token_stored", token);

  const scrollY = useRef(new Animated.Value(0)).current;

  const headerTranslate = Animated.diffClamp(
    scrollY,
    0,
    headerHeight / 2
  ).interpolate({
    inputRange: [0, headerHeight / 2],
    outputRange: [0, -headerHeight / 2],
    extrapolate: "clamp",
  });

  const handleScroll = Animated.event(
    [{ nativeEvent: { contentOffset: { y: scrollY } } }],
    { useNativeDriver: false }
  );

  return (
    <View className='flex-1 bg-white'>
      {/* <FloatingButton /> */}
      <Header headerTranslate={headerTranslate} />
      <ScrollView className='-mt-5' onScroll={handleScroll}>
        <ParalaxCarousal data={ENTRIES1} />
        <View className='pb-28 mt-16'>
          <Buttons />
        </View>
      </ScrollView>
    </View>
  );
};

export default Home;
