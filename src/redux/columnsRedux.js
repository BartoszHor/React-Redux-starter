import shortid from 'shortid';

//selectors
export const selectColumnsForList = ({columns}, listId) => columns.filter(column => column.listId == listId);

//action name creator
const reducerName = 'columns';
const createActionName = name => `app/${reducerName}/${name}`;

//action types 

export const ADD_COLUMN = createActionName('ADD_COLUMN');
export const REMOVE_COLUMN = createActionName('REMOVE_COLUMN');

// action creators 

export const createActionAddColumn = payload => ({
  payload: { ...payload,
    id: shortid.generate() }, 
  type: ADD_COLUMN});

export const createActionRemoveColumn = payload => ({
  payload: { ...payload}, 
  type: REMOVE_COLUMN,
});

//reducer

export default function ColumnReducer (state = [], action = {}) {
  switch(action.type) {
    case REMOVE_COLUMN:{
      return state.filter(column => column.id != action.payload.id); 
    }
    case ADD_COLUMN:
      return [...state, action.payload];
    default:
      return state;
  }
}
