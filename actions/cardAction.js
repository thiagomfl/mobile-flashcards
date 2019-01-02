import { CREATE_CARD } from "./types";

export const createCard = (deckId, ask, answer) => ({
  type: CREATE_CARD,
  deckId,
  ask,
  amswer
});
