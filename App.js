import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import StackScreens from "./Src/Routes/StackScreens";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { gestureHandlerRootHOC } from "react-native-gesture-handler";
import CompleteProfile from "./Src/Screens/CompleteProfile";
import * as SplashScreen from "expo-splash-screen";

export default function App() {

  console.disableYellowBox = true;

  return (
    <>
      <StatusBar />
      <StackScreens />
    </>
  );
}
