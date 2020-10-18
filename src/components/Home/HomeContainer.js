import {connect} from 'react-redux';
import Home from './Home';
import { createActionAddList } from '../../redux/listsRedux';

const mapStateToProps = state => ({
  title: state.app.title,
  subtitle: state.app.subtitle,
  lists: state.lists,
});


const mapDispatchToProps = dispatch => ({
  addList: title => dispatch(createActionAddList({
    title,
    description: 'Lets do it',
    link: 'https://images.pexels.com/photos/3785927/pexels-photo-3785927.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
  })),
});


export default connect(mapStateToProps, mapDispatchToProps)(Home);