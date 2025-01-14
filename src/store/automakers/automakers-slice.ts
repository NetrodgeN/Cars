import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {Automakers, Specification} from "../../pages/types.ts";
import { db } from "./db.ts";

interface AutomakersSliceType {
  automakers: Automakers[];
  specification: Specification;
}

const initialState: AutomakersSliceType = {
  automakers: db,
  specification: {}
};

export const automakersSlice = createSlice({
  name: "automakers-slice",
  initialState,
  reducers: {
    updateAutomaker: (state, action: PayloadAction<Automakers[]>) => {
      state.automakers = action.payload;
    },
    setActualSpecification: (state, action: PayloadAction<Specification>) => {
      state.specification = action.payload;
    },
  },
});

export const { actions: automakersSliceActions } = automakersSlice;
export const { reducer: automakersSliceReducer } = automakersSlice;
