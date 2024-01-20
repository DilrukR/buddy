import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  FlatList,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";

const INNER_WIDTH = Dimensions.get("screen").width;

const buttons = [
  {
    title: "Foods",
    Icon: require("../Assets/icons8-street-food-64.png"),
    nav: "Foods",
  },
  {
    title: "Medical",
    Icon: require("../Assets/MedicalIcon.png"),
    nav: "Medicle",
  },
  { title: "Acadamic", Icon: require("../Assets/book.png") },
  { title: "Exam", Icon: require("../Assets/exam2.png") },
  { title: "Sports", Icon: require("../Assets/sports.png") },
  { title: "Library", Icon: require("../Assets/Library.png") },
  { title: "Hostals", Icon: require("../Assets/icons8-hostal-48.png") },
  { title: "test", Icon: require("../Assets/book.png") },
  { title: "test", Icon: require("../Assets/book.png") },
];

const Buttons = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <FlatList
        style={{ display: "flex" }}
        data={buttons}
        numColumns={3}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              style={styles.item}
              onPress={() => {
                navigation.navigate(item.nav);
              }}
            >
              <View>
                <Image source={item.Icon} className='w-16 h-16' />
              </View>
              <View>
                <Text>{item.title}</Text>
              </View>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: INNER_WIDTH,
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    alignItems: "center",
    justifyContentAlign: "center",
    padding: 10,
  },
  item: {
    width: INNER_WIDTH / 3 - 30, // Adjust width to fit three columns with equal spacing
    height: INNER_WIDTH / 3.9,
    backgroundColor: "#fff",
    marginBottom: 10,
    marginLeft: 20, // Vertical spacing
    alignItems: "center", // Center the text horizontally
    justifyContent: "center", // Center the text vertically
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
});

export default Buttons;
