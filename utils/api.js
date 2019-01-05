import { AsyncStorage } from "react-native";

export const FLASHCARD_KEY = "Udacity:FlashCards";

export const getDecks = () => {
  return AsyncStorage.getItem(FLASHCARD_KEY).then(results => {
    const data = JSON.parse(results);
    return data;
  });
};

export const saveDeck = deck => {
  return AsyncStorage.mergeItem(
    FLASHCARD_KEY,
    JSON.stringify({ [deck.id]: deck })
  );
};

export const saveCard = (deckId, card) => {
  return AsyncStorage.getItem(FLASHCARD_KEY).then(results => {
    const data = JSON.parse(results);

    data[deckId] = {
      ...data[deckId],
      cards: [
        ...data[deckId].cards,
        {
          ask: card.ask,
          answer: card.answer
        }
      ]
    };

    AsyncStorage.setItem(FLASHCARD_KEY, JSON.stringify(data));
  });
};
