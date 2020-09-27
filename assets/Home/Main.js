import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { useState } from "react";
import Tasks from "./Tasks";
import { Directions } from "react-native-gesture-handler";

function Main() {
  let [tasks, updateTasks] = useState({});
  return (
    // Main View
    <View style={{ flex: 1 }}>
      {/* Tasks for today */}
      <View style={styles.header}>
        <Text style={styles.headerText}> Tasks for Today </Text>
      </View>

      <View style={styles.taskView}>
        <Tasks />
        <Tasks />
        <Tasks />
        <Tasks />
      </View>

      <View style={styles.actionButton}>
        <Text>Add Entry</Text>
        <Text>Remove Entry</Text>
      </View>
    </View>
  );
}

let styles = StyleSheet.create({
  header: {
    flex: 0.3,
    backgroundColor: "tomato",
    justifyContent: "center",
    alignItems: "center",
  },

  headerText: {
    color: "white",
    fontSize: "2.5em",
    fontFamily: "Helvetica",
  },

  taskView: {
    padding: "1em",
    margin: "1em",
    flex: 0.5,
    alignItems: "center",
    justifyContent: "center",
  },

  actionButton: {
    flex: 0.2,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
    padding: "1em",
  },
});

export default Main;
