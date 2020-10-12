import {connect} from 'react-redux';
import Card from './Card';
import { createActionRemoveCard } from '../../redux/cardsRedux';

//export const selectCardsForColumn = ({cards}, columnId) => cards.filter(card => card.columnId == columnId);


const mapDispatchToProps = (dispatch) => ({
  removeCard: (id) => dispatch(createActionRemoveCard({
    id: id,
  })),
});

export default connect(null, mapDispatchToProps)(Card);