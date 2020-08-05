import { ADD_TODO, DELETE_TODO, SET_TODOS } from "../actions";

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
    case SET_TODOS:
      return action.todos.map((t) => {
        return {
          id: t.id,
          todo: t.todo,
        };
      });
    default:
      return state;
  }
}

export default todos;
