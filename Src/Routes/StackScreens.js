import { View, Text } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  SplashScreen,
  Home,
  Login,
  Intro,
  Complete,
  MedicleCenter,
} from "../Screens";
import BottomTab from "./BottomTab";

const StackScreens = () => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* <Stack.Screen
          name='splash'
          component={SplashScreen}
          options={{ headerShown: false }}
        /> */}
        <Stack.Screen
          name='Login'
          component={Login}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name='Intro'
          component={Intro}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name='complete'
          component={Complete}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name='Home'
          component={BottomTab}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name='Medicle'
          component={MedicleCenter}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackScreens;
