// action types

export const ADD_TODO = "ADD_TODO";
export const DELETE_TODO = "DELETE_TODO";
export const UPDATE_TODO = "UPDATE_TODO";

// action creators
let todoID = 0; 

export function addTodo(todo) {
  return {
    type: ADD_TODO, 
    id: todoID++,
    todo
  }
}

export function deleteTodo(id) {
  return {
    type: DELETE_TODO, 
    id, 
  }
}

export function updateTodo(todo, id) {
  return {
    type: UPDATE_TODO, 
    todo, 
    id
  }
}
