// import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, View, Platform, StatusBar, Text } from "react-native";
import Home from "./assets/Home/Home";

import {
  useDimensions,
  useDeviceOrientation,
} from "@react-native-community/hooks";

export default function App() {
  console.log(useDeviceOrientation());

  const handlePress = () => {
    console.log("Handling pressed");
  };

  return (
    <View style={styles.container}>
      <Home />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});
