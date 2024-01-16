import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface MySliceState {
  sections: Record<string, boolean>;
}

const initialState: MySliceState = {
  sections: {
    about: false,
    work: false,
    contact: false,
  },
};

const sectionSlice = createSlice({
  name: "mySlice",
  initialState,
  reducers: {
    setSection: (state, action: PayloadAction<string>) => {
      Object.keys(state.sections).forEach((section) => {
        state.sections[section] = section === action.payload;
      });
    },
    resetSections: (state) => {
      // Turn all sections back to false
      Object.keys(state.sections).forEach((section) => {
        state.sections[section] = false;
      });
    },
  },
});

export const { setSection, resetSections } = sectionSlice.actions;

export default sectionSlice.reducer;
