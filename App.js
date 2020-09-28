import React from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import Home from "./assets/Home/Home";
import Main from "./assets/Home/Main";

const App = createStackNavigator(
  {
    Home: { screen: Home },
    Main: { screen: Main },
  },
  {
    initialRouteName: "Home",
    headerMode: "none",
    navigationOptions: {
      headerVisible: false,
    },
  }
);

export default createAppContainer(App);
