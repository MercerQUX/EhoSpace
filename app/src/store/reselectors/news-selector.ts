import { RootState } from "../store";

export const stateAllNews = (state: RootState) => {
  return state.newsReducer.news
};

export const stateAllNewsReverse = (state: RootState) => {
  return [...state.newsReducer.news].reverse();
};