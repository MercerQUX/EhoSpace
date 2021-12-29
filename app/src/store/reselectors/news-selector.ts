import { IArticle } from "./../../models/INews";
import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../store";

export const getNews = (state: RootState) => {
  return state.newsReducer.news;
};

export const getEvenNews = createSelector(getNews, (news: any) => {
  return news.filter((news: IArticle) => news.id % 2 === 0).reverse();
});

export const getOddNews = createSelector(getNews, (news: any) => {
  return news.filter((news: IArticle) => news.id % 2 !== 0).reverse();
});
