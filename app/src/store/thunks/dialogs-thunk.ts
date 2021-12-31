import { createAsyncThunk } from "@reduxjs/toolkit";
import { format } from "date-fns";
import { fetchMessageType, sendedMessageType } from "../../models/IDialogs";
import { fetchChatDB, uploadChatDB } from "../../services/DB/chatDB";
import { fetchShortProfileDB } from "../../services/DB/fetchProfileDB";

export const fetchArrayFollowUsers = createAsyncThunk(
  "dialogs/FetchArray",
  async (payload: number[], thunkAPI) => {
    const shortProfiles = await fetchShortProfileDB(Object.values(payload));
    return shortProfiles;
  }
);

export const fetchChatMessages = createAsyncThunk(
  "dialogs/fetchMessages",
  async (payload: fetchMessageType, thunkAPI) => {
    if (payload.idAdress) {
      const message = await fetchChatDB(payload);
      return message;
    } else {
      return [];
    }
  }
);

export const sendMessages = createAsyncThunk(
  "dialogs/sendMessage",
  async (payload: sendedMessageType, thunkAPI: { getState: any }) => {
    const { idSender, idAdress, messageBody } = payload;
    const newMessage = {
      id: thunkAPI.getState().dialogsReducer.dialogsMessages.length,
      body: messageBody,
      idSender: idSender,
      timestamp: format(new Date(), "Pp"),
    };
    await uploadChatDB({
      idSender,
      idAdress,
      addMessages: newMessage,
    });
    return newMessage;
  }
);
