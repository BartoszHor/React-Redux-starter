import {connect} from 'react-redux';
import SearchResult from './SearchResult';
import {selectCardsForSearchResult} from '../../redux/cardsRedux';

//export const selectCardsForColumn = ({cards}, columnId) => cards.filter(card => card.columnId == columnId);

const mapStateToProps = (state, props) => ({
  cards: selectCardsForSearchResult(state, props.match.params.searchString),
});


export default connect(mapStateToProps, null)(SearchResult);