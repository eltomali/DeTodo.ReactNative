import { insertTodo, fetchTodos, deleteTodo } from "../../helpers/db";

// action types

export const ADD_TODO = "ADD_TODO";
export const DELETE_TODO = "DELETE_TODO";
export const UPDATE_TODO = "UPDATE_TODO";
export const SET_TODOS = "SET_TODOS";


export function addTodoAction(todo) {
  return async (dispatch) => {
    try {
      const dbResult = await insertTodo(todo);
      console.log("dbResult: ", dbResult);
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
      const dbResult = await fetchTodos();
      console.log("Fetching dbResult: ", dbResult);
      dispatch({ type: SET_TODOS, todos: dbResult.rows._array });
    } catch (err) {
      throw err;
    }
  };
}

export function deleteTodoAction(id) {
  console.log("id to delete type of: ", typeof(id));
  return async (dispatch) => {
    try {
      const dBResult = await deleteTodo(id);
      console.log("dBresult after deleting: ", dBResult);
      dispatch({ type: DELETE_TODO, id });
    } catch (err) {
      throw err;
    }
  };
}

export function updateTodoAction(todo, id) {
  return {
    type: UPDATE_TODO,
    todo,
    id,
  };
}
