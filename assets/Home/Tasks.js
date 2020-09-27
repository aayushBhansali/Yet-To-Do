import React from "react";
import { View, Text, StyleSheet } from "react-native";

function Tasks() {
  return (
    <View style={styles.task}>
      <Text> This is a task </Text>
    </View>
  );
}

let styles = StyleSheet.create({
  task: {
    padding: "1em",
    margin: "0.5em",
  },
});

export default Tasks;
