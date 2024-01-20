import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import React from "react";
import { disableExpoTranslucentStatusBar } from "react-navigation-collapsible";
import { useNavigation } from "@react-navigation/native";

const Header = () => {
  const navigation = useNavigation();

  return (
    <View
      style={styles.shadow}
      className='w-full h-36 pt-10  flex flex-row items-center justify-between px-9'
    >
      <View>
        <Text className='text-lg'>Hello! {"Rishan"}</Text>
      </View>
      <View></View>
      <View>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Profile");
          }}
        >
          <View className='w-12 h-12 bg-green-600 rounded-full'>
            <Image
              source={{
                uri: "https://gravatar.com/userimage/191591217/fc95b5cbd99ada4f8ada50e667b9cd28.jpeg?size=256",
              }}
              width={20}
              height={20}
              resizeMode='cover'
              className='rounded-full w-full h-full'
            />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  shadow: {
    width: "100%",
    shadowColor: "#7F5DF0",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
  },
});

export default Header;
