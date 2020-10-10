import shortid from 'shortid';

//selectors
export const selectCardsForColumns = ({cards, searchString}, columnId) => cards.filter(card => card.columnId == columnId && new RegExp(searchString, 'i').test(card.title));
//action name creator
const reducerName = 'cards';
const createActionName = name => `app/${reducerName}/${name}`;

//action types 

export const ADD_CARD = createActionName('ADD_CARD');
export const MOVE_CARD = createActionName('MOVE_CARD');

export const createAction_moveCard = payload => ({
  payload: {...payload},
  type: MOVE_CARD,
});

// action creators 

export const createActionAddCard = payload => ({
  payload: { ...payload,
    id: shortid.generate() }, 
  type: ADD_CARD,
});

//reducer

export default function CardReducer (state = [], action = {}) {
  switch(action.type) {
    case ADD_CARD:
      return [...state, action.payload];
    case MOVE_CARD: {	
      const {id, src, dest} = action.payload;
      const targetCard = state.filter(card => card.id == id)[0];
      const targetColumnCards = state.filter(card => card.columnId == dest.columnId).sort((a, b) => a.index - b.index);
      //console.log(targetColumnCards)
      if (dest.columnId == src.columnId){
        targetColumnCards.splice(src.index, 1);
        targetColumnCards.splice(dest.index, 0, targetCard);
        console.log(targetColumnCards);
        return state.map(card => {
          const targetColumnIndex = targetColumnCards.indexOf(card);

          if(targetColumnIndex > -1 && card.index != targetColumnIndex){
            console.log(targetColumnCards.map(card => `${card.index}, title: ${card.title}`));
            return {...card, index: targetColumnIndex}; 	 
          } else {
            return card;
          }
        });
      } else {
        return state;
      }   
    }
    default:
      return state;
  }
}