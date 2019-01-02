import { RECEIVE_DECKS, CREATE_DECK, CREATE_CARD } from "../actions/types";

const initialState = null;

const decks = (state = initialState, action) => {
  switch (action.types) {
    case RECEIVE_DECKS:
      return {
        ...state,
        ...action.decks
      }

    case CREATE_DECK:
      return {
        ...state,
        [action.id]: {
          id: action.id,
          name: action.name,
          cards: []
        }
      }
    
    case CREATE_CARD:
      return {
        ...state,
        [action.deckId]: {
          ...state[action.deckId],
          cards: [
            ...state[action.deckId].cards,
            { ask: action.ask, answer: action.answer }
          ]
        }
      }

    default:
      return state;
  }
}

export default decks