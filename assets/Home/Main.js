import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableHighlight,
  ScrollView,
  TextInput,
} from "react-native";
import { useState } from "react";
import Tasks from "./Tasks";

function Main({ navigation }) {
  let [tasks, updateTasks] = useState([]);
  let [viewScreen, toggleViewScreen] = useState({ view: 0 });
  let [input, handleInput] = useState("");

  return (
    // Main View
    <View style={{ flex: 1 }}>
      {/* Tasks for today */}
      <View style={styles.header}>
        <Text style={styles.headerText}> Tasks for Today </Text>
      </View>
      {viewScreen.view === 0 ? (
        // JSX for displaying the list - Default
        <View style={{ flex: 1 }}>
          <ScrollView style={{ flex: 1 }}>
            <View style={styles.taskView}>
              {tasks.map((task, index) => (
                <Tasks key={index} text={task}></Tasks>
              ))}
            </View>
          </ScrollView>
          <View style={styles.actionButton}>
            <TouchableHighlight
              style={styles.button}
              onPress={() => {
                toggleViewScreen({
                  view: 1,
                });
              }}
            >
              <Text style={{ color: "white" }}> Add Entry </Text>
            </TouchableHighlight>

            <TouchableHighlight style={styles.button}>
              <Text style={{ color: "white" }}> Remove Entry </Text>
            </TouchableHighlight>
          </View>
        </View>
      ) : (
        // On pressing Add entry, JSX to accept user data
        <View style={{ flex: 1, alignItems: "center" }}>
          <Text style={styles.addTitle}> Enter the name of the task </Text>
          <TextInput
            allowFontScaling="true"
            style={styles.textinput}
            value={input}
            onChangeText={(text) => handleInput(text)}
          ></TextInput>
          <TouchableHighlight
            style={styles.buttonmar}
            onPress={() => {
              updateTasks([...tasks, input]);
              handleInput("");
              toggleViewScreen({ view: 0 });
            }}
          >
            <Text> Add Task </Text>
          </TouchableHighlight>
        </View>
      )}
    </View>
  );
}

let styles = StyleSheet.create({
  header: {
    flex: 0.3,
    backgroundColor: "rgba(20, 200, 120, 0.9)",
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

  button: {
    padding: "1em",
    backgroundColor: "rgba(20, 200, 120, 0.9)",
    width: "auto",
    alignSelf: "center",
    borderRadius: "10px",
    textAlign: "center",
  },

  buttonmar: {
    padding: "1em",
    backgroundColor: "rgba(20, 200, 120, 0.9)",
    width: "auto",
    alignSelf: "center",
    borderRadius: "10px",
    textAlign: "center",
    margin: "1em",
  },

  addTitle: {
    padding: "1em",
    margin: "1em",
    fontSize: 20,
    textAlign: "center",
  },

  textinput: {
    width: "80%",
    flex: 0.1,
    border: "1px solid black",
  },
});

export default Main;
