import React from "react";
import { View, Text, StyleSheet } from "react-native";

function Tasks(props) {
  return (
    <View style={styles.task}>
      <Text style={{ fontSize: 20 }}> {props.text} </Text>
    </View>
  );
}

let styles = StyleSheet.create({
  task: {
    padding: 10,
    margin: 10,
    backgroundColor: "rgba(250, 70, 0, 0.4)",
    width: "100%",
    borderRadius: 10,
  },
});

export default Tasks;
