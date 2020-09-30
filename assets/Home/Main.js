import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableHighlight,
  ScrollView,
  TextInput,
} from "react-native";
import Swipeable from "react-native-gesture-handler/Swipeable";
import { useState } from "react";
import Tasks from "./Tasks";

function Main() {
  let [tasks, updateTasks] = useState([]);
  let [viewScreen, toggleViewScreen] = useState({ view: 0 });
  let [input, handleInput] = useState("");
  let [displayCrossFlag, toggleDisplayFlag] = useState(false);

  // Remove a task at the specified entry
  let removeEntry = (index) => {
    let newTasks = tasks.filter((task, i) => i !== index);
    updateTasks(newTasks);
  };

  return (
    // Main View
    <View style={{ flex: 1 }}>
      {/* Tasks for today */}
      <View style={styles.header}>
        <Text style={styles.headerText}> Tasks for Today </Text>
      </View>

      {/* Display the tasks and if add entry is pressed show dialog to add a new task */}
      {viewScreen.view === 0 ? (
        // JSX for displaying the list - Default
        <View style={{ flex: 1 }}>
          <ScrollView style={{ flex: 1 }}>
            <View style={styles.taskView}>
              {tasks.map((task, index) => (
                <View
                  style={{
                    flex: 1,
                    flexDirection: "row",
                    alignItems: "center",
                  }}
                >
                  <Tasks text={task}></Tasks>
                  {displayCrossFlag ? (
                    <TouchableHighlight
                      key={index}
                      style={[
                        {
                          width: "20%",
                          padding: 15,
                          backgroundColor: "rgba(255, 0, 0, 0.3)",
                          borderRadius: 10,
                          justifyContent: "center",
                          alignItems: "center",
                        },
                      ]}
                      onPress={() => removeEntry(index)}
                    >
                      <Text> X </Text>
                    </TouchableHighlight>
                  ) : (
                    <View> </View>
                  )}
                </View>
                // </Swipeable>
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

            <TouchableHighlight
              style={styles.button}
              onPress={() => {
                toggleDisplayFlag(true);
                setTimeout(() => {
                  toggleDisplayFlag(false);
                }, 7000);
              }}
            >
              <Text style={{ color: "white" }}> Remove Entry </Text>
            </TouchableHighlight>
          </View>
        </View>
      ) : (
        // On pressing Add entry, JSX to accept user data
        <View style={{ flex: 1, alignItems: "center" }}>
          <Text style={styles.addTitle}> Enter the name of the task </Text>
          <TextInput
            allowFontScaling={true}
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
    fontSize: 30,
    fontFamily: "Roboto",
  },
  taskView: {
    padding: 10,
    margin: 10,
    flex: 0.5,
    alignItems: "center",
    justifyContent: "center",
  },
  actionButton: {
    flex: 0.2,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
    padding: 10,
  },
  button: {
    padding: 10,
    backgroundColor: "rgba(20, 200, 120, 0.9)",
    width: "auto",
    alignSelf: "center",
    borderRadius: 10,
    textAlign: "center",
  },
  buttonmar: {
    padding: 10,
    backgroundColor: "rgba(20, 200, 120, 0.9)",
    width: "auto",
    alignSelf: "center",
    borderRadius: 10,
    textAlign: "center",
    margin: 10,
  },
  addTitle: {
    padding: 10,
    margin: 10,
    fontSize: 20,
    textAlign: "center",
  },
  textinput: {
    paddingHorizontal: 10,
    width: "80%",
    flex: 0.2,
    borderColor: "rgba(100, 100, 100, 0.8)",
    borderWidth: 2,
    borderRadius: 8,
    // fontSize: 20,
    // height: 30,
  },
});

export default Main;
