import { getDatabase, get, set, ref } from "firebase/database";
import { fetchMessageType, uploadMessageType } from "../../models/IDialogs";

export const fetchChatDB = async ({ idSender, idAdress }: fetchMessageType) => {
  const db = getDatabase();
  const roomID = idSender * Number(idAdress);
  const fetchDialogs = ref(db, `chat/${roomID}`);
  const message = await (await get(fetchDialogs)).exportVal();
  return Object.values(message);
};

export const uploadChatDB = async ({
  idSender,
  idAdress,
  addMessages,
}: uploadMessageType) => {
  const db = getDatabase();
  const refSize = ref(db, `chat/${idSender * idAdress}`);
  const totalMessage = await (await get(refSize)).size;
  const reference = ref(db, `chat/${idSender * idAdress}/${totalMessage}`);
  await set(reference, addMessages);
};
