// import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, View, Platform, StatusBar, Text } from "react-native";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import Home from "./assets/Home/Home";
import Main from "./assets/Home/Main";

import {
  useDimensions,
  useDeviceOrientation,
} from "@react-native-community/hooks";

const App = createStackNavigator(
  {
    Home: { screen: Home },
    Main: { screen: Main },
  },
  {
    initialRouteName: "Main",
    headerMode: "none",
    navigationOptions: {
      headerVisible: false,
    },
  }
);

export default createAppContainer(App);
