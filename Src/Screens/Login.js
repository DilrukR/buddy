import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React, { useState, useEffect } from "react";
import { Image } from "expo-image";
import { useFonts } from "expo-font";
import Spinner from "react-native-loading-spinner-overlay";
import { LoginForm, SignUpForm } from "../Components";

const Login = () => {
  const [fontLoded] = useFonts({
    "SF-Pro": require("../Assets/SF-Pro-Text-Medium.otf"),
  });

  const [showLogin, setShowLogin] = useState(true);
  const [loading, setLoading] = useState(false);

  return (
    <View className='flex-1 bg-bgDarkWhite'>
      <Spinner visible={loading} />
      <View
        style={styles.shadow}
        className='h-96 w-full relative z-30 -mt-16 shadow-black flex items-center justify-center  rounded-full,'
      >
        <Image
          source={require("../Assets/Untitled-1.png")}
          className='w-64 h-64 -mb-16'
          contentFit='contain'
        />

        <View className='w-full h-10 absolute bottom-0 flex flex-row  justify-between items-center px-16'>
          <TouchableOpacity
            onPress={() => {
              setShowLogin(true);
            }}
          >
            <View
              className={`border-b-colorSecondory h-11 w-24 flex items-center justify-center ${
                showLogin ? "border-b-4" : null
              }`}
            >
              <Text className='text-lg' style={{ fontFamily: "SF-Pro" }}>
                Login
              </Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              setShowLogin(false);
            }}
          >
            <View
              className={`border-b-colorSecondory h-11 w-28 flex items-center justify-center ${
                !showLogin ? "border-b-4" : null
              }`}
            >
              <Text className='text-lg'>Sign Up</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
      {showLogin ? (
        <LoginForm loading={loading} setLoading={setLoading} />
      ) : (
        <SignUpForm />
      )}
    </View>
  );
};
const styles = StyleSheet.create({
  shadow: {
    shadowColor: "#7F5DF0",
    backgroundColor: "#FFFFFF",
    borderRadius: 30,
    shadowOffset: {
      width: 0,
      height: 30,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.2,
    elevation: 8,
  },
});

export default Login;
