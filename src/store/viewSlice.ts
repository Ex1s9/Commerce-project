import { createSlice, PayloadAction } from "@reduxjs/toolkit";


type ViewState= {
   activeView: string;
}

const initialState = {
   activeView: "home",
}

const viewSlice = createSlice({
   name: "view",
   initialState,
   reducers: {
      setView: (state, action: PayloadAction<string>) => {
         state.activeView = action.payload;
      },
   },
});

export const { setView } = viewSlice.actions;
export default viewSlice.reducer;