import {
  ADD_TODO,
  DELETE_TODO,
  TOGGLE_TODO,
} from "../actions";


function todos(state = [], action) {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        {
          id: action.id,
          todo: action.todo,
          completed: false,
        },
      ];
    case DELETE_TODO:
      return state.filter((todo) => todo.id !== action.id);
    case TOGGLE_TODO:
      return state.map((todo) =>
        todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
      );
    default:
      return state;
  }
}

export default todos;