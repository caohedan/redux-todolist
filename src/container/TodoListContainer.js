import { connect } from 'react-redux';
import TodoList from '../component/TodoList';
import { filterTodos, toggleTodo, updateTodo } from '../action';
import todosAPI from '../api/TodoResourseAPI';
const mapStateToProps = (state, ownProps) => {
  return {
    todos: state.todos,
    statusOfList: state.statusOfList
  };
};
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onToggleTodo: (viewId, statusOfList) => {
      const todo = todosAPI.toggleActive(viewId);
      const todos = todosAPI.filerByStatus(statusOfList);
      dispatch(toggleTodo(todo));
      dispatch(filterTodos(todos, statusOfList));
    },
    onUpdateTodo: (viewId, content) => {
      const todo = todosAPI.updateItemContent(viewId, content);
      dispatch(updateTodo(todo));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);
