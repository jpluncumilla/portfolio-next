import { combineReducers } from "@reduxjs/toolkit";
import exampleReducer from "./slices/exampleSlice";

const rootReducer = combineReducers({
  example: exampleReducer,
  // Add other reducers here
});

export default rootReducer;
