import React from "react";
import {
  StyleSheet,
  View,
  Platform,
  StatusBar,
  Text,
  Image,
  TouchableHighlight,
} from "react-native";

import { useDimensions } from "@react-native-community/hooks";

let Home = ({ navigation }) => {
  return (
    <View style={{ flex: 1 }}>
      <Image
        style={{ width: "100%", height: "40%" }}
        source={require("../Images/home.png")}
      ></Image>

      {/* Main Title */}
      <View style={styles.container}>
        <View style={styles.title}>
          <Text style={styles.titleText}>Yet To-Do</Text>
        </View>
      </View>

      {/* Tagline - Heading */}
      <View style={styles.containerTagline}>
        <Text style={styles.tagline}> Do Something Great !</Text>
      </View>

      {/* Tagline - Quote */}
      <View style={styles.tagquote}>
        <Text style={{ padding: "2em", fontSize: 20 }}>
          {" "}
          Yes it's going to be hard, but it's also going to be worth it{" "}
        </Text>
      </View>

      {/* Start button */}
      <View>
        <TouchableHighlight
          onPress={() => {
            navigation.navigate("Main");
          }}
        >
          <View style={styles.button}>
            <Text style={{ color: "white", fontSize: 20 }}>Let's Go </Text>
          </View>
        </TouchableHighlight>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 0.25,
    backgroundColor: "rgb(119, 190, 137)",
    justifyContent: "center",
    alignItems: "center",
    padding: "1em",
  },

  titleText: {
    color: "white",
    fontSize: 30,
  },

  title: {
    width: "50%",
    backgroundColor: "rgba(131,226,8, 0.8)",
    boxShadow: "5px 5px 5px rgba(100, 100, 100, 0.7)",
    padding: "1rem",
    borderRadius: "10px",
    flex: 0.3,
    textAlign: "center",
    alignItems: "center",
    justifyContent: "center",
  },

  containerTagline: {
    flex: 0.25,
    justifyContent: "center",
    alignItems: "center",
  },

  tagline: {
    color: "rgba(100, 100, 100)",
    fontSize: 30,
    padding: "1em",
  },

  tagquote: {
    height: "20%",
    textAlign: "center",
  },

  button: {
    padding: "1em",
    backgroundColor: "tomato",
    width: "30%",
    alignSelf: "center",
    borderRadius: "10px",
    textAlign: "center",
  },
});

export default Home;
