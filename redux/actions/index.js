// action types

export const ADD_TODO = "ADD_TODO";
export const DELETE_TODO = "DELETE_TODO";

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
