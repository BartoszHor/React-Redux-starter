import {connect} from 'react-redux';
import List from './List';

export const selectColumnsForList = ({columns}, listId) => columns.filter(column => column.listId == listId);

const mapStateToProps = (state, props) => ({
  columns: selectColumnsForList(state, props.id),
});

export default connect(mapStateToProps)(List);