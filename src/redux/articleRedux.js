import { createSlice } from "@reduxjs/toolkit";

const articleSlice = createSlice({
  name: "article",
  initialState: [],
  reducers: {
    addArticle: (state, action) => {
      state.push(action.payload);
    },
    delArticle: (state, action) => {
        console.log(action.payload)
      state.splice(action.payload, 1);
    
    },
    editArticle: (state, action) => {
      state[action.payload.index] = action.payload;
    },
  },
});

export const { addArticle, delArticle, editArticle } = articleSlice.actions;
export default articleSlice.reducer;
