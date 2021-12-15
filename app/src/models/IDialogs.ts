export interface dialogsUsersType {
  id: number;
  name: string;
  avatar: string;
  surname: string;
  nickname: string;
}
export interface dialogsMessagesType {
  id: number;
  body: string;
  timestamp: string;
  idSender: number;
}

export type fetchMessageType = {
  idSender: number;
  idAdress?: string;
};

export type uploadMessageType = {
  idSender: number;
  idAdress: number;
  addMessages: dialogsMessagesType;
};

export type sendedMessageType = {
  idSender: number;
  idAdress: number;
  messageBody: string;
};
