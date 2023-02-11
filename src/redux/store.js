import { configureStore } from "@reduxjs/toolkit";
import articleSlice from "./articleRedux";
const store = configureStore({
  reducer: { 
    articles: articleSlice,
},
});
export default store;