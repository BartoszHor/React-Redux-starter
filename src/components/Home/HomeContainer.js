import {connect} from 'react-redux';
import Home from './Home';
import { createActionAddList } from '../../redux/listsRedux';
import { createAction_moveCard } from '../../redux/cardsRedux';

const mapStateToProps = state => ({
  title: state.app.title,
  subtitle: state.app.subtitle,
  lists: state.lists,
});


const mapDispatchToProps = dispatch => ({
  addList: title => dispatch(createActionAddList({
    title,
    description: 'Lets do it',
  })),
  moveCard: payload => dispatch(createAction_moveCard(payload)),
});


export default connect(mapStateToProps, mapDispatchToProps)(Home);