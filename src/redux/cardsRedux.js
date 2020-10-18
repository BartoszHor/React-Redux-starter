import shortid from 'shortid';

//selectors
export const selectCardsForColumns = ({cards}, columnId) => cards.filter(card => card.columnId == columnId).sort((a, b) => (a.index > b.index) ? 1 : -1);

export const selectCardsForSearchResult = ({cards}, searchString) => cards.filter(card => new RegExp(searchString, 'i').test(card.title));


//action name creator
const reducerName = 'cards';
const createActionName = name => `app/${reducerName}/${name}`;

//action types 

export const ADD_CARD = createActionName('ADD_CARD');
export const MOVE_CARD = createActionName('MOVE_CARD');
export const REMOVE_CARD = createActionName('REMOVE_CARD');
export const REMOVE_CARDS = createActionName('REMOVE_CARDS');


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


export const createActionRemoveCard = payload => ({
  payload: { ...payload}, 
  type: REMOVE_CARD,
});

export const createActionRemoveCards = payload => ({
  payload: { ...payload}, 
  type: REMOVE_CARDS,
});
//reducer

export default function CardReducer (state = [], action = {}) {
  switch(action.type) {
    case REMOVE_CARDS:
      return state.filter(card => card.columnId != action.payload.id);
    case REMOVE_CARD:
      return state.filter(card => card.id != action.payload.id);
    case ADD_CARD: {
      const filteredCards = state.filter(card => card.columnId == action.payload.columnId);
      const lastCard = filteredCards[filteredCards.length - 1];
      const newIndex = lastCard ? lastCard.index + 1 : 0;
      const newCard = {...action.payload,
        index: newIndex,
      };
      return [...state, newCard];
    }

    case MOVE_CARD: {	
      const {id, src, dest} = action.payload;
      const targetCard = state.filter(card => card.id == id)[0];
      const targetColumnCards = state.filter(card => card.columnId == dest.columnId).sort((a, b) => a.index - b.index);
      if (dest.columnId == src.columnId){
        targetColumnCards.splice(src.index, 1);
        targetColumnCards.splice(dest.index, 0, targetCard);
        return state.map(card => {
          const targetColumnIndex = targetColumnCards.indexOf(card);
          if(targetColumnIndex > -1 && card.index != targetColumnIndex){
            return {...card, index: targetColumnIndex}; 	 
          } else {
            return card;
          }
        });
      } else {
        let sourceColumnCards = state.filter(card => card.columnId == src.columnId).sort((a, b) => a.index - b.index);

        sourceColumnCards.splice(src.index, 1);
        targetColumnCards.splice(dest.index, 0, targetCard);

        return state.map(card => {
          const targetColumnIndex = targetColumnCards.indexOf(card);

          if(card == targetCard){
            return {...card, index: targetColumnIndex, columnId: dest.columnId};
          } else if(targetColumnIndex > -1 && card.index != targetColumnIndex){
   
            return {...card, index: targetColumnIndex};
          } else {

            const sourceColumnIndex = sourceColumnCards.indexOf(card);

            if(sourceColumnIndex > -1 && card.index != sourceColumnIndex){
              // card is in sourceColumn
              return {...card, index: sourceColumnIndex};
            } else {
              return card;
            }
          }
        });
      }   
    }
    default:
      return state;
  }
}