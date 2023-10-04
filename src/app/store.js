import { configureStore } from "@reduxjs/toolkit";

import topicReducer  from "../features/topics/topicSlice";
import quizzesReducer from "../features/quizzes/quizzesSlice";
import cardsReducer from "../features/cards/cardSlice";
// import reducers

export default configureStore({
  reducer: {
    topics: topicReducer,
    quizzes: quizzesReducer,
    cards: cardsReducer

  },
});
