import { createSlice } from "@reduxjs/toolkit";
import { IArticle } from "../../models/INews";
interface initialStateType {
  news: Array<IArticle>;
}

const initialState: initialStateType = {
  news: [
    {
      id: 1,
      title: "First Releas project v0.1",
      timestamp: "20/12/2021",
      title_article: "The first deploy project",
      cutted_content_article:
        "This version has been finalized to the state in which the application can function, was created on the basis of...",
      tags: [
        {
          body: "#developer",
          color_text: "#ff0000",
          color_background: "#ffa500",
          color_outline: "#fff700",
        },
        {
          body: "#released",
          color_text: "#ff0000",
          color_background: "#ffffff",
          color_outline: "#000000",
        },
      ],
      colors: {
        color_title: "#00ffe7",
        color_background: "#00d151",
      },
      content_dive: {
        author: "MercerQUX",
        full_content_article: "",
      },
    },
    {
      id: 2,
      title: "First Releas project v0.2",
      timestamp: "20/12/2021",
      title_article: "Refactoring and creating a new NEWS page",
      cutted_content_article:
        "The page you're on is created with this update! Many changes were made to the code itself...",
      tags: [
        {
          body: "#developer",
          color_text: "#ff0000",
          color_background: "#ffa500",
          color_outline: "#fff700",
        },
        {
          body: "#released",
          color_text: "#ff0000",
          color_background: "#ffffff",
          color_outline: "#000000",
        },
        {
          body: "#newpage",
          color_text: "#000000",
          color_background: "#ff4343",
          color_outline: "#000000",
        },
      ],
      colors: {
        color_title: "#e5e5e5",
        color_background: "#7c36c9e6",
      },
      content_dive: {
        author: "MercerQUX",
        full_content_article:"The page you're on is created with this update! Many changes were made to the code itself.\n More details:\n   - Delet\n   - Setet"
      },
    },
  ],
};

const newsSlice = createSlice({
  name: "newsReducer",
  initialState,
  reducers: {},
});

export const newsAction = newsSlice.actions;
export const newsReducer = newsSlice.reducer;
