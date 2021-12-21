import { getByUserLoginDB } from "../../services/DB/getBySingleUser";

export const remakeEmailInLogin = async (email_login: string) => {
  const regExpEmail = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})/;
  return regExpEmail.test(email_login)
    ? email_login
    : await getByUserLoginDB(email_login);
};
