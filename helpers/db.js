import * as SQLite from "expo-sqlite";

const db = SQLite.openDatabase("todos.db");

export const init = () => {
  const promise = new Promise((resolve, reject) => {
    db.transaction(tx => {
      tx.executeSql(
        "CREATE TABLE IF NOT EXISTS todos (id INTEGER PRIMARY KEY NOT NULL, todo TEXT NOT NULL);",
        [],
        // success case
        () => {
          resolve();
        },
        // not success (error) case
        (_, err) => {
          reject(err);
        }
      );
    });
  });
  return promise;
};


export const insertTodo = (todo) => {
  const promise = new Promise((resolve, reject) => {
    db.transaction(tx => {
      tx.executeSql(
        "INSERT INTO todos (todo) VALUES (?)",
        [todo],
        // success case
        (_, result) => {
          resolve(result);
        },
        // not success (error) case
        (_, err) => {
          reject(err);
        }
      );
    });
  });
  return promise;
}

export const deleteTodo = (id) => {
  const promise = new Promise((resolve, reject) => {
    db.transaction(tx => {
      tx.executeSql(
        "DELETE FROM todos where id=?",
        [id],
        // success case
        (_, result) => {
          resolve(result);
        },
        // not success (error) case
        (_, err) => {
          reject(err);
        }
      );
    });
  });
  return promise;
}

export const fetchTodos = () => {
  const promise = new Promise((resolve, reject) => {
    db.transaction(tx => {
      tx.executeSql(
        "SELECT * FROM todos",
        [],
        // success case
        (_, result) => {
          resolve(result);
        },
        // not success (error) case
        (_, err) => {
          reject(err);
        }
      );
    });
  });
  return promise;
}