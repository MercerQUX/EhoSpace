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
        full_content_article: `This version has been improved to a state in which the application can function. The functionality is now minimal, but fully working at the moment This version is not an MVP pet project and requires a lot of improvements of which are important:
  More futher details:
    - Complete refactoring
    - Improvement of the real-time chat
    - Redesign with responsive design
    - And adding new functionality`,
      },
    },
    {
      id: 2,
      title: "First Releas project v0.2",
      timestamp: "31/12/2021",
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
        full_content_article: `The page you're on is created with this update! Many changes were made to the code itself.\n More details:\n   - New News page created\n   - Sorting of posts changed to: from new to old\n   - Sending posts and messages is now on <Enter> and line breaks on <Ctrl + Enter>\n   - The current time in sending posts and messages\n   - Smooth scrolling when clicking user downloads\n   - Adding a new logo\n  Fix:  \n   - Most code refactoring for further support\n   - Error in user subscription\n   - Convert most of the CSS to SASS for further support\n`,
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
