import {connect} from 'react-redux';
import List from './List';
import {selectColumnsForList, createActionAddColumn } from '../../redux/columnsRedux';
//export const selectColumnsForList = ({columns}, listId) => columns.filter(column => column.listId == listId);
import { createAction_moveCard } from '../../redux/cardsRedux';

const mapStateToProps = (state, props) => {
  const filteredLists = state.lists.filter(list => list.id == props.match.params.id);
  console.log(props.match);
  const listParams = filteredLists[0] || {};
  return {
    ...listParams,
    columns: selectColumnsForList(state, props.match.params.id),
  };
};

const mapDispatchToProps = (dispatch, props) => ({
  addColumn: title => dispatch(createActionAddColumn({
    listId: props.match.params.id,
    title,
  })),
  moveCard: payload => dispatch(createAction_moveCard(payload)),

});
export default connect(mapStateToProps, mapDispatchToProps)(List);

