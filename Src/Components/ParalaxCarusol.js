import React, { useRef, useState, useEffect } from "react";
import Carousel, { ParallaxImage } from "react-native-snap-carousel";
import { useFonts } from "expo-font";
import {
  View,
  Text,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
  Platform,
} from "react-native";

const ENTRIES1 = [
  {
    title: "Beautiful and dramatic Antelope Canyon",
    subtitle: "Lorem ipsum dolor sit amet et nuncat mergitur",
    illustration: "https://i.imgur.com/UYiroysl.jpg",
  },
  {
    title: "Earlier this morning, NYC",
    subtitle: "Lorem ipsum dolor sit amet",
    illustration: "https://i.imgur.com/UPrs1EWl.jpg",
  },
  {
    title: "White Pocket Sunset",
    subtitle: "Lorem ipsum dolor sit amet et nuncat ",
    illustration: "https://i.imgur.com/MABUbpDl.jpg",
  },
  {
    title: "Acrocorinth, Greece",
    subtitle: "Lorem ipsum dolor sit amet et nuncat mergitur",
    illustration: "https://i.imgur.com/KZsmUi2l.jpg",
  },
  {
    title: "The lone tree, majestic landscape of New Zealand",
    subtitle: "Lorem ipsum dolor sit amet",
    illustration: "https://i.imgur.com/2nCt3Sbl.jpg",
  },
];
const { width: screenWidth } = Dimensions.get("window");

const MyCarousel = (props) => {
  const [fontLoded] = useFonts({
    Bebas: require("../Assets/BebasNeue-Regular.ttf"),
  });

  const [entries, setEntries] = useState([]);
  const carouselRef = useRef(null);

  const goForward = () => {
    carouselRef.current.snapToNext();
  };

  useEffect(() => {
    setEntries(props.data);
  }, []);

  const renderItem = ({ item, index }, parallaxProps) => {
    return (
      <View style={styles.item}>
        <ParallaxImage
          source={{ uri: item.illustration }}
          containerStyle={styles.imageContainer}
          style={styles.image}
          parallaxFactor={0.4}
          {...parallaxProps}
        />
        <View className='absolute bottom-0 h-32 w-full opacity-40 rounded-2xl bg-black z-40'></View>
        <Text
          style={styles.title}
          numberOfLines={2}
          className='text-white absolute bottom-11 z-50 text-xl px-10'
        >
          {item.title}
        </Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Text
        style={{ fontFamily: "Bebas" }}
        className='text-3xl ml-7 font-bold mb-5 text-colorSecondory '
      >
        On Going {"\n"}Events
      </Text>
      <Carousel
        ref={carouselRef}
        loop
        autoplay
        sliderWidth={screenWidth}
        sliderHeight={screenWidth}
        itemWidth={screenWidth - 60}
        data={entries}
        renderItem={renderItem}
        hasParallaxImages={true}
      />
    </View>
  );
};

export default MyCarousel;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 36,
  },
  item: {
    width: screenWidth - 60,
    height: screenWidth - 120,
  },
  imageContainer: {
    flex: 1,
    marginBottom: Platform.select({ ios: 0, android: 1 }), // Prevent a random Android rendering issue
    backgroundColor: "white",
    borderRadius: 8,
  },
  image: {
    ...StyleSheet.absoluteFillObject,
    resizeMode: "cover",
  },
});
