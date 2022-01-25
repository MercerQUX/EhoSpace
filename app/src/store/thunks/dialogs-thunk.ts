import { createAsyncThunk } from "@reduxjs/toolkit";
import { format } from "date-fns";
import { fetchMessageType, sendedMessageType } from "../../models/IDialogs";
import { fetchChatDB, uploadChatDB } from "../../services/DB/chatDB";
import { fetchShortProfileDB } from "../../services/DB/fetchProfileDB";

export const fetchArrayFollowUsers = createAsyncThunk(
  "dialogs/FetchArray",
  async (payload: number[], thunkAPI) => {
    try {
      const shortProfiles = await fetchShortProfileDB(Object.values(payload));
      return shortProfiles;
    } catch (e) {
      return [];
    }
  }
);

export const fetchChatMessages = createAsyncThunk(
  "dialogs/fetchMessages",
  async (payload: fetchMessageType, thunkAPI) => {
    try {
      const message = await fetchChatDB(payload);
      return message;
    } catch (error) {
      return [];
    }
  }
);

export const sendMessages = createAsyncThunk(
  "dialogs/sendMessage",
  async (payload: sendedMessageType, thunkAPI: { getState: any }) => {
    const { idSender, idAdress, messageBody } = payload;
    const newMessage = {
      id: Math.floor(Date.now() / 100),
      body: messageBody,
      idSender: idSender,
      timestamp: format(new Date(), "Pp"),
    };
    try {
      await uploadChatDB({
        idSender,
        idAdress,
        addMessages: newMessage,
      });
      return newMessage;
    } catch (e) {
      alert("no network or server reject");
    }
  }
);
