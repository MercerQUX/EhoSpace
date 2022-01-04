import { IArticle } from "./../../models/INews";
import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../store";

export const stateAllNews = (state: RootState) => {
  return state.newsReducer.news;
};

export const stateEvenNews = createSelector(stateAllNews, (news: any) => {
  return news.filter((news: IArticle) => news.id % 2 === 0).reverse();
});

export const stateOddNews = createSelector(stateAllNews, (news: any) => {
  return news.filter((news: IArticle) => news.id % 2 !== 0).reverse();
});
