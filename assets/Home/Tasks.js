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
    padding: "1em",
    margin: "0.5em",
    backgroundColor: "rgba(230, 89, 0, 0.4)",
    boxShadow: "10px 10px 10px rgb(200, 200, 200)",
    width: "80%",
    borderRadius: "10px",
  },
});

export default Tasks;
