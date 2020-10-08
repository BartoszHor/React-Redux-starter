import React from 'react';
import styles from './App.scss';
import List from '../List/listContainer';
import Creator from '../Creator/Creator';
import PropTypes from 'prop-types';
import {DragDropContext} from 'react-beautiful-dnd';

class App extends React.Component {

static propTypes = {
  title: PropTypes.node,
  subtitle: PropTypes.node,
  lists: PropTypes.array,
  addList: PropTypes.func,
}

render() {
  const {lists, title, addList} = this.props;
  const moveCardHandler = result => {
    if(
      result.destination
    &&
    (
      result.destination.index != result.source.index
      ||
      result.destination.droppableId != result.source.droppableId
    )
    ){
      console.log({
        id: result.draggableId,
        dest: {
          index: result.destination.index,
          columnId: result.destination.droppableId,
        },
        src: {
          index: result.source.index,
          columnId: result.source.droppableId,
        },
      });
    }
  };
  return (
    <main className={styles.component}>
      <h1 className={styles.title}>{title}</h1>
      <DragDropContext onDragEnd={moveCardHandler}>
        {lists.map(listData => (
          <List key={listData.id} {...listData} />
        ))}
      </DragDropContext>
   		<Creator text={'Name Your new list'} variant='danger' action={addList}/>
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