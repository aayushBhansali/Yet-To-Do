import * as SQLite from "expo-sqlite";

export const db = SQLite.openDatabase("localStorage.db");

export const initDB = () => {
  let fetch = [];
  // Create a table if it is the first session
  db.transaction((tx) => {
    tx.executeSql(
      "CREATE TABLE IF NOT EXISTS Tasks (ID Integer PRIMARY KEY AUTOINCREMENT, Text TEXT NOT NULL)"
    );
  });
};

export const addToDB = (task) => {
  db.transaction((tx) => {
    tx.executeSql(
      "INSERT INTO Tasks (Text) values (?)",
      [input],
      (txObj, resultSet) => {
        console.log("Added entry");
      },
      (txObj, error) => console.log("Error", error)
    );
  });
};

export const removeFromDB = (toBeRemoved) => {
  db.transaction((tx) => {
    tx.executeSql("DELETE FROM Tasks WHERE Text = ?", [toBeRemoved]);
  });
};
