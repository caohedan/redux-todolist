import * as types from '../constants/ActionTypes';
import Todo from '../model/Todo';
export default (
  state = {
    todos: [],
    statusOfList: Todo.ALL
  },
  action
) => {
  switch (action.type) {
    case types.ADDITEM: {
      return {
        ...state,
        todos: [...state.todos, action.todo]
      };
    }
    case types.TOGGOLE: {
      return {
        ...state,
        todos: state.todos.map(
          todo => (todo.viewId === action.todo.viewId ? action.todo : todo)
        )
      };
    }
    case types.UPDATE: {
      return {
        ...state,
        todos: state.todos.map(
          todo =>
            todo.viewId === action.todo.viewId
              ? { ...todo, content: action.todo.content }
              : todo
        )
      };
    }
    case types.FILTER: {
      return {
        todos: [...action.todos],
        statusOfList: action.statusOfList
      };
    }
    default:
      return state;
  }
};
