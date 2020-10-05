import {connect} from 'react-redux';
import Column from './Column';

export const selectCardsForColumn = ({cards}, columnId) => cards.filter(card => card.columnId == columnId);

const mapStateToProps = (state, props) => ({
  cards: selectCardsForColumn(state, props.id),
});

export default connect(mapStateToProps)(Column);