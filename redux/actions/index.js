import { insertTodo, fetchTodos, deleteTodo, updateTodo } from "../../helpers/db";

// action types
export const ADD_TODO = "ADD_TODO";
export const DELETE_TODO = "DELETE_TODO";
export const UPDATE_TODO = "UPDATE_TODO";
export const SET_TODOS = "SET_TODOS";

// action creators
export function addTodoAction(todo) {
  return async (dispatch) => {
    try {
      const dbResult = await insertTodo(todo);
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
      dispatch({ type: SET_TODOS, todos: dbResult.rows._array });
    } catch (err) {
      throw err;
    }
  };
}

export function deleteTodoAction(id) {
  return async (dispatch) => {
    try {
      const dBResult = await deleteTodo(id);
      dispatch({ type: DELETE_TODO, id });
    } catch (err) {
      throw err;
    }
  };
}

export function updateTodoAction(todo, id) {
  return async (dispatch) => {
    try {
      const dBResult = await updateTodo(todo, id);
      dispatch({type: UPDATE_TODO, todo, id})
    } catch (err) {
      throw err;
    }
  }
}

