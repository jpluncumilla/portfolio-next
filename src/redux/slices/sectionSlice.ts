import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface MySliceState {
  sections: Record<string, boolean>;
}

const initialState: MySliceState = {
  sections: {
    about: false,
    work: false,
    contact: false,
    all: false,
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
  },
});

export const { setSection } = sectionSlice.actions;

export default sectionSlice.reducer;
