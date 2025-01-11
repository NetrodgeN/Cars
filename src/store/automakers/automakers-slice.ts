import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Automakers } from "../../pages/types.ts";
import { db } from "./db.ts";

interface AutomakersSliceType {
  automakers: Automakers[];
}

const initialState: AutomakersSliceType = {
  automakers: db,
};

export const automakersSlice = createSlice({
  name: "automakers-slice",
  initialState,
  reducers: {
    updateAutomaker: (state, action: PayloadAction<Automakers[]>) => {
      state.automakers = action.payload;
    },
  },
});

export const { actions: automakersSliceActions } = automakersSlice;
export const { reducer: automakersSliceReducer } = automakersSlice;
