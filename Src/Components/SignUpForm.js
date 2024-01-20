import {
  View,
  Text,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React, { useState, useEffect } from "react";
import { INNER_WIDTH, INNER_HEIGHT } from "../Constants/Contstants";
import { useFonts } from "expo-font";
import { FIREBASE_AUTH } from "../../fireBaseConfig";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigation } from "@react-navigation/native";
const SignUpForm = () => {
  const navigation = useNavigation();
  const auth = FIREBASE_AUTH;
  const [loading, setLoading] = useState(false);
  const [userName, setUserName] = useState("");
  const [password, setpassword] = useState("");
  const [confirmPassword, setconfirmPassword] = useState("");
  const [reGistrationNumber, setreGistrationNumber] = useState("");

  const [fontLoded] = useFonts({
    "SF-Pro": require("../Assets/SF-Pro-Text-Medium.otf"),
  });

  const signUp = async () => {
    setLoading(true);
    try {
      const response = await createUserWithEmailAndPassword(
        auth,
        userName,
        password
      );

      const idToke = response._tokenResponse.idToken;

      if (idToke) {
        navigation.navigate("Intro");
      }

      console.log(response);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <View
      style={{ height: INNER_HEIGHT }}
      className=' justify-center items-center  bg-bgDarkWhite mt-5 '
    >
      <ScrollView
        className='flex-1 mb-96 px-10  pt-16'
        style={{ width: INNER_WIDTH }}
      >
        <View className='mb-96'>
          <View>
            <View className='mb-2'>
              <Text className='text-gray-700'>E-mail</Text>
            </View>

            <TextInput
              className='  h-10 text-lg border-b border-b-slate-500 text-black'
              value={userName}
              style={{ width: INNER_WIDTH - 80 }}
              placeholder='Your username'
              placeholderTextColor={"black"}
              onChangeText={(text) => {
                setUserName(text);
              }}
            />
          </View>

          <View className='mt-7'>
            <View className='mb-2'>
              <Text className='text-gray-700'>Password</Text>
            </View>

            <TextInput
              className='  h-10 text-lg border-b border-b-slate-500 text-black'
              value={password}
              style={{ width: INNER_WIDTH - 80 }}
              placeholder='Your password'
              placeholderTextColor={"black"}
              secureTextEntry={true}
              onChangeText={(text) => {
                setpassword(text);
              }}
            />
          </View>
          <View className='mt-7'>
            <View className='mb-2'>
              <Text className='text-gray-700'>Confirm password</Text>
            </View>

            <TextInput
              className='  h-10 text-lg border-b border-b-slate-500 text-black'
              value={confirmPassword}
              style={{ width: INNER_WIDTH - 80 }}
              placeholder='Your password'
              placeholderTextColor={"black"}
              secureTextEntryStyle={true}
              secureTextEntry={true}
              onChangeText={(text) => {
                setconfirmPassword(text);
              }}
            />
          </View>

          <TouchableOpacity
            onPress={signUp}
            className='width-full mt-16 h-16 bg-colorSecondory  rounded-3xl flex items-center justify-center '
          >
            <Text className='text-white font-bold text-xl'>Sign Up</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default SignUpForm;
