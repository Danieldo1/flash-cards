import { createSlice } from "@reduxjs/toolkit";



// const topicId = uuidv4();
 const topicSlice = createSlice({
    name: "topics",
    initialState: {
        topics: {}
    },
    reducers: {
       addTopic: (state, action) => {
        const {topicId, name, icon} = action.payload;
          state.topics[topicId] = {
            id: topicId,
            name: name,
            icon,
            quizIds: []
          }
          return state;
       },
       addQuizId: (state, action) => {
        const {topicId, quizId} = action.payload;
        state.topics[topicId].quizIds.push(quizId);
       }
    }
})

export const selectTopics = (state) => {
    return state.topics.topics
}

export const { addTopic, addQuizId } = topicSlice.actions;

export default topicSlice.reducer