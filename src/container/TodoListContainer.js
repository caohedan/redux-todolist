import { connect } from 'react-redux';
import TodoList from '../component/TodoList';
import { toggleTodo, updateTodo } from '../action';
import todosAPI from '../api/TodoResourseAPI';
const mapStateToProps = (state, ownProps) => {
  return {
    todos: state.todos,
    statusOfList: state.statusOfList
  };
};
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onToggleTodo: viewId => {
      const todo = todosAPI.toggleActive(viewId);
      dispatch(toggleTodo(todo));
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
