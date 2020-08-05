import { ADD_TODO, DELETE_TODO, UPDATE_TODO, SET_TODOS } from "../actions";

function todos(state = [], action) {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        {
          id: action.id,
          todo: action.todo,
        },
      ];
    case DELETE_TODO:
      return state.filter((todo) => todo.id !== action.id);
    case UPDATE_TODO:
      return state.map((todo) => {
        if (todo.id !== action.id) {
          return todo;
        }
        return {
          id: action.id,
          todo: action.todo,
        };
      });
    case SET_TODOS:
      return action.todos.map((t) => {
        return {
          id: t.id,
          todo: t.todo
        }
      })
    default:
      return state;
  }
}

export default todos;
