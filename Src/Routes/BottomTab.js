import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Image } from "expo-image";
import { Home, ProfileScreen, FoodList, Myorders } from "../Screens";
const BottomTab = () => {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: {
          position: "absolute",
          bottom: 20,
          left: 20,
          right: 20,
          height: 60,
          borderRadius: 20,
          elevation: 0,
          backgroundColor: "#fff",

          ...styles.shadow,
        },
      }}
    >
      <Tab.Screen
        name='HomeScreen'
        component={Home}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <View className='flex items-center justify-center'>
              <Image
                source={require("../Assets/icons8-home-96.png")}
                contentFit='cover'
                style={{
                  width: 38,
                  height: 38,
                }}
                className='-mb-1'
              />

              <Text className='-mt-1'>Home</Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name='Foods'
        component={FoodList}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <View className='flex items-center justify-center'>
              <Image
                source={require("../Assets/icons8-food-bar-100.png")}
                contentFit='cover'
                style={{
                  width: 38,
                  height: 38,
                }}
              />

              <Text className='-mt-1'>Foods</Text>
            </View>
          ),
        }}
      />

      <Tab.Screen
        name='Orders'
        component={Myorders}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <View className='flex items-center justify-center'>
              <Image
                source={require("../Assets/waiter.png")}
                contentFit='cover'
                style={{
                  width: 32,
                  height: 32,
                }}
              />

              <Text className='-mt-1'>My Orders</Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name='Profile'
        component={ProfileScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <View className='flex items-center justify-center'>
              <Image
                source={require("../Assets/studentd.png")}
                contentFit='cover'
                style={{
                  width: 30,
                  height: 30,
                  marginTop: 5,
                }}
              />

              <Text>Profile</Text>
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
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
});

export default BottomTab;
