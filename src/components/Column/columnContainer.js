import {connect} from 'react-redux';
import Column from './Column';
import {selectCardsForColumns, createActionAddCard } from '../../redux/cardsRedux';
import { createActionRemoveColumn } from '../../redux/columnsRedux';

//export const selectCardsForColumn = ({cards}, columnId) => cards.filter(card => card.columnId == columnId);

const mapStateToProps = (state, props) => ({
  cards: selectCardsForColumns(state, props.id),
});

const mapDispatchToProps = (dispatch, props) => ({
  addCard: (title) => dispatch(createActionAddCard({
    columnId: props.id,
    title,
  })),
  removeColumn: (id) => dispatch(createActionRemoveColumn({
    id: id,
  })),
});

export default connect(mapStateToProps, mapDispatchToProps)(Column);