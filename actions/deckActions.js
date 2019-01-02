import { RECEIVE_DECKS, CREATE_DECK } from "./types";

export const receiveDecks = decks => ({
  type: RECEIVE_DECKS,
  decks
})

export const createDeck = (id, name) => ({
  type: CREATE_DECK,
  id,
  name
})