import React from 'react';
import styles from './App.scss';
import List from '../List/listContainer';
import Creator from '../Creator/Creator';
import PropTypes from 'prop-types';

class App extends React.Component {

static propTypes = {
  title: PropTypes.node,
  subtitle: PropTypes.node,
  lists: PropTypes.array,
}

render() {
  const {lists, title, subtitle} = this.props;
  return (
    <main className={styles.component}>
      <h1 className={styles.title}>{title}</h1>
      <h2 className={styles.subtitle}>{subtitle}</h2>
      {lists.map(listData => (
        <List key={listData.id} {...listData} />
      ))}
   		<Creator text={'Name Your new list'} variant='danger' action={title => this.addList(title)}/>
  
    </main>
  );
}
}

export default App;


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