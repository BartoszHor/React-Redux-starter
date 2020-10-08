
const reducerName = 'lists';

const createActionName = name => `app/${reducerName}/${name}`;

export const ADD_LIST = createActionName('ADD_LIST');

export const createActionAddList = payload => ({
  payload: { ...payload,
  }, 
  type: ADD_LIST});

//reducer

export default function listReducer (state = [], action = {}) {
  switch(action.type) {
    case ADD_LIST:
      return [...state, action.payload];
    default:
      return state;
  }
}