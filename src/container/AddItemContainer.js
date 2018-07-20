import { connect } from 'react-redux';
import AddItem from '../component/AddItem';
import { addItem } from '../action';
import todosAPI from '../api/TodoResourseAPI';
const mapStateToProps = (state, ownProps) => {
  return {
    statusOfList: state.statusOfList
  };
};
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onAddItem: todo => {
      todosAPI.add(todo);
      dispatch(addItem(todo));
    }
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddItem);
