import { connect } from 'react-redux';
import FilterList from '../component/FilterList';
import { filterTodos } from '../action';
import todosAPI from '../api/TodoResourseAPI';
const mapStateToProps = (state, ownProps) => {
  return {
    todos: state.todos,
    statusOfList: state.statusOfList
  };
};
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onFilterTodos: statusOfList => {
      const todos = todosAPI.filerByStatus(statusOfList);
      dispatch(filterTodos(todos, statusOfList));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FilterList);
