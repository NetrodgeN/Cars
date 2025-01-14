import { RootState } from "../store.ts";

export const getAutomakersList = (state: RootState) => state.automakers.automakers;
export const getActualSpecification = (state: RootState) => state.automakers.specification;
