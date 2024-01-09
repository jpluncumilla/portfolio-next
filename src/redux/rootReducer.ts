import { combineReducers } from "@reduxjs/toolkit";
import exampleReducer from "./slices/exampleSlice";
import sectionSlice from "./slices/sectionSlice";

const rootReducer = combineReducers({
  example: exampleReducer,
  section: sectionSlice,
  // Add other reducers here
});

export default rootReducer;
