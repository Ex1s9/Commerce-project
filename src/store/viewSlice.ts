import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type ViewState = {
   activeView: string;
   targetSection: string | null;
};

const initialState: ViewState = {
   activeView: "home",
   targetSection: null,
};

const viewSlice = createSlice({
   name: "view",
   initialState,
   reducers: {
      setView: (state, action: PayloadAction<string>) => {
         state.activeView = action.payload;
      },
      setTargetSection: (state, action: PayloadAction<string | null>) => {
         state.targetSection = action.payload;
      },
   },
});

export const { setView, setTargetSection } = viewSlice.actions;
export default viewSlice.reducer;
