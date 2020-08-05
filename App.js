import React from "react";
import { StyleSheet, View } from "react-native";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import * as SQLite from "expo-sqlite";

import { TodoNavigator } from "./navigation";

const db = SQLite.openDatabase("todos.db");

const initDB = () => {
  const promise = new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        "CREATE TABLE IF NOT EXISTS todos (id INTEGER PRIMARY KEY NOT NULL, todo TEXT NOT NULL);",
        [],
        // success case
        () => {
          resolve();
        },
        // error case
        (_, err) => {
          reject(err);
        }
      );
    });
  });
  return promise;
};

initDB();

export default function App() {
  return (
    <Provider store={store}>
      <View style={styles.container}>
        <TodoNavigator />
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
