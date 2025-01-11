import { RootState } from "../store.ts";

export const getAutomakersList = (state: RootState) => state.automakers.automakers;
