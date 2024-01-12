import { combineReducers } from "@reduxjs/toolkit";
import sectionSlice from "./slices/sectionSlice";

const rootReducer = combineReducers({
  section: sectionSlice,
});

export default rootReducer;
