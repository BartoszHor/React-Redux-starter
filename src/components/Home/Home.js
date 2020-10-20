import React from 'react';
import styles from './Home.scss';
import ListLink from '../ListLink/ListLink';
import Creator from '../Creator/Creator';
import PropTypes from 'prop-types';
import Container from '../Container/Container';
import { Grid, Row} from 'react-flexbox-grid';

class Home extends React.Component {

static propTypes = {
  title: PropTypes.node,
  subtitle: PropTypes.node,
  lists: PropTypes.array,
  addList: PropTypes.func,
}

render() {
  const {lists, addList} = this.props;

  return (
    <main className={styles.component}>
      <Grid>
        <h1 className={styles.title}>Pick Your list or add new one</h1>
        <Row>
          {lists.map(listData => (
            <ListLink key={listData.id} {...listData} />
          ))}
        </Row>
        <Container>
   		<Creator text={'Add link to Your new List'} variant='danger' action={addList}/>
        </Container>
      </Grid>
    </main>
  );
}
}
export default Home;


/*

TRAINING FROM ANOTHER SOURCE

import React from 'react';
import styles from './App.scss';
import {pageContents, listData, settings} from '../../data/dataStore';
import {createStore, combineReducers, applyMiddleware} from 'redux'
import createLogger from 'redux-logger'
 

const mathReducer = (state = {
	result: 1,
	lastValue: [],
}, action) => {
	switch (action.type) {
		case "ADD":
			state = {
				...state,
				result: state.result + action.payload,
				lastValue: [...state.lastValue, action.payload]
			}
			break;

		case "SUBSTRACT":
			state = {
				...state,
				result: state.result - action.payload,
				lastValue: [...state.lastValue, action.payload]
			}
			break;
	}	
	return state
};

const userReducer = (state = {
	name: "Max",
	age: 32,
}, action) => {
	switch (action.type) {
		case "SET_NAME":
			state = {
				...state,
				name: action.payload			
			}
			break;

		case "SET_AGE":
			state = {
				...state,
				age: action.payload
			}
			break;
	}	
	return state
};

const myLogger = (store) => (next) => (action) => {
	console.log('Logged action', action); 
	next(action)
}

const store = createStore(combineReducers({mathReducer, userReducer}),
{}, 
applyMiddleware(createLogger)	
)

store.subscribe(() => {
	//console.log('store updated', store.getState())
});

store.dispatch({
	type: "ADD",
	payload: 12
})

store.dispatch({
	type: "ADD",
	payload: 100
})

store.dispatch({
	type: "SET_NAME",
	payload: "Anna"
})

store.dispatch({
	type: "SET_AGE",
	payload: 20
})

class App extends React.Component {

  render() {
    return (
      <main className={styles.component}>
        <h1 className={styles.title}>{pageContents.title}</h1>
      </main>
    )
  }
}

export default App;
*/