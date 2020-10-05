import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableHighlight,
  ScrollView,
  TextInput,
} from "react-native";
import * as SQLite from "expo-sqlite";
import { useState, useEffect } from "react";
import Tasks from "./Tasks";

const db = SQLite.openDatabase("localStorage.db");

function Main() {
  let [tasks, updateTasks] = useState([]);
  let [viewScreen, toggleViewScreen] = useState({ view: 0 });
  let [input, handleInput] = useState("");
  let [displayCrossFlag, toggleDisplayFlag] = useState(false);

  useEffect(() => {
    db.transaction((tx) => {
      tx.executeSql(
        "CREATE TABLE IF NOT EXISTS Tasks (ID Integer PRIMARY KEY AUTOINCREMENT, Text TEXT NOT NULL)"
      );

      tx.executeSql(
        "SELECT * FROM Tasks",
        null,
        (txObj, { rows: { _array } }) => {
          updateTasks(
            _array.map((item) => {
              return item["Text"];
            })
          );
        }
      );
    });
  }, []);

  // Remove a task at the specified entry
  let removeEntry = (index) => {
    let toBeRemoved = tasks[index];
    let newTasks = tasks.filter((task, i) => i !== index);
    updateTasks(newTasks);

    db.transaction((tx) => {
      tx.executeSql("DELETE FROM Tasks WHERE Text = ?", [toBeRemoved]);
    });
  };

  return (
    // Main View
    <View style={{ flex: 1 }}>
      <View style={styles.header}>
        <Text style={styles.headerText}> Tasks for Today </Text>
      </View>

      {viewScreen.view === 0 ? (
        // JSX for displaying the list - Default
        <View style={{ flex: 1 }}>
          <ScrollView style={{ height: "50%" }}>
            <View style={styles.taskView}>
              {tasks.map((task, index) => (
                <View
                  style={{
                    flex: 1,
                    flexDirection: "row",
                    alignItems: "center",
                  }}
                  key={index}
                >
                  <Tasks text={task} />
                  {displayCrossFlag && (
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
                  )}
                </View>
              ))}
            </View>
          </ScrollView>

          {displayCrossFlag === false ? (
            <View style={{ flex: 1, justifyContent: "flex-end" }}>
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
                  }}
                >
                  <Text style={{ color: "white" }}> Remove Entry </Text>
                </TouchableHighlight>
              </View>
            </View>
          ) : (
            <View
              style={[
                { flex: 1, justifyContent: "flex-end" },
                styles.actionButton,
              ]}
            >
              <TouchableHighlight
                style={styles.button}
                onPress={() => {
                  toggleDisplayFlag(false);
                }}
              >
                <Text> Done </Text>
              </TouchableHighlight>
            </View>
          )}
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

              db.transaction((tx) => {
                tx.executeSql(
                  "INSERT INTO Tasks (Text) values (?)",
                  [input],
                  (txObj, resultSet) => {},
                  (txObj, error) => console.log("Error", error)
                );
              });

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
    flex: 0.8,
    alignItems: "center",
  },
  actionButton: {
    flex: 0.8,
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
