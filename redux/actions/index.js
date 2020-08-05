import * as SQLite from "expo-sqlite";

const db = SQLite.openDatabase("todos.db");

// action types
export const ADD_TODO = "ADD_TODO";
export const DELETE_TODO = "DELETE_TODO";
export const SET_TODOS = "SET_TODOS";

// action creators
export function addTodoAction(todo) {
  return async (dispatch) => {
    try {
      const promise = new Promise((resolve, reject) => {
        db.transaction((tx) => {
          tx.executeSql(
            "INSERT INTO todos (todo) VALUES (?)",
            [todo],
            // success case
            (_, result) => {
              resolve(result);
            },
            // error case
            (_, err) => {
              reject(err);
            }
          );
        });
      });
      const dbResult = await promise;
      dispatch({ type: ADD_TODO, id: dbResult.insertId, todo: todo });
    } catch (error) {
      console.log(error);
      throw error;
    }
  };
}

export function loadTodosAction() {
  return async (dispatch) => {
    try {
      const promise = new Promise((resolve, reject) => {
        db.transaction((tx) => {
          tx.executeSql(
            "SELECT * FROM todos",
            [],
            // success case
            (_, result) => {
              resolve(result);
            },
            // error case
            (_, err) => {
              reject(err);
            }
          );
        });
      });
      const dbResult = await promise;
      dispatch({ type: SET_TODOS, todos: dbResult.rows._array });
    } catch (err) {
      throw err;
    }
  };
}

export function deleteTodoAction(id) {
  return async (dispatch) => {
    try {
      const promise = new Promise((resolve, reject) => {
        db.transaction((tx) => {
          tx.executeSql(
            "DELETE FROM todos WHERE id=?",
            [id],
            // success case
            (_, result) => {
              resolve(result);
            },
            // error case
            (_, err) => {
              reject(err);
            }
          );
        });
      });
      const dBResult = await promise;
      dispatch({ type: DELETE_TODO, id });
    } catch (err) {
      throw err;
    }
  };
}
