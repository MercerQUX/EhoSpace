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
          id: 1,
          body: "#developer",
          color_text: "#ff0000",
          color_background: "#ffa500",
          color_outline: "#fff700",
        },
        {
          id: 2,
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
        full_content_article:
          "This version has been improved to a state in which the application can function. The functionality is now minimal, but fully working at the moment This version is not an MVP pet project and requires a lot of improvements of which are important: <br/><b>More futher details:</b> <p>- Complete refactoring</p> <p>- Improvement of the real-time chat</p> <p>- Redesign with responsive design</p> <p>- And adding new functionality`</p> <p>Thank you for your support and attention to my pet-project. We also continue to actively develop the project with any useful criticism!</p>",
      },
    },
    {
      id: 2,
      title: "Releas project v0.2",
      timestamp: "31/12/2021",
      title_article: "Refactoring and creating a new NEWS page",
      cutted_content_article:
        "The page you're on is created with this update! Many changes were made to the code itself...",
      tags: [
        {
          id: 1,
          body: "#developer",
          color_text: "#ff0000",
          color_background: "#ffa500",
          color_outline: "#fff700",
        },
        {
          id: 2,
          body: "#released",
          color_text: "#ff0000",
          color_background: "#ffffff",
          color_outline: "#000000",
        },
        {
          id: 3,
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
        full_content_article:
          "The page you're on is created with this update! Many changes were made to the code itself. <br /><b>More details:</b> <p>- New News page created</p> <p>- Sorting of posts changed to: from new to old</p> <p>- Sending posts and messages is now on <b>Enter</b> and line breaks on <b>Ctrl+Enter</b></p> <p>- The current time in sending posts and messages</p> <p>- Smooth scrolling when clicking user load</p> <p>- Adding a new logo</p> <br /><b>Fix:</b> <p>- Most code refactoring for further support</p> <p>- Error in user subscription</p> <p>- Convert most of the CSS to SASS for further support</p> <br/><p>Thank you for your support and attention to my pet-project. We also continue to actively develop the project with any useful criticism!</p>",
      },
    },
    {
      id: 3,
      title: "Releas project v0.3",
      timestamp: "07/01/2022",
      title_article:
        "Added functionality for the post and creating a new CONTACTS page",
      cutted_content_article:
        "Now posts can be edited and deleted, there were also many minor edits in the code that improved the state of the application for support...",
      tags: [
        {
          id: 1,
          body: "#developer",
          color_text: "#ff0000",
          color_background: "#ffa500",
          color_outline: "#fff700",
        },
        {
          id: 2,
          body: "#released",
          color_text: "#ff0000",
          color_background: "#ffffff",
          color_outline: "#000000",
        },
        {
          id: 3,
          body: "#newpage",
          color_text: "#000000",
          color_background: "#ff4343",
          color_outline: "#000000",
        },
      ],
      colors: {
        color_title: "#A69A00",
        color_background: "#370470",
      },
      content_dive: {
        author: "MercerQUX",
        full_content_article:
          "Now posts can be edited and deleted, there were also many minor edits in the code that improved the state of the application for support. <br /><b>More details:</b> <p>- Posts can be deleted and edited</p> <p>- Added a page for your subscriptions, it is located in <b>/contacts</b></p> <p>- Added a description of the site for publications in other sources</p> <p>- Changed site icon</p> <br /><b>Fix:</b> <p>- Fixed a bug where the text in the article was merged</p> <p>- Fixed application crash when loading users in <b>/users</b></p> <p>- If the city is not specified, now it does not display it</p> <p>- The news grid collapsed, fixed.</p> <p>Thank you for your support and attention to my pet-project. We also continue to actively develop the project with any useful criticism!</p>",
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
