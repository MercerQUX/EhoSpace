import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchMessageType, sendedMessageType } from "../../models/IDialogs";
import { fetchChatDB, uploadChatDB } from "../../services/DB/ChatDB";
import { fetchShortProfile } from "../../services/DB/FetchProfile";

export const fetchArrayFollowUsers = createAsyncThunk(
  "dialogs/FetchArray",
  async (payload: number[], thunkAPI) => {
    const shortProfiles = await fetchShortProfile(Object.values(payload));
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
      timestamp: "00:00:00 01/01/2022",
    };
    await uploadChatDB({
      idSender,
      idAdress,
      addMessages: newMessage,
    });
    return newMessage;
  }
);
