import {
  View,
  Text,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { INNER_WIDTH, INNER_HEIGHT } from "../Constants/Contstants";
import { useFonts } from "expo-font";
import { FIREBASE_AUTH } from "../../fireBaseConfig";
import { signInWithEmailAndPassword } from "firebase/auth";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import Spinner from "react-native-loading-spinner-overlay";
const LoginForm = ({ loading, setLoading }) => {
  const navigation = useNavigation();

  const auth = FIREBASE_AUTH;

  const [userName, setUserName] = useState("");
  const [password, setpassword] = useState("");

  const [fontLoded] = useFonts({
    "SF-Pro": require("../Assets/SF-Pro-Text-Medium.otf"),
  });

  const signIn = async ({ loading }) => {
    setLoading(true);

    try {
      const response = await signInWithEmailAndPassword(
        auth,
        userName,
        password
      );
      const idToken = response._tokenResponse.idToken;

      console.log(idToken);

      if (idToken) {
        try {
          await AsyncStorage.setItem("token", idToken);
          console.log("Token saved:", idToken);
          navigation.navigate("Home");
        } catch (e) {
          console.log("Error saving token to AsyncStorage:", e);
        }
      } else {
        console.log("ID token not received.");
      }
    } catch (error) {
      console.log("Firebase authentication error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <View
      style={{ height: INNER_HEIGHT, fontFamily: "SF-Pro" }}
      className=' justify-center items-center  bg-bgDarkWhite mt-5 pt-16 '
    >
      {loading ? (
        <View className='absolute top-0 left-0 flex item-center justify-center z-50 bg-white opacity-30'>
          <Spinner visible={loading} />
        </View>
      ) : null}
      <ScrollView className>
        <View>
          <View className='mb-2'>
            <Text className='text-gray-700'>User Name /E-mail</Text>
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

        <View style={{ width: INNER_WIDTH - 80, marginTop: 30 }}>
          <Text
            style={{ fontFamily: "SF-Pro" }}
            className='text-colorSecondory text-md '
          >
            Did you Forget Password
          </Text>
        </View>

        <TouchableOpacity
          onPress={signIn}
          style={{
            elevation: 10,
            shadowColor: "#000",
            shadowRadius: 10,
            shadowOffset: {
              width: 20,
              height: 20,
            },
            overflow: "visible",
          }}
          className='width-full mt-16 mb-10 mx-5 h-16 bg-colorSecondory  rounded-3xl flex items-center justify-center shadow-2xl '
        >
          <Text className='text-white font-bold text-xl'>LogIn</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default LoginForm;
