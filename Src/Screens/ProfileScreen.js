import React, { useState } from "react";
import { INNER_WIDTH } from "../Constants/Contstants";

import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  FlatList,
  ScrollView,
  Animated,
} from "react-native";

import { useNavigation } from "@react-navigation/native";

const headerHeight = 240;
export default ProfileView = () => {
  const navigation = useNavigation();

  const data = [
    {
      id: 1,
      image: "https://cdn-icons-png.flaticon.com/128/1008/1008010.png",
      title: "Ordes",
    },
    {
      id: 2,
      image: "https://cdn-icons-png.flaticon.com/128/5431/5431337.png",
      title: "contibutions",
    },
    {
      id: 3,
      image: "https://cdn-icons-png.flaticon.com/128/11120/11120815.png",
      title: "Messeges",
    },
    {
      id: 4,
      image: "https://cdn-icons-png.flaticon.com/128/2989/2989976.png",
      title: "Downloads",
    },
    {
      id: 5,
      image: "https://cdn-icons-png.flaticon.com/128/3503/3503827.png",
      title: "Report Problem",
    },
  ];

  const [options, setOptions] = useState(data);

  return (
    <View style={styles.container}>
      <View>
        <View style={styles.header}>
          <View style={styles.headerContent}>
            <View className='flex flex-row justify-between w-full items-center h-full px-10 pt-12'>
              <Image
                style={styles.avatar}
                source={{
                  uri: "https://gravatar.com/userimage/191591217/fc95b5cbd99ada4f8ada50e667b9cd28.jpeg?size=256",
                }}
              />
              <View className='h-1/2 flex justify-center ml-2 '>
                <Text className='text-2xl font-bold text-white'>
                  Rishan Dilruk
                </Text>
                <Text style={styles.name}>18 MS 13256</Text>
                <Text style={styles.name}>Room No 4057</Text>
                <Text style={styles.name}>New Sarasavi Boys Hostel</Text>
              </View>
            </View>
          </View>
        </View>

        <View style={styles.body}>
          <FlatList
            contentContainerStyle={{
              width: INNER_WIDTH,
              display: "flex",
              alignItems: "center",
              paddingHorizontal: 24,
            }}
            scrollEnabled={true}
            enableEmptySections={true}
            data={options}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => {
              return (
                <TouchableOpacity style={styles.shadow}>
                  <View style={styles.box} className='w-full h-16 '>
                    <Image style={styles.icon} source={{ uri: item.image }} />
                    <Text style={styles.title}>{item.title}</Text>
                    <Image
                      style={styles.btn}
                      source={{
                        uri: "https://img.icons8.com/customer/office/40",
                      }}
                    />
                  </View>
                </TouchableOpacity>
              );
            }}
          />
        </View>

        <View
          style={{ width: INNER_WIDTH }}
          className='flex justify-center items-center mt-6'
        >
          <TouchableOpacity onPress={() => navigation.navigate("Login")}>
            <View className='w-48 h-12 bg-colorSecondory flex items-center justify-center rounded-3xl'>
              <Text className='text-white font-bold text-xl'>Logout</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff" },

  header: {
    height: headerHeight,
    backgroundColor: "#FA4A0C",
    borderRadius: 24,
    marginTop: -14,
    shadowColor: "#7F5DF0",
    shadowOffset: {
      width: 10,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
  },
  headerContent: {
    alignItems: "center",
  },
  avatar: {
    width: 130,
    height: 130,
    borderRadius: 63,
    borderWidth: 4,
    borderColor: "#FF6347",
    marginBottom: 10,
  },
  icon: {
    width: 40,
    height: 40,
  },
  title: {
    fontSize: 18,
    color: "#FA4A0C",
    marginLeft: 10,
  },
  btn: {
    marginLeft: "auto",
    width: 40,
    height: 40,
  },
  body: {
    backgroundColor: "#fff",
    marginTop: 24,
  },
  box: {
    marginBottom: 8,
    marginTop: 8,
    marginRight: 24,
    height: 64,
    paddingHorizontal: 20,
    backgroundColor: "#FFFFFF",
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 20,
    shadowColor: "#7F5DF0",
    shadowOffset: {
      width: 10,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
  },
  name: {
    color: "#ffff",
    fontSize: 16,
  },

  shadow: {
    shadowColor: "#7F5DF0",
    shadowOffset: {
      width: 10,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
  },
});
