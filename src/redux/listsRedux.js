
const reducerName = 'lists';

const createActionName = name => `app/${reducerName}/${name}`;

export const ADD_LIST = createActionName('ADD_LIST');

export const createActionAddList = payload => ({
  payload: {...payload,
  }, 
  type: ADD_LIST});

//reducer

export default function listReducer (state = [], action = {}) {
  switch(action.type) {
    case ADD_LIST: {
      const lastList = state[state.length - 1];
      const lastListId = parseInt(lastList.id.replace('list-',''));
      const newListId = 'list-' + parseInt(lastListId + 1);
      const newList = {...action.payload,
        id: newListId};
      return [...state, newList];
    }
    default:
      return state;
  }
}