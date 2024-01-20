import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";

const items = [
  {
    id: 1,
    name: "Rice",
    price: 150.0,
    image:
      "https://images.unsplash.com/photo-1512058564366-18510be2db19?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHJpY2V8ZW58MHx8MHx8fDA%3D",
    Date: "02 Apr 2023",
    type: "Dinner",
  },
  {
    id: 2,
    name: "Parata",
    price: 120,
    image:
      "https://t3.ftcdn.net/jpg/00/90/47/04/360_F_90470417_JGLal9KhBNgMMN6tIV7QTG1dFlLLxdS7.webp",
    Date: "03 Apr 2023",
    type: "Dinner",
  },
  {
    id: 3,
    name: "String Hoppers",
    price: 100,
    image:
      "https://t3.ftcdn.net/jpg/02/26/20/84/360_F_226208433_6LAEkxHAWGJWd0lWK1ynZEOVj6N996X5.webp",

    Date: "04 Apr 2023",
    type: "Breakfast",
  },
  {
    id: 1,
    name: "Rice",
    price: 150.0,
    image:
      "https://images.unsplash.com/photo-1512058564366-18510be2db19?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHJpY2V8ZW58MHx8MHx8fDA%3D",
    Date: "02 Apr 2023",
    type: "Dinner",
  },
  {
    id: 2,
    name: "Parata",
    price: 120,
    image:
      "https://t3.ftcdn.net/jpg/00/90/47/04/360_F_90470417_JGLal9KhBNgMMN6tIV7QTG1dFlLLxdS7.webp",
    Date: "03 Apr 2023",
    type: "Dinner",
  },
  {
    id: 3,
    name: "String Hoppers",
    price: 100,
    image:
      "https://t3.ftcdn.net/jpg/02/26/20/84/360_F_226208433_6LAEkxHAWGJWd0lWK1ynZEOVj6N996X5.webp",

    Date: "04 Apr 2023",
    type: "Breakfast",
  },
  {
    id: 1,
    name: "Rice",
    price: 150.0,
    image:
      "https://images.unsplash.com/photo-1512058564366-18510be2db19?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHJpY2V8ZW58MHx8MHx8fDA%3D",
    Date: "02 Apr 2023",
    type: "Dinner",
  },
  {
    id: 2,
    name: "Parata",
    price: 120,
    image:
      "https://t3.ftcdn.net/jpg/00/90/47/04/360_F_90470417_JGLal9KhBNgMMN6tIV7QTG1dFlLLxdS7.webp",
    Date: "03 Apr 2023",
    type: "Dinner",
  },
  {
    id: 3,
    name: "String Hoppers",
    price: 100,
    image:
      "https://t3.ftcdn.net/jpg/02/26/20/84/360_F_226208433_6LAEkxHAWGJWd0lWK1ynZEOVj6N996X5.webp",

    Date: "04 Apr 2023",
    type: "Breakfast",
  },
];

const GroceryDeliveryApp = () => {
  return (
    <View style={styles.container}>
      <Image source={{ uri: "" }} style={styles.backgroundImage} />
      <Text style={styles.title}>My orders</Text>
      <FlatList
        data={items}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <View style={styles.item}>
              <Image source={{ uri: item.image }} style={styles.itemImage} />
              <View style={styles.itemContent}>
                <Text style={styles.itemName}>{item.name}</Text>
                <Text style={styles.itemPrice}>Rs.{item.price.toFixed(2)}</Text>
                <Text>{item.Date}</Text>
                <Text>{item.type}</Text>
              </View>
            </View>
            <View style={styles.buttons}></View>
          </View>
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 40,
    flex: 1,
  },
  backgroundImage: {
    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    resizeMode: "cover",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 50,
    marginBottom: 20,
    color: "#FA4A0C",
    marginHorizontal: 20,
  },
  card: {
    marginHorizontal: 20,
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
    elevation: 2,
    marginBottom: 20,
  },
  item: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  itemImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 20,
  },
  itemContent: {
    flex: 1,
  },
  itemName: {
    fontSize: 16,
    fontWeight: "bold",
  },
  itemPrice: {
    fontSize: 16,
    color: "#999",
  },
  buttons: {
    flexDirection: "row",
  },
  button: {
    backgroundColor: "#FFC107",
    borderRadius: 5,
    padding: 10,
    marginRight: 10,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default GroceryDeliveryApp;
